import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Put,
} from "@nestjs/common";
import type {
  FileScanStatus,
  StudentCourseworkDetail,
  StudentClassesDirectory,
  StudentSubmissionHandoffResult,
  StudentHomeSummary,
  StudentTaskSummary,
  StudentSubmissionsSummary,
  SubmissionLifecycleStatus,
} from "@axioma/domain";
import { z } from "zod";
import { PrismaService } from "../db/prisma.service";
import { StorageService } from "../storage/storage.service";

const FALLBACK_STUDENT_HOME: StudentHomeSummary = {
  source: "fallback",
  studentName: "Nysa Thompson",
  institutionName: "North River University",
  openTasks: [
    {
      id: "reading-4-2",
      classCode: "BIOL 320",
      classTitle: "Cellular Biology",
      title: "Reading 4.2",
      kind: "reading",
      dueAt: new Date(Date.now() + 1000 * 60 * 60 * 8).toISOString(),
      status: "ready",
    },
    {
      id: "problem-set-3",
      classCode: "MATH 120",
      classTitle: "Applied Statistics",
      title: "Problem Set 3",
      kind: "assignment",
      dueAt: new Date(Date.now() + 1000 * 60 * 60 * 28).toISOString(),
      status: "draft",
    },
  ],
  classes: [
    {
      id: "biol-320",
      code: "BIOL 320",
      title: "Cellular Biology",
      educatorName: "Avery Thompson",
      courseworkCount: 1,
    },
    {
      id: "math-120",
      code: "MATH 120",
      title: "Applied Statistics",
      educatorName: "Avery Thompson",
      courseworkCount: 1,
    },
  ],
  focusItems: [
    "Signal amplification before the next biology worksheet",
    "Graph setup and residual checks in statistics",
    "Book office hours early when a concept still feels fuzzy",
  ],
};

const FALLBACK_STUDENT_CLASSES: StudentClassesDirectory = {
  source: "fallback",
  studentName: "Nysa Thompson",
  institutionName: "North River University",
  classes: [
    {
      id: "11111111-1111-1111-1111-111111111111",
      code: "BIOL 320",
      title: "Cellular Biology",
      educatorName: "Avery Thompson",
      courseworkCount: 1,
      upcomingTaskCount: 1,
    },
    {
      id: "22222222-2222-2222-2222-222222222222",
      code: "MATH 120",
      title: "Applied Statistics",
      educatorName: "Avery Thompson",
      courseworkCount: 1,
      upcomingTaskCount: 1,
    },
  ],
};

const FALLBACK_STUDENT_SUBMISSIONS: StudentSubmissionsSummary = {
  source: "fallback",
  studentName: "Nysa Thompson",
  institutionName: "North River University",
  submissions: [
    {
      submissionId: "44444444-4444-4444-4444-444444444441",
      courseworkId: "33333333-3333-3333-3333-333333333331",
      classId: "11111111-1111-1111-1111-111111111111",
      classCode: "BIOL 320",
      classTitle: "Cellular Biology",
      courseworkTitle: "Reading 4.2",
      kind: "reading",
      dueAt: new Date(Date.now() + 1000 * 60 * 60 * 8).toISOString(),
      status: "returned",
      submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 30).toISOString(),
      gradeScore: 94,
      feedbackText:
        "Strong grasp of signal amplification. Tighten the connection between receptor behavior and the downstream pathway in your final explanation.",
      gradedAt: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
      fileScanStatus: "clean",
    },
    {
      submissionId: "44444444-4444-4444-4444-444444444442",
      courseworkId: "33333333-3333-3333-3333-333333333332",
      classId: "22222222-2222-2222-2222-222222222222",
      classCode: "MATH 120",
      classTitle: "Applied Statistics",
      courseworkTitle: "Problem Set 3",
      kind: "assignment",
      dueAt: new Date(Date.now() + 1000 * 60 * 60 * 28).toISOString(),
      status: "submitted",
      submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
      gradeScore: null,
      feedbackText: null,
      gradedAt: null,
      fileScanStatus: "pending_scan",
    },
  ],
};

