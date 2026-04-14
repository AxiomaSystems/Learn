import {
  BadRequestException,
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
} from "@nestjs/common";
import type {
  EducatorCourseworkDetail,
  EducatorClassesDirectory,
  EducatorReviewQueueSummary,
  EducatorSubmissionsSummary,
  SubmissionLifecycleStatus,
} from "@axioma/domain";
import { z } from "zod";
import { PrismaService } from "../db/prisma.service";
import { StorageService } from "../storage/storage.service";

const FALLBACK_EDUCATOR_REVIEW_QUEUE: EducatorReviewQueueSummary = {
  source: "fallback",
  educatorName: "Avery Thompson",
  institutionName: "North River University",
  queueSize: 2,
  reviewItems: [
    {
      courseworkId: "33333333-3333-3333-3333-333333333331",
      classId: "11111111-1111-1111-1111-111111111111",
      classCode: "BIOL 320",
      classTitle: "Cellular Biology",
      courseworkTitle: "Reading 4.2",
      kind: "reading",
      dueAt: new Date(Date.now() + 1000 * 60 * 60 * 8).toISOString(),
      draftSubmissionCount: 0,
      submittedCount: 0,
      reviewPriority: "medium",
    },
    {
      courseworkId: "33333333-3333-3333-3333-333333333332",
      classId: "22222222-2222-2222-2222-222222222222",
      classCode: "MATH 120",
      classTitle: "Applied Statistics",
      courseworkTitle: "Problem Set 3",
      kind: "assignment",
      dueAt: new Date(Date.now() + 1000 * 60 * 60 * 28).toISOString(),
      draftSubmissionCount: 1,
      submittedCount: 0,
      reviewPriority: "high",
    },
  ],
  guidance: [
    "Review the highest-priority coursework first when a deadline is near and students are still in draft.",
    "Use the queue to decide whether the next action is grading, clarification, or class-wide guidance.",
    "Keep AI assistance grounded in the coursework context before sending messages or notes.",
  ],
};

const FALLBACK_EDUCATOR_CLASSES: EducatorClassesDirectory = {
  source: "fallback",
  educatorName: "Avery Thompson",
  institutionName: "North River University",
  classes: [
    {
      id: "11111111-1111-1111-1111-111111111111",
      code: "BIOL 320",
      title: "Cellular Biology",
      courseworkCount: 1,
      draftSubmissionCount: 0,
      submittedCount: 0,
    },
    {
      id: "22222222-2222-2222-2222-222222222222",
      code: "MATH 120",
      title: "Applied Statistics",
      courseworkCount: 1,
      draftSubmissionCount: 1,
      submittedCount: 0,
    },
  ],
};

const FALLBACK_EDUCATOR_SUBMISSIONS: EducatorSubmissionsSummary = {
  source: "fallback",
  educatorName: "Avery Thompson",
  institutionName: "North River University",
  submissions: [
    {
      submissionId: "44444444-4444-4444-4444-444444444442",
      courseworkId: "33333333-3333-3333-3333-333333333332",
      classId: "22222222-2222-2222-2222-222222222222",
      studentId: "77777777-7777-7777-7777-777777777777",
      studentName: "Nysa Thompson",
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
      reviewPriority: "high",
    },
    {
      submissionId: "44444444-4444-4444-4444-444444444441",
      courseworkId: "33333333-3333-3333-3333-333333333331",
      classId: "11111111-1111-1111-1111-111111111111",
      studentId: "77777777-7777-7777-7777-777777777777",
      studentName: "Nysa Thompson",
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
      reviewPriority: "medium",
    },
  ],
};

