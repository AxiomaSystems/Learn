import { AppShell } from "../../../components/app-shell";
import { getAuthSession } from "../../../lib/auth";

export default async function AdminIntegrationsPage() {
  const { session } = await getAuthSession();

  return (
    <AppShell
      view="admin"
      session={session}
      title="Integrations"
      subtitle="Reserved for LMS, calendar, storage, and identity provider setup with tenant-aware operational visibility."
    >
      <div
        style={{
          border: "1px solid var(--line)",
          borderRadius: 22,
          padding: 20,
          background: "var(--card)",
        }}
      >
        Integrations placeholder.
      </div>
    </AppShell>
  );
}
