import './App.css'

import { Routes, Route } from 'react-router-dom'
import { Home, Dashboard, Login, Logout, Register } from './pages'
import { LOGIN, REGISTER, DASHBOARD, HOME, LOGOUT } from './config/routes/routes'

function App() {

  return (
    <>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={REGISTER} element={<Register />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={LOGOUT} element={<Logout />} />
        <Route path={DASHBOARD} element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
