import React from 'react'
import { useAuth } from './authProvider'
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
  const { isLoggedIn } = useAuth();

  //checks user is an admin; returns true or false
  const adminRole = isLoggedIn.user.type === 'admin'
  
  if(!adminRole) {
    return <Navigate to="/job-listing" replace />
    
  }

    return <Outlet />
}

export default AdminRoute