const FALLBACK_EDUCATOR_COURSEWORK_DETAIL: EducatorCourseworkDetail = {
  source: "fallback",
  courseworkId: "33333333-3333-3333-3333-333333333332",
  classId: "22222222-2222-2222-2222-222222222222",
  classCode: "MATH 120",
  classTitle: "Applied Statistics",
  courseworkTitle: "Problem Set 3",
  kind: "assignment",
  topic: "Linear models",
  description: "Complete questions 1-8 and check your graph on question 6.",
  dueAt: new Date(Date.now() + 1000 * 60 * 60 * 28).toISOString(),
  submissions: [
    {
      submissionId: "44444444-4444-4444-4444-444444444442",
      studentId: "77777777-7777-7777-7777-777777777777",
      studentName: "Nysa Thompson",
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
        downloadUrl: null,
      },
    },
  ],
};

const submissionReviewSchema = z
  .object({
    status: z.enum(["DRAFT", "SUBMITTED", "RETURNED"]),
    gradeScore: z.number().int().min(0).max(100).nullable().optional(),
    feedbackText: z.string().trim().max(4000).nullable().optional(),
  })
  .superRefine((value, ctx) => {
    if (value.status === "RETURNED" && value.gradeScore == null) {
      ctx.addIssue({
        code: "custom",
        path: ["gradeScore"],
        message: "A returned submission requires a grade score.",
      });
    }

    if (
      value.status === "RETURNED" &&
      (!value.feedbackText || value.feedbackText.trim().length === 0)
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["feedbackText"],
        message: "A returned submission requires feedback text.",
      });
    }
  });

function toSubmissionLifecycleStatus(
  status: "DRAFT" | "SUBMITTED" | "RETURNED",
): SubmissionLifecycleStatus {
  if (status === "DRAFT") return "draft";
  if (status === "SUBMITTED") return "submitted";
  return "returned";
}

function toSubmissionFileSummary(
  submission: {
    storageKey: string | null;
    fileName: string | null;
    mimeType: string | null;
    fileSizeBytes: number | null;
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
    downloadUrl: null,
  };
}

