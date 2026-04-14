import { z } from "zod";

export const studentTaskSummarySchema = z.object({
  id: z.string().min(1),
  classCode: z.string().min(1),
  classTitle: z.string().min(1),
  title: z.string().min(1),
  kind: z.string().min(1),
  dueAt: z.string().datetime(),
  status: z.enum(["ready", "draft", "submitted"]),
});

export const studentClassSummarySchema = z.object({
  id: z.string().min(1),
  code: z.string().min(1),
  title: z.string().min(1),
  educatorName: z.string().min(1),
  courseworkCount: z.number().int().nonnegative(),
});

export const studentHomeSummarySchema = z.object({
  source: z.enum(["database", "fallback"]),
  studentName: z.string().min(1),
  institutionName: z.string().min(1),
  openTasks: z.array(studentTaskSummarySchema),
  classes: z.array(studentClassSummarySchema),
  focusItems: z.array(z.string().min(1)),
});

export type StudentTaskSummary = z.infer<typeof studentTaskSummarySchema>;
export type StudentClassSummary = z.infer<typeof studentClassSummarySchema>;
export type StudentHomeSummary = z.infer<typeof studentHomeSummarySchema>;

