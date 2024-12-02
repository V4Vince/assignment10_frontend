import { useAuth } from './authProvider';
import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';

// const PrivateRoute = ({children, redirectTo }) => {
//     const {isLoggedIn, actions} = useAuth()
//     if(!isLoggedIn.loggedIn) {
//         console.log("NOT LOGGED IN");
//     }
//     //If the user is logged in, then allow navigation
//     //If user is not logged in, then redirect to sign in page
//     return isLoggedIn.isLoggedIn ? children : <Navigate to='/home'  /> 
// }

// export default PrivateRoute
const ProtectedRoute = () => {
    const { isLoggedIn } = useAuth();

    if(!isLoggedIn.loggedIn) {
        return <Navigate to="/home" replace />
    }

    return <Outlet />
};

export default ProtectedRoute;