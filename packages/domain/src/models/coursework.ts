import { z } from "zod";

export const courseworkKindSchema = z.enum([
  "reading",
  "assignment",
  "discussion",
  "prep",
  "quiz",
  "project",
]);

export const courseworkSchema = z.object({
  id: z.string().uuid(),
  classId: z.string().uuid(),
  title: z.string().min(1),
  kind: courseworkKindSchema,
  dueAt: z.string().datetime(),
  topic: z.string().optional(),
});

export type Coursework = z.infer<typeof courseworkSchema>;
export type CourseworkKind = z.infer<typeof courseworkKindSchema>;

