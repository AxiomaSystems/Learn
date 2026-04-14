import { AppShell } from "../../../components/app-shell";
import { getAuthSession } from "../../../lib/auth";

export default async function AdminInstitutionsPage() {
  const { session } = await getAuthSession();

  return (
    <AppShell
      view="admin"
      session={session}
      title="Institution settings"
      subtitle="Reserved for tenant metadata, onboarding state, policy surfaces, and identity configuration."
    >
      <div
        style={{
          border: "1px solid var(--line)",
          borderRadius: 22,
          padding: 20,
          background: "var(--card)",
        }}
      >
        Institution settings placeholder.
      </div>
    </AppShell>
  );
}