const FALLBACK_STUDENT_COURSEWORK_DETAIL: StudentCourseworkDetail = {
  source: "fallback",
  courseworkId: "33333333-3333-3333-3333-333333333332",
  classId: "22222222-2222-2222-2222-222222222222",
  classCode: "MATH 120",
  classTitle: "Applied Statistics",
  educatorName: "Avery Thompson",
  courseworkTitle: "Problem Set 3",
  kind: "assignment",
  topic: "Linear models",
  description: "Complete questions 1-8 and check your graph on question 6.",
  dueAt: new Date(Date.now() + 1000 * 60 * 60 * 28).toISOString(),
  submission: {
    submissionId: "44444444-4444-4444-4444-444444444442",
    status: "submitted",
    submittedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
    gradedAt: null,
    gradeScore: null,
    feedbackText: null,
      file: {
        storageKey: "submissions/math-120/problem-set-3/nysa-thompson-v1.xlsx",
        fileName: "problem-set-3-workbook.xlsx",
        mimeType:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        fileSizeBytes: 184210,
        scanStatus: "pending_scan",
        scannedAt: null,
        scanNotes: "Waiting for manual moderation.",
        downloadUrl: null,
      },
  },
};

const submissionHandoffSchema = z.object({
  status: z.enum(["DRAFT", "SUBMITTED"]),
  fileName: z.string().trim().min(1).max(255),
  mimeType: z.string().trim().min(1).max(255),
  fileSizeBytes: z.number().int().positive().max(100 * 1024 * 1024),
  storageKey: z.string().trim().min(1).max(512),
});

function toStudentTaskStatus(
  status: "DRAFT" | "SUBMITTED" | "RETURNED" | null | undefined,
): StudentTaskSummary["status"] | null {
  if (status === "DRAFT") return "draft";
  if (status === "SUBMITTED") return "submitted";
  if (status === "RETURNED") return null;
  return "ready";
}

function toSubmissionLifecycleStatus(
  status: "DRAFT" | "SUBMITTED" | "RETURNED",
): SubmissionLifecycleStatus {
  if (status === "DRAFT") return "draft";
  if (status === "SUBMITTED") return "submitted";
  return "returned";
}

function toFileScanStatus(
  status: "PENDING_SCAN" | "CLEAN" | "QUARANTINED" | "REJECTED" | null | undefined,
): FileScanStatus {
  if (status === "CLEAN") return "clean";
  if (status === "QUARANTINED") return "quarantined";
  if (status === "REJECTED") return "rejected";
  return "pending_scan";
}

function toSubmissionFileSummary(
  submission: {
    storageKey: string | null;
    fileName: string | null;
    mimeType: string | null;
    fileSizeBytes: number | null;
    fileScanStatus: "PENDING_SCAN" | "CLEAN" | "QUARANTINED" | "REJECTED" | null;
    scannedAt?: Date | null;
    scanNotes?: string | null;
  },
) {
  if (
    !submission.storageKey ||
    !submission.fileName ||
    !submission.mimeType ||
    submission.fileSizeBytes == null
  ) {
    return null;
  }

  return {
    storageKey: submission.storageKey,
    fileName: submission.fileName,
    mimeType: submission.mimeType,
    fileSizeBytes: submission.fileSizeBytes,
    scanStatus: toFileScanStatus(submission.fileScanStatus),
    scannedAt: submission.scannedAt?.toISOString() ?? null,
    scanNotes: submission.scanNotes ?? null,
    downloadUrl: null,
  };
}

