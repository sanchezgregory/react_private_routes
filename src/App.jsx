import './App.css'

import { Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './contexts/authContext'
import { Home, Dashboard, Login, Register } from './pages'
import { Navbar } from './components/Navbar'
import { LOGIN, REGISTER, HOME, ADMIN, WEATHER} from './config/routes/routes'
import PublicRoute from './components/routes/PublicRoute'
import PrivateRoute from './components/routes/PrivateRoute'
import Weather from './components/Weather'

function App() {
  return (
    <>
      <AuthContextProvider>
      <Navbar />
         <Routes>
          <Route path={HOME} element={<PublicRoute />}>
            <Route index element={<Home />} />
            <Route path={LOGIN} element={<Login />} />
            <Route path={REGISTER} element={<Register />} />
          </Route>
          <Route path={ADMIN} element={<PrivateRoute />}>
            <Route index element={<Dashboard />} />
            <Route path={WEATHER} element={<Weather/>} />
          </Route>
        <Route path='*' element={<h1>Not found</h1>} />
      </Routes>     
      </AuthContextProvider>
    </>
  )
}

export default App
