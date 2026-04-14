import { z } from "zod";

export const institutionSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  slug: z.string().min(1),
  timezone: z.string().min(1),
});

export type Institution = z.infer<typeof institutionSchema>;

