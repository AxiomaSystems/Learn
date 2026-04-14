import { z } from "zod";
import { appRoleSchema } from "./user";

export const appHealthSchema = z.object({
  status: z.enum(["ok", "degraded", "down"]),
  service: z.string().min(1),
  environment: z.string().min(1),
  version: z.string().min(1),
  timestamp: z.string().datetime(),
});

export const tenantSessionSchema = z.object({
  institutionId: z.string().uuid(),
  institutionName: z.string().min(1),
  userId: z.string().uuid(),
  fullName: z.string().min(1),
  role: appRoleSchema,
  permissions: z.array(z.string().min(1)),
});

export type AppHealth = z.infer<typeof appHealthSchema>;
export type TenantSession = z.infer<typeof tenantSessionSchema>;

