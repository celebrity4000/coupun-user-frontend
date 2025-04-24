import { JSX } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
    isAuth: boolean;
    children: JSX.Element;
}

const ProtectedRoute = ({ isAuth, children }: Props) => {
    return isAuth ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
