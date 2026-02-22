import AppShell from "../layout/AppShell"
import { Users, TrendingUp, AlertCircle } from 'lucide-react'

export default function Dashboard() {
  return (
    <AppShell>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 className="header-title">System Overview</h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", marginTop: "4px" }}>
            Trainer operational metrics and active client status.
          </p>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <button className="btn">
            <AlertCircle size={14} strokeWidth={1.5} /> Report Issue
          </button>
          <button className="btn btn-primary">
            <TrendingUp size={14} strokeWidth={1.5} /> Generate Report
          </button>
        </div>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
        <div className="stat-card">
          <span className="stat-label">Active Clients</span>
          <span className="stat-value">24</span>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "var(--status-active)", marginTop: "8px" }}>
            <TrendingUp size={12} strokeWidth={2} /> <span>+3 this week</span>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-label">Pending Workouts</span>
          <span className="stat-value">12</span>
          <div style={{ fontSize: "12px", color: "var(--text-tertiary)", marginTop: "8px" }}>
            Requires review before tomorrow
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-label">Revenue (MTD)</span>
          <span className="stat-value">$3,450</span>
          <div style={{ fontSize: "12px", color: "var(--text-tertiary)", marginTop: "8px" }}>
            On track for $4,000 target
          </div>
        </div>
      </div>

      <div className="container-panel" style={{ marginTop: "8px" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
          borderBottom: "1px solid var(--border-subtle)",
          paddingBottom: "12px"
        }}>
          <h2 style={{ fontSize: "14px", fontWeight: 600 }}>Recent Activity Log</h2>
          <button style={{ background: "none", border: "none", color: "var(--text-secondary)", fontSize: "12px", cursor: "pointer", textDecoration: "underline" }}>View All</button>
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
          <thead>
            <tr style={{ color: "var(--text-tertiary)", borderBottom: "1px solid var(--border-subtle)", textAlign: "left" }}>
              <th style={{ padding: "8px 0", fontWeight: 500 }}>Time</th>
              <th style={{ padding: "8px", fontWeight: 500 }}>Entity</th>
              <th style={{ padding: "8px", fontWeight: 500 }}>Event</th>
              <th style={{ padding: "8px", fontWeight: 500, textAlign: "right" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { time: "09:42", entity: "Sarah Jenkins", event: "Completed Workout: Full Body A", status: "VERIFIED" },
              { time: "08:15", entity: "Mike Ross", event: "Message: 'Should I increase weight?'", status: "PENDING" },
              { time: "Yesterday", entity: "System", event: "Invoice #INV-492 Paid", status: "SUCCESS" },
            ].map((row, i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--bg-muted)" }}>
                <td style={{ padding: "12px 0", color: "var(--text-secondary)", whiteSpace: "nowrap" }}>{row.time}</td>
                <td style={{ padding: "12px 8px", fontWeight: 500 }}>{row.entity}</td>
                <td style={{ padding: "12px 8px" }}>{row.event}</td>
                <td style={{ padding: "12px 8px", textAlign: "right" }}>
                  <span style={{
                    fontSize: "10px",
                    padding: "2px 6px",
                    background: row.status === 'VERIFIED' || row.status === 'SUCCESS' ? 'var(--status-active-bg)' : 'var(--bg-muted)',
                    color: row.status === 'VERIFIED' || row.status === 'SUCCESS' ? 'var(--status-active)' : 'var(--text-secondary)',
                    fontWeight: 600,
                    letterSpacing: "0.5px"
                  }}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppShell>
  )
}