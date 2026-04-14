import { getAuthSession, roleLabel } from "../lib/auth";
import { getApiBaseUrl, getApiHealth } from "../lib/api";

const appModules = [
  "Student home, coursework, to-do, calendar, and office hours",
  "Educator class overview, review queue, and grounded AI assistance",
  "Institution-ready tenancy, auditability, and integration architecture",
];

const workspacePackages = [
  "apps/web",
  "apps/api",
  "packages/domain",
  "packages/ui",
  "packages/ai",
  "packages/db",
  "packages/integrations",
];

const deliveryTracks = [
  {
    title: "Institution shell",
    detail:
      "Tenant-aware access, role boundaries, and a stable operational surface for student, educator, and admin workflows.",
  },
  {
    title: "Academic workflow core",
    detail:
      "Classes, coursework, submissions, grades, office hours, and messaging stitched together around one domain model.",
  },
  {
    title: "Grounded AI layer",
    detail:
      "Study Buddy and educator AI assistance constrained by role, class context, and auditable actions.",
  },
];

function Pill({
  label,
  tone = "neutral",
}: {
  label: string;
  tone?: "neutral" | "ok" | "warning";
}) {
  const backgrounds = {
    neutral: "var(--soft)",
    ok: "var(--moss)",
    warning: "var(--bloom-soft)",
  };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "8px 12px",
        borderRadius: 999,
        fontSize: 13,
        background: backgrounds[tone],
        border: "1px solid var(--line)",
      }}
    >
      {label}
    </span>
  );
}

export default async function HomePage() {
  const apiHealth = await getApiHealth();
  const auth = await getAuthSession();
  const session = auth.session;

  return (
    <main style={{ padding: "32px", maxWidth: 1160, margin: "0 auto" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <div>
          <p style={{ margin: 0, fontSize: 14, color: "var(--muted)" }}>
            Internal platform landing
          </p>
          <h1 style={{ marginTop: 8, marginBottom: 0, fontSize: 36 }}>
            Institution-ready shell is online
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          <Pill label={session.institutionName} />
          <Pill label={roleLabel(session.role)} />
          <Pill
            label={
              apiHealth.data
                ? `API ${apiHealth.data.status}`
                : `API unavailable`
            }
            tone={apiHealth.data ? "ok" : "warning"}
          />
        </div>
      </div>

      <div
        style={{
          background: "linear-gradient(135deg, var(--bloom-soft), white 60%, var(--dew))",
          border: "1px solid var(--line)",
          borderRadius: 28,
          padding: 32,
        }}
      >
        <p style={{ margin: 0, fontSize: 14, color: "var(--muted)" }}>
          Axioma Learn
        </p>
        <h1 style={{ marginTop: 8, marginBottom: 12, fontSize: 40 }}>
          First vertical slice is wired end-to-end
        </h1>
        <p style={{ margin: 0, maxWidth: 700, color: "var(--muted)" }}>
          The workspace now has a real shared contract for tenant session and
          platform health, a live API health integration, and an internal shell
          that already thinks like a multi-tenant academic platform rather than
          a static placeholder.
        </p>
      </div>

      <section
        style={{
          marginTop: 24,
          display: "grid",
          gridTemplateColumns: "1.1fr 0.9fr",
          gap: 20,
        }}
      >
        <div
          style={{
            border: "1px solid var(--line)",
            borderRadius: 24,
            padding: 24,
            background: "var(--card)",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Tenant and session context</h2>
          <p style={{ color: "var(--muted)" }}>
            This session is currently served by an API auth stub shaped for a
            future WorkOS integration. It already gives the app a stable contract
            for institution-aware routing and role-based navigation.
          </p>
          <div
            style={{
              background: "var(--soft)",
              border: "1px solid var(--line)",
              borderRadius: 18,
              padding: 18,
              overflowX: "auto",
            }}
          >
            <pre style={{ margin: 0, fontSize: 13 }}>
              {JSON.stringify(session, null, 2)}
            </pre>
          </div>
        </div>

        <div
          style={{
            border: "1px solid var(--line)",
            borderRadius: 24,
            padding: 24,
            background: "var(--card)",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Platform connectivity</h2>
          <p style={{ color: "var(--muted)" }}>
            The web app is wired to both the API health endpoint and the auth
            session stub, so the monorepo already has real browser-to-backend
            integration paths for platform state.
          </p>
          <div style={{ display: "grid", gap: 12 }}>
            <Pill label={`Base URL: ${getApiBaseUrl()}`} />
            <Pill
              label={`Auth provider: ${auth.provider}`}
              tone={auth.workosConfigured ? "ok" : "warning"}
            />
            {apiHealth.data ? (
              <>
                <Pill label={`Service: ${apiHealth.data.service}`} tone="ok" />
                <Pill
                  label={`Environment: ${apiHealth.data.environment}`}
                  tone="ok"
                />
                <Pill label={`Version: ${apiHealth.data.version}`} tone="ok" />
                <Pill
                  label={`Timestamp: ${new Date(apiHealth.data.timestamp).toLocaleString()}`}
                  tone="ok"
                />
              </>
            ) : (
              <div
                style={{
                  border: "1px solid var(--line)",
                  borderRadius: 18,
                  padding: 16,
                  background: "var(--bloom-soft)",
                }}
              >
                <strong>Health endpoint unavailable.</strong>
                <p style={{ marginBottom: 0, color: "var(--muted)" }}>
                  {apiHealth.error ??
                    "Start the API with `corepack pnpm dev:api` or `corepack pnpm dev:all`."}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Delivery tracks now represented in code</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 16,
          }}
        >
          {deliveryTracks.map((track) => (
            <div
              key={track.title}
              style={{
                border: "1px solid var(--line)",
                borderRadius: 22,
                padding: 20,
                background: "var(--card)",
              }}
            >
              <h3 style={{ marginTop: 0 }}>{track.title}</h3>
              <p style={{ marginBottom: 0, color: "var(--muted)" }}>
                {track.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          marginTop: 24,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
        }}
      >
        <div>
          <h2>Initial product modules</h2>
          <ul>
            {appModules.map((module) => (
              <li key={module}>{module}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Workspace packages</h2>
          <ul>
            {workspacePackages.map((pkg) => (
              <li key={pkg}>{pkg}</li>
            ))}
          </ul>
        </div>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Role workspaces</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 16,
          }}
        >
          {auth.availableViews.map((view) => (
            <a
              key={view}
              href={`/${view}`}
              style={{
                border: "1px solid var(--line)",
                borderRadius: 22,
                padding: 20,
                background: "var(--card)",
              }}
            >
              <h3 style={{ marginTop: 0, textTransform: "capitalize" }}>{view}</h3>
              <p style={{ marginBottom: 0, color: "var(--muted)" }}>
                Open the {view} shell and start implementing real workflows for
                that role.
              </p>
            </a>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 24 }}>
        <h2>Next recommended commands</h2>
        <pre
          style={{
            background: "var(--soft)",
            border: "1px solid var(--line)",
            borderRadius: 20,
            padding: 20,
            overflowX: "auto",
          }}
        >
{`corepack pnpm docker:up
corepack pnpm db:push
corepack pnpm dev:all`}
        </pre>
      </section>
    </main>
  );
}
