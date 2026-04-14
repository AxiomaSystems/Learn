import { AppShell } from "../../../components/app-shell";
import { getAuthSession } from "../../../lib/auth";
import { getEducatorNotifications } from "../../../lib/api";

export default async function EducatorNotificationsPage() {
  const { session } = await getAuthSession();
  const inbox = await getEducatorNotifications();
  const data = inbox.data;

  return (
    <AppShell
      view="educator"
      session={session}
      title="Notifications"
      subtitle="This inbox surfaces scan outcomes and review-ready events so educators can react without polling every coursework route."
    >
      {data ? (
        <div style={{ display: "grid", gap: 12 }}>
          {data.items.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid var(--line)",
                borderRadius: 22,
                padding: 20,
                background: "var(--card)",
              }}
            >
              <p style={{ marginTop: 0, color: "var(--muted)", fontSize: 14 }}>
                {item.level} | {new Date(item.createdAt).toLocaleString()}
              </p>
              <strong>{item.title}</strong>
              <p style={{ margin: "8px 0 0", color: "var(--muted)" }}>{item.body}</p>
              {item.href ? (
                <p style={{ margin: "10px 0 0" }}>
                  <a href={item.href}>Open related workflow</a>
                </p>
              ) : null}
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
            Educator notifications are unavailable right now.
          </p>
          <p style={{ marginBottom: 0, color: "var(--muted)" }}>
            {inbox.error ?? "Restart the API process so it picks up the notifications endpoint."}
          </p>
        </div>
      )}
    </AppShell>
  );
}
