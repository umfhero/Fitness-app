import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import ClientsPage from "./features/clients/pages/ClientsPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/clients" element={<ClientsPage />} />
    </Routes>
  )
}

export default App