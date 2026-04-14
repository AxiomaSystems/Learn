import { AppShell } from "../../../components/app-shell";
import { getAuthSession } from "../../../lib/auth";
import { getEducatorClasses } from "../../../lib/api";

export default async function EducatorClassesPage() {
  const { session } = await getAuthSession();
  const educatorClasses = await getEducatorClasses();
  const data = educatorClasses.data;

  return (
    <AppShell
      view="educator"
      session={session}
      title="Educator classes"
      subtitle="This route now reads from a real API contract for educator-owned classes, giving the teaching side a live operational view of class load and submission state."
    >
      {data ? (
        <div style={{ display: "grid", gap: 12 }}>
          {data.classes.map((course) => (
            <div
              key={course.id}
              style={{
                border: "1px solid var(--line)",
                borderRadius: 22,
                padding: 20,
                background: "var(--card)",
              }}
            >
              <strong>
                {course.code} · {course.title}
              </strong>
              <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                Coursework items: {course.courseworkCount}
              </p>
              <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                Draft submissions: {course.draftSubmissionCount}
              </p>
              <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                Submitted items: {course.submittedCount}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            border: "1px solid var(--line)",
            borderRadius: 22,
            padding: 20,
            background: "var(--card)",
          }}
        >
          <p style={{ margin: 0, color: "var(--muted)" }}>
            Educator classes are unavailable right now.
          </p>
          <p style={{ marginBottom: 0, color: "var(--muted)" }}>
            {educatorClasses.error ??
              "Restart the API process so it picks up the educator classes endpoint."}
          </p>
        </div>
      )}
    </AppShell>
  );
}
