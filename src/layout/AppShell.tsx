import Sidebar from "./Sidebar"
import Header from "./Header"

type Props = {
  children: React.ReactNode
}

export default function AppShell({ children }: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "220px 1fr",
        height: "100vh",
        background: "var(--bg-main)",
      }}
    >
      <Sidebar />

      <div style={{ display: "flex", flexDirection: "column", height: "100vh", overflow: "hidden" }}>
        <Header />

        <main
          style={{
            padding: "24px",
            height: "100%",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  )
}