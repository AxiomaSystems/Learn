import { AppShell } from "../../../components/app-shell";
import { getAuthSession } from "../../../lib/auth";
import { getStudentClasses } from "../../../lib/api";

export default async function StudentClassesPage() {
  const { session } = await getAuthSession();
  const studentClasses = await getStudentClasses();
  const data = studentClasses.data;

  return (
    <AppShell
      view="student"
      session={session}
      title="Student classes"
      subtitle="This route now reads from a real API contract for the student class directory, giving the student side a live overview of available classes and upcoming academic load."
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
                Educator: {course.educatorName}
              </p>
              <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                Coursework items: {course.courseworkCount}
              </p>
              <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                Upcoming tasks: {course.upcomingTaskCount}
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
            Student classes are unavailable right now.
          </p>
          <p style={{ marginBottom: 0, color: "var(--muted)" }}>
            {studentClasses.error ??
              "Restart the API process so it picks up the student classes endpoint."}
          </p>
        </div>
      )}
    </AppShell>
  );
}
