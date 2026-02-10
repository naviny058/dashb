import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import User from './pages/User'
import Order from './pages/Order'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<User />} />
      <Route path="/orders" element={<Order />} />
    </Routes>
  )
}

export default App
