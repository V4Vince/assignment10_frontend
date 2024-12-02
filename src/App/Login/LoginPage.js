import { Paper, Box, CardActions, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import TextInput from '../Input/TextInput';
import { userData } from '../../Utilities/siteData';
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../Utilities/authProvider";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import { createNewUser, signInUser } from "../../Utilities/api";

const LoginPage = () => {
    //auth status and set auth status from Auth Context provider /Utilities/authProvider
    const { isLoggedIn, actions} = useAuth();
    //controls the form that is displayed; can be login or signup
    const [currentForm, setCurrentForm] = useState('login')
        
    //Function to create a new user
    const handleSignUp = async (data) => {
        createNewUser(data).then(res => {
            actions.logUserIn(res.user)
        })
    }
    //Function to sign in a user
    const handleSignIn = async (data) => {
        signInUser(data).then(res => {
            
            actions.logUserIn(res.user)
        })
    }

    //If user is logged in, redirect to user-favorited-page
    if(isLoggedIn.loggedIn){
        return <Navigate to='/job-listing'/>
    }


    //Login Form UI
     return (
        <Box height="70vh" display="flex" justifyContent="center" alignItems={'center'}>
            {
                currentForm === 'login' ? 
                <SignInForm logUserIn={handleSignIn} handleNavigateToSignUp={() => setCurrentForm('signup')}/> : 
                <SignUpForm signUserUp={handleSignUp} handleNavigateToSignInPage={() => setCurrentForm('login')}/> }
        </Box>
       
    )
}

export default LoginPage


