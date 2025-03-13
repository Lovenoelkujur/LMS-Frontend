/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

// Protected Route
export const ProtectedRoute = ({children}) => {
    const {isAuthenticated} = useSelector(store => store.auth);

    if(!isAuthenticated){
        return <Navigate to="/login" />
    }

    return children;
};

// Authenticat User 
export const AuthenticatedUser = ({children}) => {
    const {isAuthenticated} = useSelector(store => store.auth);

    if(isAuthenticated){
        return <Navigate to="/" />
    }

    return children;
};

// Authenticate Admin
export const AdminRoute = ({children}) => {
    const {user, isAuthenticated} = useSelector(store => store.auth);

    if(!isAuthenticated){
        return <Navigate to="/login" />
    }

    if(user?.role !== "instructor"){
        return <Navigate to="/" />
    }

    return children;
};