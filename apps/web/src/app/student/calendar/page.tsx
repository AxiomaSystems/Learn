import { AppShell } from "../../../components/app-shell";
import { getAuthSession } from "../../../lib/auth";

export default async function StudentCalendarPage() {
  const { session } = await getAuthSession();

  return (
    <AppShell
      view="student"
      session={session}
      title="Student calendar"
      subtitle="Reserved for the unified weekly calendar that merges class meetings, deadlines, and office-hours bookings."
    >
      <div
        style={{
          border: "1px solid var(--line)",
          borderRadius: 22,
          padding: 20,
          background: "var(--card)",
        }}
      >
        Calendar placeholder.
      </div>
    </AppShell>
  );
}

