import { AppShell } from "../../../components/app-shell";
import { getAuthSession } from "../../../lib/auth";
import { getEducatorReviewQueue } from "../../../lib/api";

export default async function EducatorReviewQueuePage() {
  const { session } = await getAuthSession();
  const reviewQueue = await getEducatorReviewQueue();
  const data = reviewQueue.data;

  return (
    <AppShell
      view="educator"
      session={session}
      title="Review queue"
      subtitle="This route is now backed by a real API contract for educator review work. Once the API process is restarted and the seed data is present, it should reflect database-backed queue items."
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
                Queue summary
              </p>
              <h2 style={{ marginTop: 8, marginBottom: 8 }}>{data.educatorName}</h2>
              <p style={{ color: "var(--muted)", marginBottom: 0 }}>
                Source: {data.source}. Queue size: {data.queueSize}. Institution:{" "}
                {data.institutionName}.
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
                Guidance
              </p>
              <ul style={{ marginBottom: 0 }}>
                {data.guidance.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div
            style={{
              marginTop: 16,
              display: "grid",
              gap: 12,
            }}
          >
            {data.reviewItems.map((item) => (
              <div
                key={item.courseworkId}
                style={{
                  border: "1px solid var(--line)",
                  borderRadius: 20,
                  padding: 18,
                  background: "var(--card)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 16,
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <strong>{item.courseworkTitle}</strong>
                    <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>
                      {item.classCode} · {item.classTitle} · {item.kind}
                    </p>
                    <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>
                      Due: {new Date(item.dueAt).toLocaleString()}
                    </p>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <p style={{ margin: 0, color: "var(--muted)" }}>
                      Priority: {item.reviewPriority}
                    </p>
                    <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>
                      Drafts: {item.draftSubmissionCount}
                    </p>
                    <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>
                      Submitted: {item.submittedCount}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
            Educator review queue data is unavailable right now.
          </p>
          <p style={{ marginBottom: 0, color: "var(--muted)" }}>
            {reviewQueue.error ??
              "Restart the API process so it picks up the educator review queue endpoint."}
          </p>
        </div>
      )}
    </AppShell>
  );
}
