import { LayoutDashboard, Users, Dumbbell, Calendar, CreditCard, Activity } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Sidebar() {
  const currentPath = window.location.pathname;

  return (
    <aside
      style={{
        borderRight: "1px solid var(--border-subtle)",
        background: "var(--bg-surface)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{
        padding: "16px 20px",
        borderBottom: "1px solid var(--border-subtle)",
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }}>
        <Activity size={18} strokeWidth={1.5} color="var(--accent)" />
        <span style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "1px" }}>
          TRAINER OS
        </span>
      </div>

      <nav style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "12px 8px" }}>
        <a href="/" className={`nav-link ${currentPath === '/' ? 'active' : ''}`}>
          <LayoutDashboard size={16} /> Dashboard
        </a>
        <a href="/clients" className={`nav-link ${currentPath === '/clients' ? 'active' : ''}`}>
          <Users size={16} /> Clients
        </a>
        <a href="/workouts" className={`nav-link ${currentPath === '/workouts' ? 'active' : ''}`}>
          <Dumbbell size={16} /> Workouts
        </a>
        <a href="/schedule" className={`nav-link ${currentPath === '/schedule' ? 'active' : ''}`}>
          <Calendar size={16} /> Schedule
        </a>
        <a href="/billing" className={`nav-link ${currentPath === '/billing' ? 'active' : ''}`}>
          <CreditCard size={16} /> Billing
        </a>
      </nav>

      <div style={{ marginTop: "auto", padding: "16px", borderTop: "1px solid var(--border-subtle)", fontSize: "11px", color: "var(--text-tertiary)", textAlign: "center" }}>
        v1.0.4-SYS
      </div>
    </aside>
  )
}
