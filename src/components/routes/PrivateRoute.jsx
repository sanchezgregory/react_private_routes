import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { LOGIN } from '../../config/routes/routes.js';
import { useAuthContext } from '../../contexts/authContext.jsx';

export default function PrivateRoute() {
    const { isAuthenticated } = useAuthContext();
    const location = useLocation()

    if (!isAuthenticated) {
        return <Navigate to={LOGIN} state={{location}}/>
    }

    return (
        <>
            <Outlet />
        </>
    );
}