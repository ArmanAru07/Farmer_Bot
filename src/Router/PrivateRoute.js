import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, laoding } = useContext(AuthContext);
    let location = useLocation();

    if (laoding) {
        return (
            <div style={{ marginTop: '40px', marginBottom: "100px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin"></div>
            </div>

        )
    }

    if (user && user?.uid) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;