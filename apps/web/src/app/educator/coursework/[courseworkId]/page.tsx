import { notFound } from "next/navigation";
import { AppShell } from "../../../../components/app-shell";
import { getAuthSession } from "../../../../lib/auth";
import { getEducatorCourseworkDetail } from "../../../../lib/api";

function formatScanStatus(status: string) {
  return status.replaceAll("_", " ");
}

export default async function EducatorCourseworkDetailPage({
  params,
}: {
  params: Promise<{ courseworkId: string }>;
}) {
  const { courseworkId } = await params;
  const { session } = await getAuthSession();
  const coursework = await getEducatorCourseworkDetail(courseworkId);
  const data = coursework.data;

  if (!data && coursework.error?.includes("404")) {
    notFound();
  }

  return (
    <AppShell
      view="educator"
      session={session}
      title="Coursework intake"
      subtitle="This route lets the educator inspect a coursework package as it arrives: who sent it, what file metadata came through, and how the submission is currently staged for review."
    >
      {data ? (
        <div style={{ display: "grid", gap: 16 }}>
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
            {data.topic ? (
              <p style={{ margin: "12px 0 0", color: "var(--muted)" }}>
                Topic: {data.topic}
              </p>
            ) : null}
            <p style={{ margin: "12px 0 0", color: "var(--muted)" }}>
              {data.description ??
                "No extended description is stored yet for this coursework."}
            </p>
          </div>

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
                <strong>{submission.studentName}</strong>
                <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                  Status: {submission.status}
                </p>
                <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                  Submitted:{" "}
                  {submission.submittedAt
                    ? new Date(submission.submittedAt).toLocaleString()
                    : "Not submitted yet"}
                </p>
                <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                  Grade:{" "}
                  {submission.gradeScore != null
                    ? `${submission.gradeScore}/100`
                    : "Not graded"}
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
                    File package
                  </p>
                  <p style={{ margin: 0, color: "var(--muted)" }}>
                    {submission.file
                      ? `${submission.file.fileName} | ${submission.file.mimeType} | ${submission.file.fileSizeBytes.toLocaleString()} bytes`
                      : "No file metadata was attached to this submission."}
                  </p>
                  {submission.file ? (
                    <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                      Scan state: {formatScanStatus(submission.file.scanStatus)}
                    </p>
                  ) : null}
                  {submission.file?.scanNotes ? (
                    <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                      Moderation note: {submission.file.scanNotes}
                    </p>
                  ) : null}
                  {submission.file ? (
                    <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                      Storage key: {submission.file.storageKey}
                    </p>
                  ) : null}
                  {submission.file?.downloadUrl ? (
                    <p style={{ margin: "10px 0 0" }}>
                      <a href={submission.file.downloadUrl} target="_blank">
                        Open signed file link
                      </a>
                    </p>
                  ) : submission.file ? (
                    <p style={{ margin: "10px 0 0", color: "var(--muted)" }}>
                      File access stays blocked until moderation marks it clean.
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
                    Feedback state
                  </p>
                  <p style={{ margin: 0, color: "var(--muted)" }}>
                    {submission.feedbackText ??
                      "No feedback written yet. Use the educator submission review route to return this work."}
                  </p>
                </div>
                {submission.file && submission.file.scanStatus !== "clean" ? (
                  <div
                    style={{
                      marginTop: 14,
                      padding: 16,
                      borderRadius: 18,
                      border: "1px solid var(--line)",
                      background: "#fff8f3",
                    }}
                  >
                    <p style={{ margin: 0, color: "var(--muted)" }}>
                      Review is blocked until this file is marked clean in admin
                      moderation.
                    </p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
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
            Educator coursework detail is unavailable right now.
          </p>
          <p style={{ marginBottom: 0, color: "var(--muted)" }}>
            {coursework.error ??
              "Restart the API process so it picks up the educator coursework detail endpoint."}
          </p>
        </div>
      )}
    </AppShell>
  );
}
