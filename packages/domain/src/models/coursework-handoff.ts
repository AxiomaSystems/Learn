import { z } from "zod";
import { submissionLifecycleStatusSchema } from "./submission-review";

export const submissionFileSummarySchema = z.object({
  storageKey: z.string().min(1),
  fileName: z.string().min(1),
  mimeType: z.string().min(1),
  fileSizeBytes: z.number().int().nonnegative(),
  downloadUrl: z.string().url().nullable().optional(),
});

export const courseworkHandoffSubmissionSchema = z.object({
  submissionId: z.string().min(1),
  status: submissionLifecycleStatusSchema,
  submittedAt: z.string().datetime().nullable(),
  gradedAt: z.string().datetime().nullable(),
  gradeScore: z.number().int().min(0).max(100).nullable(),
  feedbackText: z.string().nullable(),
  file: submissionFileSummarySchema.nullable(),
});

export const studentCourseworkDetailSchema = z.object({
  source: z.enum(["database", "fallback"]),
  courseworkId: z.string().min(1),
  classId: z.string().min(1),
  classCode: z.string().min(1),
  classTitle: z.string().min(1),
  educatorName: z.string().min(1),
  courseworkTitle: z.string().min(1),
  kind: z.string().min(1),
  topic: z.string().nullable(),
  description: z.string().nullable(),
  dueAt: z.string().datetime(),
  submission: courseworkHandoffSubmissionSchema.nullable(),
});

export const educatorCourseworkDetailSchema = z.object({
  source: z.enum(["database", "fallback"]),
  courseworkId: z.string().min(1),
  classId: z.string().min(1),
  classCode: z.string().min(1),
  classTitle: z.string().min(1),
  courseworkTitle: z.string().min(1),
  kind: z.string().min(1),
  topic: z.string().nullable(),
  description: z.string().nullable(),
  dueAt: z.string().datetime(),
  submissions: z.array(
    z.object({
      submissionId: z.string().min(1),
      studentId: z.string().min(1),
      studentName: z.string().min(1),
      status: submissionLifecycleStatusSchema,
      submittedAt: z.string().datetime().nullable(),
      gradedAt: z.string().datetime().nullable(),
      gradeScore: z.number().int().min(0).max(100).nullable(),
      feedbackText: z.string().nullable(),
      file: submissionFileSummarySchema.nullable(),
    }),
  ),
});

export const studentSubmissionHandoffResultSchema = z.object({
  ok: z.literal(true),
  submissionId: z.string().min(1),
  courseworkId: z.string().min(1),
  status: submissionLifecycleStatusSchema,
  storageKey: z.string().min(1),
  fileName: z.string().min(1),
  mimeType: z.string().min(1),
  fileSizeBytes: z.number().int().nonnegative(),
});

export type SubmissionFileSummary = z.infer<typeof submissionFileSummarySchema>;
export type CourseworkHandoffSubmission = z.infer<
  typeof courseworkHandoffSubmissionSchema
>;
export type StudentCourseworkDetail = z.infer<
  typeof studentCourseworkDetailSchema
>;
export type EducatorCourseworkDetail = z.infer<
  typeof educatorCourseworkDetailSchema
>;
export type StudentSubmissionHandoffResult = z.infer<
  typeof studentSubmissionHandoffResultSchema
>;
