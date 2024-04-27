import {Navigate, Outlet} from 'react-router-dom'
import {ADMIN} from '../../config/routes/routes.js'
import  { useAuthContext }  from '../../contexts/authContext.jsx'

export default function PublicRoute() {
    const {isAuthenticated} = useAuthContext()


    if (isAuthenticated) {
        return <Navigate to={ADMIN} />
    }

    return (
        <>
            <Outlet />
        </>
    )

}