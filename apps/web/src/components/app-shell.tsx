import { ReactNode } from "react";
import type { PortalView, TenantSession } from "@axioma/domain";
import { navByView } from "../lib/navigation";
import { roleLabel, viewTitle } from "../lib/auth";

export function AppShell({
  view,
  session,
  title,
  subtitle,
  children,
}: {
  view: PortalView;
  session: TenantSession;
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <main style={{ minHeight: "100vh", padding: 24 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "280px minmax(0, 1fr)",
          gap: 20,
          maxWidth: 1280,
          margin: "0 auto",
        }}
      >
        <aside
          style={{
            border: "1px solid var(--line)",
            borderRadius: 28,
            padding: 22,
            background: "#fff8f3",
            height: "fit-content",
            position: "sticky",
            top: 24,
          }}
        >
          <p style={{ margin: 0, fontSize: 13, color: "var(--muted)" }}>
            Axioma Learn
          </p>
          <h2 style={{ marginTop: 8, marginBottom: 6 }}>{viewTitle(view)}</h2>
          <p style={{ marginTop: 0, color: "var(--muted)", fontSize: 14 }}>
            {session.institutionName}
          </p>

          <div
            style={{
              marginTop: 18,
              padding: 16,
              borderRadius: 20,
              background: "var(--bloom-soft)",
              border: "1px solid var(--line)",
            }}
          >
            <p style={{ margin: 0, fontWeight: 600 }}>{session.fullName}</p>
            <p style={{ margin: "4px 0 0", fontSize: 14, color: "var(--muted)" }}>
              Active role: {roleLabel(session.role)}
            </p>
          </div>

          <nav style={{ display: "grid", gap: 10, marginTop: 18 }}>
            {navByView[view].map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{
                  padding: "12px 14px",
                  borderRadius: 16,
                  border: "1px solid var(--line)",
                  background: "white",
                  fontSize: 14,
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        <section>
          <div
            style={{
              border: "1px solid var(--line)",
              borderRadius: 28,
              padding: 28,
              background:
                "linear-gradient(135deg, var(--bloom-soft), white 60%, var(--dew))",
            }}
          >
            <p style={{ margin: 0, fontSize: 14, color: "var(--muted)" }}>
              {viewTitle(view)}
            </p>
            <h1 style={{ marginTop: 8, marginBottom: 10 }}>{title}</h1>
            <p style={{ marginBottom: 0, maxWidth: 760, color: "var(--muted)" }}>
              {subtitle}
            </p>
          </div>

          <div style={{ marginTop: 20 }}>{children}</div>
        </section>
      </div>
    </main>
  );
}
