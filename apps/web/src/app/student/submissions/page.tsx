import { AppShell } from "../../../components/app-shell";
import { getAuthSession } from "../../../lib/auth";
import { getStudentSubmissions } from "../../../lib/api";

export default async function StudentSubmissionsPage() {
  const { session } = await getAuthSession();
  const studentSubmissions = await getStudentSubmissions();
  const data = studentSubmissions.data;

  return (
    <AppShell
      view="student"
      session={session}
      title="Student submissions"
      subtitle="This route tracks the delivery lifecycle of student work, including submission state, grading score, and educator feedback once work has been reviewed."
    >
      {data ? (
        <div style={{ display: "grid", gap: 12 }}>
          {data.submissions.map((submission) => (
            <div
              key={submission.submissionId}
              style={{
                border: "1px solid var(--line)",
                borderRadius: 22,
                padding: 20,
                background: "var(--card)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 16,
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                }}
              >
                <div>
                  <strong>{submission.courseworkTitle}</strong>
                  <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                    {submission.classCode} · {submission.classTitle} · {submission.kind}
                  </p>
                  <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                    Due: {new Date(submission.dueAt).toLocaleString()}
                  </p>
                  <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                    Status: {submission.status}
                  </p>
                </div>

                <div style={{ minWidth: 220 }}>
                  <p style={{ margin: 0, color: "var(--muted)" }}>
                    Submitted:{" "}
                    {submission.submittedAt
                      ? new Date(submission.submittedAt).toLocaleString()
                      : "Not submitted yet"}
                  </p>
                  <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                    Grade:{" "}
                    {submission.gradeScore != null ? `${submission.gradeScore}/100` : "Pending"}
                  </p>
                  <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                    Reviewed:{" "}
                    {submission.gradedAt
                      ? new Date(submission.gradedAt).toLocaleString()
                      : "Awaiting educator review"}
                  </p>
                </div>
              </div>

              <div
                style={{
                  marginTop: 16,
                  padding: 16,
                  borderRadius: 18,
                  border: "1px solid var(--line)",
                  background: "var(--soft)",
                }}
              >
                <p style={{ marginTop: 0, marginBottom: 8, fontWeight: 600 }}>
                  Feedback
                </p>
                <p style={{ margin: 0, color: "var(--muted)" }}>
                  {submission.feedbackText ??
                    "No written feedback yet. Once the educator returns this submission, the review note will appear here."}
                </p>
              </div>
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
            Student submissions are unavailable right now.
          </p>
          <p style={{ marginBottom: 0, color: "var(--muted)" }}>
            {studentSubmissions.error ??
              "Restart the API process so it picks up the student submissions endpoint."}
          </p>
        </div>
      )}
    </AppShell>
  );
}
