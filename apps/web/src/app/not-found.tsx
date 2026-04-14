export default function NotFound() {
  return (
    <main style={{ padding: 48, maxWidth: 760, margin: "0 auto" }}>
      <div
        style={{
          border: "1px solid var(--line)",
          borderRadius: 24,
          padding: 32,
          background: "var(--card)",
        }}
      >
        <p style={{ margin: 0, fontSize: 14, color: "var(--muted)" }}>
          Axioma Learn
        </p>
        <h1 style={{ marginTop: 8 }}>Page not found</h1>
        <p style={{ color: "var(--muted)", marginBottom: 0 }}>
          The route you requested does not exist in the current workspace shell.
        </p>
      </div>
    </main>
  );
}
