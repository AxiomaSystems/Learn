import { z } from "zod";

export const educatorReviewItemSchema = z.object({
  courseworkId: z.string().min(1),
  classId: z.string().min(1),
  classCode: z.string().min(1),
  classTitle: z.string().min(1),
  courseworkTitle: z.string().min(1),
  kind: z.string().min(1),
  dueAt: z.string().datetime(),
  draftSubmissionCount: z.number().int().nonnegative(),
  submittedCount: z.number().int().nonnegative(),
  reviewPriority: z.enum(["low", "medium", "high"]),
});

export const educatorReviewQueueSummarySchema = z.object({
  source: z.enum(["database", "fallback"]),
  educatorName: z.string().min(1),
  institutionName: z.string().min(1),
  queueSize: z.number().int().nonnegative(),
  reviewItems: z.array(educatorReviewItemSchema),
  guidance: z.array(z.string().min(1)),
});

export type EducatorReviewItem = z.infer<typeof educatorReviewItemSchema>;
export type EducatorReviewQueueSummary = z.infer<
  typeof educatorReviewQueueSummarySchema
>;

