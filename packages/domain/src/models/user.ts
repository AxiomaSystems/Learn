import { z } from "zod";

export const appRoleSchema = z.enum([
  "student",
  "educator",
  "teaching_assistant",
  "institution_admin",
  "platform_admin",
]);

export const userSchema = z.object({
  id: z.string().uuid(),
  institutionId: z.string().uuid(),
  email: z.string().email(),
  fullName: z.string().min(1),
  role: appRoleSchema,
});

export type AppRole = z.infer<typeof appRoleSchema>;
export type User = z.infer<typeof userSchema>;

