import { notFound } from "next/navigation";
import { AppShell } from "../../../../components/app-shell";
import { getAuthSession } from "../../../../lib/auth";
import { getStudentCourseworkDetail } from "../../../../lib/api";
import { submitStudentCourseworkFileHandoff } from "./actions";

export default async function StudentCourseworkDetailPage({
  params,
}: {
  params: Promise<{ courseworkId: string }>;
}) {
  const { courseworkId } = await params;
  const { session } = await getAuthSession();
  const coursework = await getStudentCourseworkDetail(courseworkId);
  const data = coursework.data;

  if (!data && coursework.error?.includes("404")) {
    notFound();
  }

  return (
    <AppShell
      view="student"
      session={session}
      title="Coursework handoff"
      subtitle="This route gives the student a file-first submission handoff surface: understand the assignment, attach the work package, and send it into the educator review workflow."
    >
      {data ? (
        <div style={{ display: "grid", gap: 16 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 0.95fr",
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
                {data.classCode} | {data.classTitle}
              </p>
              <h2 style={{ marginTop: 8, marginBottom: 8 }}>{data.courseworkTitle}</h2>
              <p style={{ margin: 0, color: "var(--muted)" }}>
                Kind: {data.kind}. Due: {new Date(data.dueAt).toLocaleString()}.
              </p>
              <p style={{ margin: "12px 0 0", color: "var(--muted)" }}>
                Educator: {data.educatorName}
              </p>
              {data.topic ? (
                <p style={{ margin: "12px 0 0", color: "var(--muted)" }}>
                  Topic: {data.topic}
                </p>
              ) : null}
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
                  Description
                </p>
                <p style={{ margin: 0, color: "var(--muted)" }}>
                  {data.description ??
                    "No written description has been attached yet for this coursework."}
                </p>
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
              <p style={{ marginTop: 0, color: "var(--muted)", fontSize: 14 }}>
                Current submission state
              </p>
              {data.submission ? (
                <>
                  <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                    Status: {data.submission.status}
                  </p>
                  <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                    Submitted:{" "}
                    {data.submission.submittedAt
                      ? new Date(data.submission.submittedAt).toLocaleString()
                      : "Not submitted yet"}
                  </p>
                  <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                    Grade:{" "}
                    {data.submission.gradeScore != null
                      ? `${data.submission.gradeScore}/100`
                      : "Pending"}
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
                      Attached file
                    </p>
                    <p style={{ margin: 0, color: "var(--muted)" }}>
                      {data.submission.file
                        ? `${data.submission.file.fileName} | ${data.submission.file.mimeType} | ${data.submission.file.fileSizeBytes.toLocaleString()} bytes`
                        : "No file metadata stored yet."}
                    </p>
                    {data.submission.file?.downloadUrl ? (
                      <p style={{ margin: "10px 0 0" }}>
                        <a href={data.submission.file.downloadUrl} target="_blank">
                          Open signed file link
                        </a>
                      </p>
                    ) : null}
                  </div>
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
                      Feedback
                    </p>
                    <p style={{ margin: 0, color: "var(--muted)" }}>
                      {data.submission.feedbackText ??
                        "No feedback yet. Once the educator returns the work, it will appear here."}
                    </p>
                  </div>
                </>
              ) : (
                <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                  No submission exists yet for this coursework.
                </p>
              )}
            </div>
          </div>

          <form
            action={submitStudentCourseworkFileHandoff}
            style={{
              border: "1px solid var(--line)",
              borderRadius: 24,
              padding: 20,
              background: "#fff8f3",
              display: "grid",
              gap: 14,
            }}
          >
            <input type="hidden" name="courseworkId" value={data.courseworkId} />
            <div>
              <h3 style={{ marginTop: 0, marginBottom: 8 }}>File handoff</h3>
              <p style={{ margin: 0, color: "var(--muted)" }}>
                This flow now uploads the selected file to a private S3 object path
                using a presigned URL and then records the handoff in the platform.
              </p>
            </div>

            <label style={{ display: "grid", gap: 6 }}>
              <span style={{ fontSize: 14 }}>Handoff mode</span>
              <select
                name="status"
                defaultValue={data.submission?.status === "draft" ? "DRAFT" : "SUBMITTED"}
                style={{
                  borderRadius: 14,
                  border: "1px solid var(--line)",
                  padding: "12px 14px",
                  background: "white",
                  maxWidth: 280,
                }}
              >
                <option value="DRAFT">Save as draft</option>
                <option value="SUBMITTED">Submit to educator</option>
              </select>
            </label>

            <label style={{ display: "grid", gap: 6 }}>
              <span style={{ fontSize: 14 }}>Work file</span>
              <input
                type="file"
                name="file"
                style={{
                  borderRadius: 14,
                  border: "1px solid var(--line)",
                  padding: "12px 14px",
                  background: "white",
                }}
              />
            </label>

            <button
              type="submit"
              style={{
                width: "fit-content",
                border: "1px solid var(--line)",
                borderRadius: 16,
                padding: "12px 16px",
                background: "var(--card)",
                cursor: "pointer",
              }}
            >
              Upload and save handoff
            </button>
          </form>
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
            Coursework detail is unavailable right now.
          </p>
          <p style={{ marginBottom: 0, color: "var(--muted)" }}>
            {coursework.error ??
              "Restart the API process so it picks up the coursework detail endpoint."}
          </p>
        </div>
      )}
    </AppShell>
  );
}
