import { z } from "zod";

export const classSchema = z.object({
  id: z.string().uuid(),
  institutionId: z.string().uuid(),
  code: z.string().min(1),
  title: z.string().min(1),
  educatorId: z.string().uuid(),
  termId: z.string().uuid().optional(),
});

export type CourseClass = z.infer<typeof classSchema>;