@Controller("educator")
export class EducatorController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storageService: StorageService,
  ) {}

  @Get("review-queue")
  async getReviewQueue(): Promise<EducatorReviewQueueSummary> {
    try {
      const educator = await this.prisma.user.findFirst({
        where: {
          role: "EDUCATOR",
        },
        include: {
          institution: true,
        },
      });

      if (!educator) {
        return FALLBACK_EDUCATOR_REVIEW_QUEUE;
      }

      const classes = await this.prisma.class.findMany({
        where: {
          educatorId: educator.id,
        },
        include: {
          courseworkItems: {
            include: {
              submissions: true,
            },
          },
        },
        orderBy: {
          code: "asc",
        },
      });

      const reviewItems = classes
        .flatMap((course) =>
          course.courseworkItems.map((item) => {
            const submittedCount = item.submissions.filter(
              (submission) => submission.status === "SUBMITTED",
            ).length;
            const draftSubmissionCount = item.submissions.filter(
              (submission) => submission.status === "DRAFT",
            ).length;

            const hoursUntilDue =
              (item.dueAt.getTime() - Date.now()) / (1000 * 60 * 60);

            const reviewPriority =
              submittedCount > 0
                ? "high"
                : draftSubmissionCount > 0 || hoursUntilDue < 24
                  ? "medium"
                  : "low";

            return {
              courseworkId: item.id,
              classId: course.id,
              classCode: course.code,
              classTitle: course.title,
              courseworkTitle: item.title,
              kind: item.kind.toLowerCase(),
              dueAt: item.dueAt.toISOString(),
              draftSubmissionCount,
              submittedCount,
              reviewPriority,
            } as const;
          }),
        )
        .sort((a, b) => {
          const priorityWeight = { high: 0, medium: 1, low: 2 };
          const priorityDelta =
            priorityWeight[a.reviewPriority] - priorityWeight[b.reviewPriority];

          if (priorityDelta !== 0) {
            return priorityDelta;
          }

          return new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime();
        });

      return {
        source: "database",
        educatorName: educator.fullName,
        institutionName: educator.institution.name,
        queueSize: reviewItems.length,
        reviewItems,
        guidance: [
          "Start with coursework where student submissions are already landing or deadlines are close.",
          "Use this queue as the operational entry point for review, class clarification, and follow-up.",
          "Keep intervention lightweight when a draft signal suggests students are working but stuck.",
        ],
      };
    } catch {
      return FALLBACK_EDUCATOR_REVIEW_QUEUE;
    }
  }

  @Get("classes")
  async getClasses(): Promise<EducatorClassesDirectory> {
    try {
      const educator = await this.prisma.user.findFirst({
        where: {
          role: "EDUCATOR",
        },
        include: {
          institution: true,
        },
      });

      if (!educator) {
        return FALLBACK_EDUCATOR_CLASSES;
      }

      const classes = await this.prisma.class.findMany({
        where: {
          educatorId: educator.id,
        },
        include: {
          courseworkItems: {
            include: {
              submissions: true,
            },
          },
        },
        orderBy: {
          code: "asc",
        },
      });

      return {
        source: "database",
        educatorName: educator.fullName,
        institutionName: educator.institution.name,
        classes: classes.map((course) => ({
          id: course.id,
          code: course.code,
          title: course.title,
          courseworkCount: course.courseworkItems.length,
          draftSubmissionCount: course.courseworkItems.reduce(
            (count, item) =>
              count +
              item.submissions.filter((submission) => submission.status === "DRAFT")
                .length,
            0,
          ),
          submittedCount: course.courseworkItems.reduce(
            (count, item) =>
              count +
              item.submissions.filter(
                (submission) => submission.status === "SUBMITTED",
              ).length,
            0,
          ),
        })),
      };
    } catch {
      return FALLBACK_EDUCATOR_CLASSES;
    }
  }

  @Get("submissions")
  async getSubmissions(): Promise<EducatorSubmissionsSummary> {
    try {
      const educator = await this.prisma.user.findFirst({
        where: {
          role: "EDUCATOR",
        },
        include: {
          institution: true,
        },
      });

      if (!educator) {
        return FALLBACK_EDUCATOR_SUBMISSIONS;
      }

      const submissions = await this.prisma.submission.findMany({
        where: {
          coursework: {
            class: {
              educatorId: educator.id,
            },
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
        orderBy: [{ submittedAt: "desc" }, { createdAt: "desc" }],
      });

      return {
        source: "database",
        educatorName: educator.fullName,
        institutionName: educator.institution.name,
        submissions: submissions.map((submission) => {
          const hoursUntilDue =
            (submission.coursework.dueAt.getTime() - Date.now()) / (1000 * 60 * 60);

          const reviewPriority =
            submission.status === "SUBMITTED"
              ? "high"
              : submission.status === "RETURNED" || hoursUntilDue < 24
                ? "medium"
                : "low";

          return {
            submissionId: submission.id,
            courseworkId: submission.courseworkId,
            classId: submission.coursework.classId,
            studentId: submission.studentId,
            studentName: submission.student.fullName,
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
            reviewPriority,
          };
        }),
      };
    } catch {
      return FALLBACK_EDUCATOR_SUBMISSIONS;
    }
  }

  @Patch("submissions/:submissionId/review")
  async reviewSubmission(
    @Param("submissionId") submissionId: string,
    @Body() body: unknown,
  ) {
    const parsedBody = submissionReviewSchema.safeParse(body);

    if (!parsedBody.success) {
      throw new BadRequestException(parsedBody.error.flatten());
    }

    const educator = await this.prisma.user.findFirst({
      where: {
        role: "EDUCATOR",
      },
      include: {
        institution: true,
      },
    });

    if (!educator) {
      throw new NotFoundException("Educator not found for review action.");
    }

    const existingSubmission = await this.prisma.submission.findUnique({
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

    if (!existingSubmission) {
      throw new NotFoundException("Submission not found.");
    }

    if (existingSubmission.coursework.class.educatorId !== educator.id) {
      throw new BadRequestException(
        "This educator cannot review submissions outside their classes.",
      );
    }

    const nextStatus = parsedBody.data.status;
    const nextGradeScore = parsedBody.data.gradeScore ?? null;
    const nextFeedbackText = parsedBody.data.feedbackText?.trim() || null;
    const gradedAt = nextStatus === "RETURNED" ? new Date() : null;

    const updatedSubmission = await this.prisma.submission.update({
      where: {
        id: submissionId,
      },
      data: {
        status: nextStatus,
        gradeScore: nextStatus === "RETURNED" ? nextGradeScore : null,
        feedbackText: nextStatus === "RETURNED" ? nextFeedbackText : null,
        gradedAt,
        submittedAt:
          nextStatus === "SUBMITTED" && existingSubmission.submittedAt == null
            ? new Date()
            : existingSubmission.submittedAt,
      },
    });

    await this.prisma.auditEvent.create({
      data: {
        institutionId: educator.institutionId,
        actorUserId: educator.id,
        action: "submission.reviewed",
        entityType: "submission",
        entityId: updatedSubmission.id,
        payload: {
          previousStatus: existingSubmission.status,
          nextStatus,
          gradeScore: nextStatus === "RETURNED" ? nextGradeScore : null,
          feedbackText:
            nextStatus === "RETURNED" ? nextFeedbackText : null,
          reviewedAt: new Date().toISOString(),
        },
      },
    });

    return {
      ok: true,
      submissionId: updatedSubmission.id,
      status: updatedSubmission.status,
      gradeScore: updatedSubmission.gradeScore,
      feedbackText: updatedSubmission.feedbackText,
      gradedAt: updatedSubmission.gradedAt?.toISOString() ?? null,
    };
  }

  @Get("coursework/:courseworkId")
  async getCourseworkDetail(
    @Param("courseworkId") courseworkId: string,
  ): Promise<EducatorCourseworkDetail> {
    try {
      const educator = await this.prisma.user.findFirst({
        where: {
          role: "EDUCATOR",
        },
        include: {
          institution: true,
        },
      });

      if (!educator) {
        return FALLBACK_EDUCATOR_COURSEWORK_DETAIL;
      }

      const coursework = await this.prisma.coursework.findUnique({
        where: {
          id: courseworkId,
        },
        include: {
          class: true,
          submissions: {
            include: {
              student: true,
            },
            orderBy: [{ submittedAt: "desc" }, { createdAt: "desc" }],
          },
        },
      });

      if (!coursework) {
        throw new NotFoundException("Coursework not found.");
      }

      if (coursework.class.educatorId !== educator.id) {
        throw new BadRequestException(
          "This educator cannot read coursework outside their classes.",
        );
      }

      const submissionsWithUrls = await Promise.all(
        coursework.submissions.map(async (submission) => {
          const file = toSubmissionFileSummary(submission);
          const signedFile =
            file && this.storageService.isConfigured()
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
            submissionId: submission.id,
            studentId: submission.studentId,
            studentName: submission.student.fullName,
            status: toSubmissionLifecycleStatus(submission.status),
            submittedAt: submission.submittedAt?.toISOString() ?? null,
            gradedAt: submission.gradedAt?.toISOString() ?? null,
            gradeScore: submission.gradeScore,
            feedbackText: submission.feedbackText,
            file: signedFile,
          };
        }),
      );

      return {
        source: "database",
        courseworkId: coursework.id,
        classId: coursework.classId,
        classCode: coursework.class.code,
        classTitle: coursework.class.title,
        courseworkTitle: coursework.title,
        kind: coursework.kind.toLowerCase(),
        topic: coursework.topic ?? null,
        description: coursework.description ?? null,
        dueAt: coursework.dueAt.toISOString(),
        submissions: submissionsWithUrls,
      };
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }

      return FALLBACK_EDUCATOR_COURSEWORK_DETAIL;
    }
  }
}
