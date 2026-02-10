import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import User from './pages/User'
import Order from './pages/Order'
import Setting from './pages/Setting'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<User />} />
      <Route path="/orders" element={<Order />} />
      <Route path="/settings" element={<Setting />} />
    </Routes>
  )
}

export default App
