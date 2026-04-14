import { AppShell } from "../../components/app-shell";
import { getAuthSession } from "../../lib/auth";

const adminCards = [
  "Tenant setup, roles, and onboarding status",
  "Institution integrations and sync visibility",
  "Operational posture across auth, observability, and environment state",
];

export default async function AdminPage() {
  const { session } = await getAuthSession();

  return (
    <AppShell
      view="admin"
      session={session}
      title="Institution admin shell"
      subtitle="This shell is the starting point for tenant administration, operations, and institution-facing configuration."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 16,
        }}
      >
        {adminCards.map((card) => (
          <div
            key={card}
            style={{
              border: "1px solid var(--line)",
              borderRadius: 22,
              padding: 20,
              background: "var(--card)",
            }}
          >
            <p style={{ margin: 0, color: "var(--muted)" }}>{card}</p>
          </div>
        ))}
      </div>
    </AppShell>
  );
}

