import { Search, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header
      style={{
        borderBottom: "1px solid var(--border-subtle)",
        padding: "0 24px",
        height: "56px",
        background: "var(--bg-surface)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px", color: "var(--text-tertiary)" }}>
        <Search size={16} strokeWidth={1.5} />
        <span style={{ fontSize: "13px" }}>Search OS (Ctrl+K)</span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <button style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-secondary)", display: "flex" }}>
          <Bell size={16} strokeWidth={1.5} />
        </button>
        <div style={{ width: "24px", height: "24px", background: "var(--accent)", color: "var(--accent-text)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 600 }}>
          JD
        </div>
      </div>
    </header>
  )
}