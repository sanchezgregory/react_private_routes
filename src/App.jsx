import './App.css'

import { Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './contexts/authContext'
import { Home, Dashboard, Login, Logout, Register, Admin } from './pages'
import { Navbar } from './components/Navbar'
import { LOGIN, REGISTER, DASHBOARD, HOME, LOGOUT, ADMIN} from './config/routes/routes'
import PublicRoute from './components/routes/PublicRoute'
import PrivateRoute from './components/routes/PrivateRoute'
function App() {

  return (
    <>
      <AuthContextProvider>
      <Navbar />
      <div className="container">
         <Routes>
        {/* Las rutas acá no tienen prefijo */}
        <Route path={HOME} element={<PublicRoute />}>
          <Route index element={<Home />} />
          <Route path={LOGIN} element={<Login />} />
          <Route path={REGISTER} element={<Register />} />
        </Route>
        {/* Las rutas aca son con el prefijo /admin/dashboard, /admin/logout */}
        <Route path={ADMIN} element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
          <Route path={LOGOUT} element={<Logout />} />
        </Route>
      </Routes>
      </div>
     
      </AuthContextProvider>
    </>
  )
}

export default App
