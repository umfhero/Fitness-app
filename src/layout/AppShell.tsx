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
        gridTemplateColumns: "240px 1fr",
        height: "100vh",
      }}
    >
      <Sidebar />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <Header />

        <main
          style={{
            padding: "24px",
            background: "var(--bg-main)",
            height: "100%",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  )
}