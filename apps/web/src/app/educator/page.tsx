import { AppShell } from "../../components/app-shell";
import { getAuthSession } from "../../lib/auth";

const educatorCards = [
  "Review queue with rubric-oriented follow-through",
  "Class health summaries and support signals",
  "Grounded AI assistant for clarifications, summaries, and nudges",
];

export default async function EducatorPage() {
  const { session } = await getAuthSession();

  return (
    <AppShell
      view="educator"
      session={session}
      title="Educator shell"
      subtitle="This shell frames the operational workspace for teaching workflows. It is ready for the first real educator dashboards and review flows."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 16,
        }}
      >
        {educatorCards.map((card) => (
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