@Controller("student")
export class StudentController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storageService: StorageService,
  ) {}

  @Get("home")
  async getHome(): Promise<StudentHomeSummary> {
    try {
      const student = await this.prisma.user.findFirst({
        where: {
          role: "STUDENT",
        },
        include: {
          institution: true,
        },
      });

      if (!student) {
        return FALLBACK_STUDENT_HOME;
      }

      const classes = await this.prisma.class.findMany({
        where: {
          institutionId: student.institutionId,
        },
        include: {
          educator: true,
          courseworkItems: true,
        },
        orderBy: {
          code: "asc",
        },
      });

      const courseworkItems = classes
        .flatMap((course) =>
          course.courseworkItems.map((item) => ({
            id: item.id,
            classId: course.id,
            classCode: course.code,
            classTitle: course.title,
            title: item.title,
            kind: item.kind.toLowerCase(),
            dueAt: item.dueAt,
          })),
        )
        .sort((a, b) => a.dueAt.getTime() - b.dueAt.getTime());

      const submissions = await this.prisma.submission.findMany({
        where: {
          studentId: student.id,
        },
      });

      return {
        source: "database",
        studentName: student.fullName,
        institutionName: student.institution.name,
        openTasks: courseworkItems
          .map((item) => {
            const submission = submissions.find(
              (candidate) => candidate.courseworkId === item.id,
            );
            const taskStatus = toStudentTaskStatus(submission?.status);

            if (taskStatus === null) {
              return null;
            }

            return {
              id: item.id,
              classCode: item.classCode,
              classTitle: item.classTitle,
              title: item.title,
              kind: item.kind,
              dueAt: item.dueAt.toISOString(),
              status: taskStatus,
            };
          })
          .filter((item): item is NonNullable<typeof item> => item !== null)
          .slice(0, 4),
        classes: classes.map((course) => ({
          id: course.id,
          code: course.code,
          title: course.title,
          educatorName: course.educator.fullName,
          courseworkCount: course.courseworkItems.length,
        })),
        focusItems: [
          "Start the earliest due item before context switching.",
          "Use class hubs as the default entry point to materials and submissions.",
          "Turn office hours into a proactive support habit instead of a last resort.",
        ],
      };
    } catch {
      return FALLBACK_STUDENT_HOME;
    }
  }

  @Get("classes")
  async getClasses(): Promise<StudentClassesDirectory> {
    try {
      const student = await this.prisma.user.findFirst({
        where: {
          role: "STUDENT",
        },
        include: {
          institution: true,
        },
      });

      if (!student) {
        return FALLBACK_STUDENT_CLASSES;
      }

      const classes = await this.prisma.class.findMany({
        where: {
          institutionId: student.institutionId,
        },
        include: {
          educator: true,
          courseworkItems: true,
        },
        orderBy: {
          code: "asc",
        },
      });

      return {
        source: "database",
        studentName: student.fullName,
        institutionName: student.institution.name,
        classes: classes.map((course) => ({
          id: course.id,
          code: course.code,
          title: course.title,
          educatorName: course.educator.fullName,
          courseworkCount: course.courseworkItems.length,
          upcomingTaskCount: course.courseworkItems.filter(
            (item) => item.dueAt.getTime() >= Date.now(),
          ).length,
        })),
      };
    } catch {
      return FALLBACK_STUDENT_CLASSES;
    }
  }

  @Get("submissions")
  async getSubmissions(): Promise<StudentSubmissionsSummary> {
    try {
      const student = await this.prisma.user.findFirst({
        where: {
          role: "STUDENT",
        },
        include: {
          institution: true,
        },
      });

      if (!student) {
        return FALLBACK_STUDENT_SUBMISSIONS;
      }

      const submissions = await this.prisma.submission.findMany({
        where: {
          studentId: student.id,
        },
        include: {
          coursework: {
            include: {
              class: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      return {
        source: "database",
        studentName: student.fullName,
        institutionName: student.institution.name,
        submissions: submissions.map((submission) => ({
          submissionId: submission.id,
          courseworkId: submission.courseworkId,
          classId: submission.coursework.classId,
          classCode: submission.coursework.class.code,
          classTitle: submission.coursework.class.title,
          courseworkTitle: submission.coursework.title,
          kind: submission.coursework.kind.toLowerCase(),
          dueAt: submission.coursework.dueAt.toISOString(),
          status: toSubmissionLifecycleStatus(submission.status),
          submittedAt: submission.submittedAt?.toISOString() ?? null,
          gradeScore: submission.gradeScore,
          feedbackText: submission.feedbackText,
          gradedAt: submission.gradedAt?.toISOString() ?? null,
          fileScanStatus: toFileScanStatus(submission.fileScanStatus),
        })),
      };
    } catch {
      return FALLBACK_STUDENT_SUBMISSIONS;
    }
  }

  @Get("coursework/:courseworkId")
  async getCourseworkDetail(
    @Param("courseworkId") courseworkId: string,
  ): Promise<StudentCourseworkDetail> {
    try {
      const student = await this.prisma.user.findFirst({
        where: {
          role: "STUDENT",
        },
        include: {
          institution: true,
        },
      });

      if (!student) {
        return FALLBACK_STUDENT_COURSEWORK_DETAIL;
      }

      const coursework = await this.prisma.coursework.findUnique({
        where: {
          id: courseworkId,
        },
        include: {
          class: {
            include: {
              educator: true,
            },
          },
          submissions: {
            where: {
              studentId: student.id,
            },
            take: 1,
          },
        },
      });

      if (!coursework) {
        throw new NotFoundException("Coursework not found.");
      }

      const submission = coursework.submissions[0] ?? null;
      const file = submission ? toSubmissionFileSummary(submission) : null;
      const signedFile =
        file &&
        file.scanStatus === "clean" &&
        this.storageService.isConfigured()
          ? {
              ...file,
              downloadUrl:
                (await this.storageService.createDownloadUrl({
                  storageKey: file.storageKey,
                  fileName: file.fileName,
                })) ?? null,
            }
          : file;

      return {
        source: "database",
        courseworkId: coursework.id,
        classId: coursework.classId,
        classCode: coursework.class.code,
        classTitle: coursework.class.title,
        educatorName: coursework.class.educator.fullName,
        courseworkTitle: coursework.title,
        kind: coursework.kind.toLowerCase(),
        topic: coursework.topic ?? null,
        description: coursework.description ?? null,
        dueAt: coursework.dueAt.toISOString(),
        submission: submission
          ? {
              submissionId: submission.id,
              status: toSubmissionLifecycleStatus(submission.status),
              submittedAt: submission.submittedAt?.toISOString() ?? null,
              gradedAt: submission.gradedAt?.toISOString() ?? null,
              gradeScore: submission.gradeScore,
              feedbackText: submission.feedbackText,
              file: signedFile,
            }
          : null,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }

      return FALLBACK_STUDENT_COURSEWORK_DETAIL;
    }
  }

  @Put("coursework/:courseworkId/submission")
  async upsertSubmissionHandoff(
    @Param("courseworkId") courseworkId: string,
    @Body() body: unknown,
  ): Promise<StudentSubmissionHandoffResult> {
    const parsedBody = submissionHandoffSchema.safeParse(body);

    if (!parsedBody.success) {
      throw new BadRequestException(parsedBody.error.flatten());
    }

    const student = await this.prisma.user.findFirst({
      where: {
        role: "STUDENT",
      },
      include: {
        institution: true,
      },
    });

    if (!student) {
      throw new NotFoundException("Student not found for submission handoff.");
    }

    const coursework = await this.prisma.coursework.findUnique({
      where: {
        id: courseworkId,
      },
      include: {
        class: true,
      },
    });

    if (!coursework) {
      throw new NotFoundException("Coursework not found.");
    }

    const existingSubmission = await this.prisma.submission.findFirst({
      where: {
        courseworkId,
        studentId: student.id,
      },
    });

    const nextStatus = parsedBody.data.status;
    const upsertedSubmission = existingSubmission
      ? await this.prisma.submission.update({
          where: {
            id: existingSubmission.id,
          },
          data: {
            status: nextStatus,
            storageKey: parsedBody.data.storageKey,
            fileName: parsedBody.data.fileName,
            mimeType: parsedBody.data.mimeType,
            fileSizeBytes: parsedBody.data.fileSizeBytes,
            fileScanStatus: "PENDING_SCAN",
            scannedAt: null,
            scanNotes: "Waiting for manual moderation.",
            submittedAt:
              nextStatus === "SUBMITTED" ? new Date() : existingSubmission.submittedAt,
          },
        })
      : await this.prisma.submission.create({
          data: {
            courseworkId,
            studentId: student.id,
            status: nextStatus,
            storageKey: parsedBody.data.storageKey,
            fileName: parsedBody.data.fileName,
            mimeType: parsedBody.data.mimeType,
            fileSizeBytes: parsedBody.data.fileSizeBytes,
            fileScanStatus: "PENDING_SCAN",
            scannedAt: null,
            scanNotes: "Waiting for manual moderation.",
            submittedAt: nextStatus === "SUBMITTED" ? new Date() : null,
          },
        });

    await this.prisma.auditEvent.create({
      data: {
        institutionId: student.institutionId,
        actorUserId: student.id,
        action: "submission.handoff",
        entityType: "submission",
        entityId: upsertedSubmission.id,
        payload: {
          courseworkId,
          classId: coursework.classId,
          status: nextStatus,
          storageKey: parsedBody.data.storageKey,
          fileName: parsedBody.data.fileName,
          mimeType: parsedBody.data.mimeType,
          fileSizeBytes: parsedBody.data.fileSizeBytes,
          fileScanStatus: "PENDING_SCAN",
          handedOffAt: new Date().toISOString(),
        },
      },
    });

    return {
      ok: true,
      submissionId: upsertedSubmission.id,
      courseworkId,
      status: toSubmissionLifecycleStatus(upsertedSubmission.status),
      storageKey: parsedBody.data.storageKey,
      fileName: parsedBody.data.fileName,
      mimeType: parsedBody.data.mimeType,
      fileSizeBytes: parsedBody.data.fileSizeBytes,
    };
  }
}
