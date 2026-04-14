import { AppShell } from "../../../components/app-shell";
import { getAuthSession } from "../../../lib/auth";
import { getEducatorSubmissions } from "../../../lib/api";
import { submitEducatorReview } from "./actions";

export default async function EducatorSubmissionsPage() {
  const { session } = await getAuthSession();
  const educatorSubmissions = await getEducatorSubmissions();
  const data = educatorSubmissions.data;

  return (
    <AppShell
      view="educator"
      session={session}
      title="Submission review"
      subtitle="This route turns educator review into an operational workflow: inspect submission state, assign a score, return written feedback, and push the updated grading status back into the student experience."
    >
      {data ? (
        <div style={{ display: "grid", gap: 14 }}>
          {data.submissions.map((submission) => (
            <div
              key={submission.submissionId}
              style={{
                border: "1px solid var(--line)",
                borderRadius: 24,
                padding: 20,
                background: "var(--card)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr minmax(280px, 380px)",
                  gap: 20,
                }}
              >
                <div>
                  <p style={{ marginTop: 0, color: "var(--muted)", fontSize: 14 }}>
                    Priority: {submission.reviewPriority}
                  </p>
                  <strong>{submission.courseworkTitle}</strong>
                  <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                    {submission.studentName} · {submission.classCode} ·{" "}
                    {submission.classTitle}
                  </p>
                  <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                    Due: {new Date(submission.dueAt).toLocaleString()}
                  </p>
                  <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                    Current status: {submission.status}
                  </p>
                  <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                    Current grade:{" "}
                    {submission.gradeScore != null
                      ? `${submission.gradeScore}/100`
                      : "Not graded"}
                  </p>
                  <p style={{ margin: "10px 0 0" }}>
                    <a href={`/educator/coursework/${submission.courseworkId}`}>
                      Open coursework intake
                    </a>
                  </p>
                  <div
                    style={{
                      marginTop: 14,
                      padding: 16,
                      borderRadius: 18,
                      border: "1px solid var(--line)",
                      background: "var(--soft)",
                    }}
                  >
                    <p style={{ marginTop: 0, marginBottom: 8, fontWeight: 600 }}>
                      Current feedback
                    </p>
                    <p style={{ margin: 0, color: "var(--muted)" }}>
                      {submission.feedbackText ??
                        "No feedback written yet. Use the review form to return this work with a score and note."}
                    </p>
                  </div>
                </div>

                <form
                  action={submitEducatorReview}
                  style={{
                    display: "grid",
                    gap: 12,
                    alignContent: "start",
                    padding: 18,
                    borderRadius: 20,
                    border: "1px solid var(--line)",
                    background: "#fff8f3",
                  }}
                >
                  <input
                    type="hidden"
                    name="submissionId"
                    value={submission.submissionId}
                  />

                  <label style={{ display: "grid", gap: 6 }}>
                    <span style={{ fontSize: 14 }}>Status</span>
                    <select
                      name="status"
                      defaultValue={submission.status.toUpperCase()}
                      style={{
                        borderRadius: 14,
                        border: "1px solid var(--line)",
                        padding: "12px 14px",
                        background: "white",
                      }}
                    >
                      <option value="DRAFT">Draft</option>
                      <option value="SUBMITTED">Submitted</option>
                      <option value="RETURNED">Returned</option>
                    </select>
                  </label>

                  <label style={{ display: "grid", gap: 6 }}>
                    <span style={{ fontSize: 14 }}>Grade score</span>
                    <input
                      type="number"
                      name="gradeScore"
                      min={0}
                      max={100}
                      defaultValue={submission.gradeScore ?? ""}
                      placeholder="0-100"
                      style={{
                        borderRadius: 14,
                        border: "1px solid var(--line)",
                        padding: "12px 14px",
                        background: "white",
                      }}
                    />
                  </label>

                  <label style={{ display: "grid", gap: 6 }}>
                    <span style={{ fontSize: 14 }}>Feedback text</span>
                    <textarea
                      name="feedbackText"
                      defaultValue={submission.feedbackText ?? ""}
                      rows={6}
                      placeholder="Write the feedback the student should receive when this submission is returned."
                      style={{
                        borderRadius: 14,
                        border: "1px solid var(--line)",
                        padding: "12px 14px",
                        background: "white",
                        resize: "vertical",
                      }}
                    />
                  </label>

                  <button
                    type="submit"
                    style={{
                      border: "1px solid var(--line)",
                      borderRadius: 16,
                      padding: "12px 16px",
                      background: "var(--card)",
                      cursor: "pointer",
                    }}
                  >
                    Save review
                  </button>
                </form>
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
            Educator submissions are unavailable right now.
          </p>
          <p style={{ marginBottom: 0, color: "var(--muted)" }}>
            {educatorSubmissions.error ??
              "Restart the API process so it picks up the educator submissions endpoint."}
          </p>
        </div>
      )}
    </AppShell>
  );
}
