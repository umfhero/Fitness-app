import AppShell from "../../../layout/AppShell"

export default function ClientsPage() {
  return (
    <AppShell>
      <h1 style={{ fontSize: "20px", marginBottom: "16px" }}>
        Clients
      </h1>

      <div
        style={{
          border: "1px solid var(--border-subtle)",
          padding: "16px",
          background: "var(--bg-surface)",
        }}
      >
        No clients yet
      </div>
    </AppShell>
  )
}
