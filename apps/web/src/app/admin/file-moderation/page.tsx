import { AppShell } from "../../../components/app-shell";
import { getAuthSession } from "../../../lib/auth";
import { getFileModerationQueue } from "../../../lib/api";
import { updateFileModeration } from "./actions";

function formatScanStatus(status: string) {
  return status.replaceAll("_", " ");
}

export default async function AdminFileModerationPage() {
  const { session } = await getAuthSession();
  const moderationQueue = await getFileModerationQueue();
  const data = moderationQueue.data;

  return (
    <AppShell
      view="admin"
      session={session}
      title="File moderation"
      subtitle="This route gives operations a manual trust gate for file uploads before educators can open or review them."
    >
      {data ? (
        <div style={{ display: "grid", gap: 14 }}>
          {data.items.map((item) => (
            <div
              key={item.submissionId}
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
                    {data.institutionName}
                  </p>
                  <strong>{item.courseworkTitle}</strong>
                  <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                    {item.studentName} | {item.classCode} | {item.classTitle}
                  </p>
                  <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                    Current scan state: {formatScanStatus(item.scanStatus)}
                  </p>
                  <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                    File: {item.fileName} | {item.mimeType} |{" "}
                    {item.fileSizeBytes.toLocaleString()} bytes
                  </p>
                  <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                    Storage key: {item.storageKey}
                  </p>
                  <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>
                    Submitted:{" "}
                    {item.submittedAt
                      ? new Date(item.submittedAt).toLocaleString()
                      : "Not submitted"}
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
                      Moderation notes
                    </p>
                    <p style={{ margin: 0, color: "var(--muted)" }}>
                      {item.scanNotes ?? "No moderation notes yet."}
                    </p>
                  </div>
                </div>

                <form
                  action={updateFileModeration}
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
                    value={item.submissionId}
                  />

                  <label style={{ display: "grid", gap: 6 }}>
                    <span style={{ fontSize: 14 }}>Scan status</span>
                    <select
                      name="scanStatus"
                      defaultValue={item.scanStatus.toUpperCase()}
                      style={{
                        borderRadius: 14,
                        border: "1px solid var(--line)",
                        padding: "12px 14px",
                        background: "white",
                      }}
                    >
                      <option value="PENDING_SCAN">Pending scan</option>
                      <option value="CLEAN">Clean</option>
                      <option value="QUARANTINED">Quarantined</option>
                      <option value="REJECTED">Rejected</option>
                    </select>
                  </label>

                  <label style={{ display: "grid", gap: 6 }}>
                    <span style={{ fontSize: 14 }}>Notes</span>
                    <textarea
                      name="scanNotes"
                      defaultValue={item.scanNotes ?? ""}
                      rows={6}
                      placeholder="Explain why the file was marked clean, quarantined, or rejected."
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
                    Save moderation
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
            File moderation is unavailable right now.
          </p>
          <p style={{ marginBottom: 0, color: "var(--muted)" }}>
            {moderationQueue.error ??
              "Restart the API process so it picks up the file moderation endpoint."}
          </p>
        </div>
      )}
    </AppShell>
  );
}
