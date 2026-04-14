import { Controller, Get } from "@nestjs/common";
import type { AppRole, AuthSessionResponse } from "@axioma/domain";

const rolePermissions: Record<AppRole, string[]> = {
  student: ["class:read", "coursework:read", "submission:write", "ai:use"],
  educator: [
    "class:read",
    "class:write",
    "coursework:read",
    "coursework:write",
    "grade:write",
    "ai:use",
  ],
  teaching_assistant: [
    "class:read",
    "coursework:read",
    "submission:read",
    "ai:use",
  ],
  institution_admin: [
    "tenant:read",
    "tenant:write",
    "class:read",
    "class:write",
    "coursework:read",
    "coursework:write",
    "ai:use",
  ],
  platform_admin: [
    "platform:read",
    "platform:write",
    "tenant:read",
    "tenant:write",
    "ai:use",
  ],
};

@Controller("auth")
export class AuthController {
  @Get("session")
  getSession(): AuthSessionResponse {
    const role = (process.env.DEMO_APP_ROLE as AppRole | undefined) ?? "institution_admin";
    const workosConfigured = Boolean(
      process.env.WORKOS_API_KEY && process.env.WORKOS_CLIENT_ID,
    );

    return {
      provider: workosConfigured ? "workos" : "workos-stub",
      workosConfigured,
      availableViews: ["student", "educator", "admin"],
      session: {
        institutionId: "3f5f43a6-92fa-4818-945b-e5be3e0d21f4",
        institutionName: "North River University",
        userId: "07d659ab-16d6-4499-b0a4-e561596e0c51",
        fullName: "Avery Thompson",
        role,
        permissions: rolePermissions[role],
      },
    };
  }
}

