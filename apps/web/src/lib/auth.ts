import type { AuthSessionResponse, PortalView, TenantSession } from "@axioma/domain";
import { getApiBaseUrl } from "./api";

const fallbackSession: AuthSessionResponse = {
  provider: "workos-stub",
  workosConfigured: false,
  availableViews: ["student", "educator", "admin"],
  session: {
    institutionId: "3f5f43a6-92fa-4818-945b-e5be3e0d21f4",
    institutionName: "North River University",
    userId: "07d659ab-16d6-4499-b0a4-e561596e0c51",
    fullName: "Avery Thompson",
    role: "institution_admin",
    permissions: [
      "tenant:read",
      "tenant:write",
      "class:read",
      "class:write",
      "coursework:read",
      "coursework:write",
      "ai:use",
    ],
  },
};

export async function getAuthSession(): Promise<AuthSessionResponse> {
  try {
    const response = await fetch(`${getApiBaseUrl()}/api/auth/session`, {
      cache: "no-store",
    });

    if (!response.ok) {
      return fallbackSession;
    }

    return (await response.json()) as AuthSessionResponse;
  } catch {
    return fallbackSession;
  }
}

export function roleLabel(role: TenantSession["role"]) {
  return role.replaceAll("_", " ");
}

export function viewTitle(view: PortalView) {
  if (view === "student") return "Student workspace";
  if (view === "educator") return "Educator workspace";
  return "Institution admin workspace";
}

