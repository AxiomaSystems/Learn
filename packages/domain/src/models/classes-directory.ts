import { z } from "zod";

export const studentClassDirectoryItemSchema = z.object({
  id: z.string().min(1),
  code: z.string().min(1),
  title: z.string().min(1),
  educatorName: z.string().min(1),
  courseworkCount: z.number().int().nonnegative(),
  upcomingTaskCount: z.number().int().nonnegative(),
});

export const studentClassesDirectorySchema = z.object({
  source: z.enum(["database", "fallback"]),
  studentName: z.string().min(1),
  institutionName: z.string().min(1),
  classes: z.array(studentClassDirectoryItemSchema),
});

export const educatorClassDirectoryItemSchema = z.object({
  id: z.string().min(1),
  code: z.string().min(1),
  title: z.string().min(1),
  courseworkCount: z.number().int().nonnegative(),
  draftSubmissionCount: z.number().int().nonnegative(),
  submittedCount: z.number().int().nonnegative(),
});

export const educatorClassesDirectorySchema = z.object({
  source: z.enum(["database", "fallback"]),
  educatorName: z.string().min(1),
  institutionName: z.string().min(1),
  classes: z.array(educatorClassDirectoryItemSchema),
});

export type StudentClassDirectoryItem = z.infer<
  typeof studentClassDirectoryItemSchema
>;
export type StudentClassesDirectory = z.infer<
  typeof studentClassesDirectorySchema
>;
export type EducatorClassDirectoryItem = z.infer<
  typeof educatorClassDirectoryItemSchema
>;
export type EducatorClassesDirectory = z.infer<
  typeof educatorClassesDirectorySchema
>;

