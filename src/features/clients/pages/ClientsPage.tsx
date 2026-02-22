import AppShell from "../../../layout/AppShell"
import { UserPlus, Search, Filter } from 'lucide-react'

export default function ClientsPage() {
  return (
    <AppShell>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h1 className="header-title">Clients Directory</h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-sm)", marginTop: "4px" }}>
            Manage client profiles, programs, and billing.
          </p>
        </div>
        <button className="btn btn-primary">
          <UserPlus size={14} strokeWidth={1.5} /> New Client
        </button>
      </header>

      <div className="container-panel" style={{ padding: 0 }}>
        <div style={{
          padding: "12px 16px",
          borderBottom: "1px solid var(--border-subtle)",
          display: "flex",
          gap: "8px",
          background: "var(--bg-hover)"
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            background: "var(--bg-surface)",
            border: "1px solid var(--border-strong)",
            padding: "4px 8px",
            flex: 1,
            maxWidth: "320px"
          }}>
            <Search size={14} strokeWidth={1.5} color="var(--text-tertiary)" />
            <input
              type="text"
              placeholder="Query alias or email..."
              style={{ border: "none", outline: "none", fontSize: "13px", width: "100%", background: "transparent" }}
            />
          </div>
          <button className="btn" style={{ background: "var(--bg-surface)" }}>
            <Filter size={14} strokeWidth={1.5} /> Filters
          </button>
        </div>

        <div style={{ padding: "32px", textAlign: "center", color: "var(--text-secondary)" }}>
          <div style={{ marginBottom: "12px" }}>
            <Search size={24} strokeWidth={1} color="var(--border-subtle)" style={{ margin: "0 auto" }} />
          </div>
          <p style={{ fontWeight: 500, color: "var(--text-primary)" }}>NO RECORDS FOUND</p>
          <p style={{ fontSize: "13px", marginTop: "4px" }}>The client database is currently empty.</p>
        </div>
      </div>
    </AppShell>
  )
}
