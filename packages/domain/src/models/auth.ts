import { z } from "zod";
import { tenantSessionSchema } from "./platform";

export const portalViewSchema = z.enum(["student", "educator", "admin"]);

export const authSessionResponseSchema = z.object({
  provider: z.enum(["workos-stub", "workos"]),
  workosConfigured: z.boolean(),
  availableViews: z.array(portalViewSchema),
  session: tenantSessionSchema,
});

export type PortalView = z.infer<typeof portalViewSchema>;
export type AuthSessionResponse = z.infer<typeof authSessionResponseSchema>;

