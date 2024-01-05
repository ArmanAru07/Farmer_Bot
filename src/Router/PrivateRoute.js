import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const PrivateRoute = ({ children }) => {
    const { user, laoding } = useContext(AuthContext);
    let location = useLocation();

    if (laoding) {
        return <Loading></Loading>
    }

    if (user && user?.uid) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;