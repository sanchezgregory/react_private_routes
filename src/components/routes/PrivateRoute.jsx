import {Navigate, Outlet} from 'react-router-dom'
import { useAuthContext } from '../../contexts/authContext.jsx'
import { LOGIN } from '../../config/routes/routes'

export default function PrivateRoute() {

    const {isAuthtenticated} = useAuthContext()

    if (!isAuthtenticated) {
        return <Navigate to={LOGIN} />
    }

    return (
        <>
         <Outlet />
        </>
    )
}