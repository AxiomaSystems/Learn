import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
} from "@nestjs/common";
import type { FileModerationQueue, FileScanStatus } from "@axioma/domain";
import { z } from "zod";
import { PrismaService } from "../db/prisma.service";

const FALLBACK_FILE_MODERATION_QUEUE: FileModerationQueue = {
  source: "fallback",
  institutionName: "North River University",
  items: [
    {
      submissionId: "44444444-4444-4444-4444-444444444442",
      courseworkId: "33333333-3333-3333-3333-333333333332",
      classCode: "MATH 120",
      classTitle: "Applied Statistics",
      courseworkTitle: "Problem Set 3",
      studentName: "Nysa Thompson",
      fileName: "problem-set-3-workbook.xlsx",
      mimeType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      fileSizeBytes: 184210,
      storageKey: "submissions/math-120/problem-set-3/nysa-thompson-v1.xlsx",
      scanStatus: "pending_scan",
      scannedAt: null,
      scanNotes: "Waiting for manual moderation.",
      submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    },
  ],
};

const fileModerationUpdateSchema = z.object({
  scanStatus: z.enum(["PENDING_SCAN", "CLEAN", "QUARANTINED", "REJECTED"]),
  scanNotes: z.string().trim().max(4000).nullable().optional(),
});

function toFileScanStatus(
  status: "PENDING_SCAN" | "CLEAN" | "QUARANTINED" | "REJECTED" | null | undefined,
): FileScanStatus {
  if (status === "CLEAN") return "clean";
  if (status === "QUARANTINED") return "quarantined";
  if (status === "REJECTED") return "rejected";
  return "pending_scan";
}

@Controller("admin")
export class AdminController {
  constructor(private readonly prisma: PrismaService) {}

  @Get("file-moderation")
  async getFileModerationQueue(): Promise<FileModerationQueue> {
    try {
      const institution = await this.prisma.institution.findFirst({
        orderBy: {
          createdAt: "asc",
        },
      });

      if (!institution) {
        return FALLBACK_FILE_MODERATION_QUEUE;
      }

      const submissions = await this.prisma.submission.findMany({
        where: {
          storageKey: {
            not: null,
          },
          fileName: {
            not: null,
          },
        },
        include: {
          student: true,
          coursework: {
            include: {
              class: true,
            },
          },
        },
        orderBy: [{ scannedAt: "asc" }, { submittedAt: "desc" }, { createdAt: "desc" }],
      });

      return {
        source: "database",
        institutionName: institution.name,
        items: submissions
          .filter(
            (submission) =>
              submission.storageKey &&
              submission.fileName &&
              submission.mimeType &&
              submission.fileSizeBytes != null,
          )
          .map((submission) => ({
            submissionId: submission.id,
            courseworkId: submission.courseworkId,
            classCode: submission.coursework.class.code,
            classTitle: submission.coursework.class.title,
            courseworkTitle: submission.coursework.title,
            studentName: submission.student.fullName,
            fileName: submission.fileName!,
            mimeType: submission.mimeType!,
            fileSizeBytes: submission.fileSizeBytes!,
            storageKey: submission.storageKey!,
            scanStatus: toFileScanStatus(submission.fileScanStatus),
            scannedAt: submission.scannedAt?.toISOString() ?? null,
            scanNotes: submission.scanNotes ?? null,
            submittedAt: submission.submittedAt?.toISOString() ?? null,
          })),
      };
    } catch {
      return FALLBACK_FILE_MODERATION_QUEUE;
    }
  }

  @Patch("file-moderation/:submissionId")
  async updateFileModeration(
    @Param("submissionId") submissionId: string,
    @Body() body: unknown,
  ) {
    const parsedBody = fileModerationUpdateSchema.safeParse(body);

    if (!parsedBody.success) {
      throw new BadRequestException(parsedBody.error.flatten());
    }

    const actor = await this.prisma.user.findFirst({
      where: {
        role: "INSTITUTION_ADMIN",
      },
    });

    const submission = await this.prisma.submission.findUnique({
      where: {
        id: submissionId,
      },
      include: {
        coursework: {
          include: {
            class: true,
          },
        },
      },
    });

    if (!submission) {
      throw new NotFoundException("Submission not found for moderation.");
    }

    if (!submission.storageKey) {
      throw new BadRequestException(
        "This submission does not currently have a stored file package.",
      );
    }

    const scanNotes = parsedBody.data.scanNotes?.trim() || null;
    const updatedSubmission = await this.prisma.submission.update({
      where: {
        id: submissionId,
      },
      data: {
        fileScanStatus: parsedBody.data.scanStatus,
        scannedAt:
          parsedBody.data.scanStatus === "PENDING_SCAN" ? null : new Date(),
        scanNotes,
      },
    });

    await this.prisma.auditEvent.create({
      data: {
        institutionId: submission.coursework.class.institutionId,
        actorUserId: actor?.id ?? submission.studentId,
        action: "submission.file_scan_updated",
        entityType: "submission",
        entityId: updatedSubmission.id,
        payload: {
          previousScanStatus: submission.fileScanStatus ?? "PENDING_SCAN",
          nextScanStatus: parsedBody.data.scanStatus,
          scanNotes,
          updatedAt: new Date().toISOString(),
        },
      },
    });

    return {
      ok: true,
      submissionId: updatedSubmission.id,
      scanStatus: toFileScanStatus(updatedSubmission.fileScanStatus),
      scannedAt: updatedSubmission.scannedAt?.toISOString() ?? null,
      scanNotes: updatedSubmission.scanNotes ?? null,
    };
  }
}
