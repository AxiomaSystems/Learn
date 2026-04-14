import { z } from "zod";

export const submissionLifecycleStatusSchema = z.enum([
  "draft",
  "submitted",
  "returned",
]);

export const studentSubmissionSummaryItemSchema = z.object({
  submissionId: z.string().min(1),
  courseworkId: z.string().min(1),
  classId: z.string().min(1),
  classCode: z.string().min(1),
  classTitle: z.string().min(1),
  courseworkTitle: z.string().min(1),
  kind: z.string().min(1),
  dueAt: z.string().datetime(),
  status: submissionLifecycleStatusSchema,
  submittedAt: z.string().datetime().nullable(),
  gradeScore: z.number().int().min(0).max(100).nullable(),
  feedbackText: z.string().nullable(),
  gradedAt: z.string().datetime().nullable(),
});

export const studentSubmissionsSummarySchema = z.object({
  source: z.enum(["database", "fallback"]),
  studentName: z.string().min(1),
  institutionName: z.string().min(1),
  submissions: z.array(studentSubmissionSummaryItemSchema),
});

export const educatorSubmissionReviewItemSchema = z.object({
  submissionId: z.string().min(1),
  courseworkId: z.string().min(1),
  classId: z.string().min(1),
  studentId: z.string().min(1),
  studentName: z.string().min(1),
  classCode: z.string().min(1),
  classTitle: z.string().min(1),
  courseworkTitle: z.string().min(1),
  kind: z.string().min(1),
  dueAt: z.string().datetime(),
  status: submissionLifecycleStatusSchema,
  submittedAt: z.string().datetime().nullable(),
  gradeScore: z.number().int().min(0).max(100).nullable(),
  feedbackText: z.string().nullable(),
  gradedAt: z.string().datetime().nullable(),
  reviewPriority: z.enum(["high", "medium", "low"]),
});

export const educatorSubmissionsSummarySchema = z.object({
  source: z.enum(["database", "fallback"]),
  educatorName: z.string().min(1),
  institutionName: z.string().min(1),
  submissions: z.array(educatorSubmissionReviewItemSchema),
});

export type SubmissionLifecycleStatus = z.infer<
  typeof submissionLifecycleStatusSchema
>;
export type StudentSubmissionSummaryItem = z.infer<
  typeof studentSubmissionSummaryItemSchema
>;
export type StudentSubmissionsSummary = z.infer<
  typeof studentSubmissionsSummarySchema
>;
export type EducatorSubmissionReviewItem = z.infer<
  typeof educatorSubmissionReviewItemSchema
>;
export type EducatorSubmissionsSummary = z.infer<
  typeof educatorSubmissionsSummarySchema
>;
