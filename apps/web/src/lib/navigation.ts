import type { PortalView } from "@axioma/domain";

export type NavItem = {
  href: string;
  label: string;
};

export const navByView: Record<PortalView, NavItem[]> = {
  student: [
    { href: "/", label: "Overview" },
    { href: "/student", label: "Home" },
    { href: "/student/classes", label: "Classes" },
    { href: "/student/submissions", label: "Submissions" },
    { href: "/student/calendar", label: "Calendar" },
  ],
  educator: [
    { href: "/", label: "Overview" },
    { href: "/educator", label: "Dashboard" },
    { href: "/educator/review-queue", label: "Review queue" },
    { href: "/educator/classes", label: "Classes" },
    { href: "/educator/submissions", label: "Submissions" },
  ],
  admin: [
    { href: "/", label: "Overview" },
    { href: "/admin", label: "Tenant home" },
    { href: "/admin/institutions", label: "Institution" },
    { href: "/admin/integrations", label: "Integrations" },
  ],
};
