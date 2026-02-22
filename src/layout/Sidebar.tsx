export default function Sidebar() {
  return (
    <aside
      style={{
        width: "240px",
        borderRight: "1px solid var(--border-subtle)",
        padding: "16px",
        background: "var(--bg-surface)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <div style={{ fontSize: "12px", fontWeight: 600 }}>
        TRAINER OS
      </div>

      <nav style={{ display: "grid", gap: "6px" }}>
        <a href="/">Dashboard</a>
        <a href="/clients">Clients</a>
        <a href="/workouts">Workouts</a>
        <a href="/schedule">Schedule</a>
        <a href="/billing">Billing</a>
      </nav>
    </aside>
  )
}