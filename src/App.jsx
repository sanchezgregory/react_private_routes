import './App.css'

import { Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './contexts/authContext'

import { Home, Dashboard, Login, Register, TodoList } from './pages'
import { Navbar } from './components/Navbar'
import { LOGIN, REGISTER, HOME, ADMIN, WEATHER, POSTS, SEE_POST, TODO_LIST} from './config/routes/routes'
import PublicRoute from './components/routes/PublicRoute'
import PrivateRoute from './components/routes/PrivateRoute'
import Weather from './components/Weather'
import Posts from './pages/Posts'
import SeePost from './components/SeePost'
import { AppPostContextProvider } from './contexts/appPostContext'

function App() {
  return (
    <>
      <AuthContextProvider>
      <AppPostContextProvider>
        <Navbar />
          <div className="appContainer">
            <Routes>
              <Route path={HOME} element={<PublicRoute />}>
                <Route index element={<Home />} />
                <Route path={LOGIN} element={<Login />} />
                <Route path={REGISTER} element={<Register />} />
              </Route>
              <Route path={ADMIN} element={<PrivateRoute />}>
                <Route index element={<Dashboard />} />
                <Route path={WEATHER} element={<Weather />} />
                <Route path={POSTS} element={<Posts />} />
                <Route path={`${SEE_POST}/:id_post`} element={<SeePost />} />
                <Route path={TODO_LIST} element={<TodoList />} />
              </Route>
              <Route path='*' element={<h1>Not found</h1>} />
            </Routes>     
          </div>
      </AppPostContextProvider>
      </AuthContextProvider>
    </>
  )
}

export default App
