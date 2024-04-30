import { Navigate, Outlet } from 'react-router-dom';
import { LOGIN } from '../../config/routes/routes.js';
import { useAuthContext } from '../../contexts/authContext.jsx';

export default function PrivateRoute() {
    const { isAuthenticated } = useAuthContext();

    if (!isAuthenticated) {
        return <Navigate to={LOGIN} />
    }

    return (
        <>
            <Outlet />
        </>
    );
}