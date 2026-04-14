import { AppShell } from "../../components/app-shell";
import { getAuthSession } from "../../lib/auth";
import { getStudentHome } from "../../lib/api";

export default async function StudentPage() {
  const { session } = await getAuthSession();
  const studentHome = await getStudentHome();
  const data = studentHome.data;

  return (
    <AppShell
      view="student"
      session={session}
      title="Student shell"
      subtitle="This route is now backed by a real API contract for student home data. Once the database is running and seeded, this surface will automatically switch from fallback content to database-backed summary data."
    >
      {data ? (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: 16,
            }}
          >
            <div
              style={{
                border: "1px solid var(--line)",
                borderRadius: 22,
                padding: 20,
                background: "var(--card)",
              }}
            >
              <p style={{ marginTop: 0, color: "var(--muted)", fontSize: 14 }}>
                Student summary
              </p>
              <h2 style={{ marginTop: 8, marginBottom: 8 }}>{data.studentName}</h2>
              <p style={{ color: "var(--muted)", marginBottom: 0 }}>
                Source: {data.source}. Institution: {data.institutionName}.
              </p>
            </div>

            <div
              style={{
                border: "1px solid var(--line)",
                borderRadius: 22,
                padding: 20,
                background: "var(--card)",
              }}
            >
              <p style={{ marginTop: 0, color: "var(--muted)", fontSize: 14 }}>
                Focus items
              </p>
              <ul style={{ marginBottom: 0 }}>
                {data.focusItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              marginTop: 16,
            }}
          >
            <div
              style={{
                border: "1px solid var(--line)",
                borderRadius: 22,
                padding: 20,
                background: "var(--card)",
              }}
            >
              <h3 style={{ marginTop: 0 }}>Open tasks</h3>
              <div style={{ display: "grid", gap: 12 }}>
                {data.openTasks.map((task) => (
                  <div
                    key={task.id}
                    style={{
                      border: "1px solid var(--line)",
                      borderRadius: 18,
                      padding: 16,
                      background: "var(--soft)",
                    }}
                  >
                    <strong>{task.title}</strong>
                    <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>
                      {task.classCode} · {task.kind} · {new Date(task.dueAt).toLocaleString()}
                    </p>
                    <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>
                      Status: {task.status}
                    </p>
                    <p style={{ margin: "10px 0 0" }}>
                      <a href={`/student/coursework/${task.id}`}>Open coursework handoff</a>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                border: "1px solid var(--line)",
                borderRadius: 22,
                padding: 20,
                background: "var(--card)",
              }}
            >
              <h3 style={{ marginTop: 0 }}>Classes</h3>
              <div style={{ display: "grid", gap: 12 }}>
                {data.classes.map((course) => (
                  <div
                    key={course.id}
                    style={{
                      border: "1px solid var(--line)",
                      borderRadius: 18,
                      padding: 16,
                      background: "var(--soft)",
                    }}
                  >
                    <strong>
                      {course.code} · {course.title}
                    </strong>
                    <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>
                      Educator: {course.educatorName}
                    </p>
                    <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>
                      Coursework items: {course.courseworkCount}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
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
            Student home data is unavailable right now.
          </p>
          <p style={{ marginBottom: 0, color: "var(--muted)" }}>
            {studentHome.error ??
              "Start the API and database-backed services to populate this view."}
          </p>
        </div>
      )}
    </AppShell>
  );
}
