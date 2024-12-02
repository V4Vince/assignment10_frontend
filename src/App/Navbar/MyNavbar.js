import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
import { useAuth } from '../../Utilities/authProvider';

export default function MyNavbar() {

  const {isLoggedIn, actions} = useAuth()

  const handleLogOut = () => {
    actions.logUserOut()
    // jobActions.resetFavoriteJobs()
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <Button sx={{ flexGrow: 1 }} variant="outline" to="/Job-Listing" 
          component={NavLink} 
          className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
            Job Listings
          </Button>

          {/* <Button sx={{ flexGrow: 1 }} variant="outline" to="/user-favorited-page" 
            component={NavLink} 
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
              Favorited Jobs
            </Button>  */}
            {
              isLoggedIn?.user?.type === 'admin' && 
              <Button 
                sx={{ flexGrow: 1 }} variant="outline" to="/employees" 
                component={NavLink} 
                className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                  Employees
              </Button>
            } 

          <Button variant="outline" to="/company-showcase" 
          component={NavLink} 
          className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
            Campanies
          </Button>

          <Button variant="outline" to="/contact" 
          component={NavLink} 
          className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
            Contact
          </Button>

          <Button variant="outline" to="/about" 
          component={NavLink} 
          className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
            About
          </Button>

          {/* Log in/log out button depending on loggeds in status */}
          {
            isLoggedIn.loggedIn ? <Button variant="outline" 
            className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} onClick={handleLogOut}>
              Log Out
            </Button> : <Button variant="outline" to="/home" 
          component={NavLink} 
          className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
            Log In
          </Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}