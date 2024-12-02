import { Button, CardActions, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import TextInput from '../Input/TextInput'

function SignInForm({logUserIn, handleNavigateToSignUp}) {
    const [signInForm, setSignInForm] = useState({email: '', password: ''})
    const [isValid, setIsValid] = useState(false)

    const handleChange = (e, field) => {
        setSignInForm({...signInForm, [field]: e.target.value})
        if(field === 'email'){
            const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const isEmailValid = emailRegex.test(e.target.value)
            setIsValid(isEmailValid)
        }

    }

    const handleSubmit = () => logUserIn(signInForm)
  
    return (
    <Paper elevation={10} sx={{ maxWidth: 275, paddingX: 2, paddingBottom: 2}}>
 
                <Typography textAlign={'center'} variant={"h5"} marginY={2}>Sign In</Typography>
                <TextInput textLabel="Email" type="email" onChange={e => handleChange(e, 'email')} error={!isValid}/>
                <TextInput textLabel="Password" type="password" onChange={e => handleChange(e, 'password')}/>
                <CardActions display='flex'>
                    <Button fullWidth onClick={handleSubmit}>Login</Button>
                    <Button fullWidth onClick={handleNavigateToSignUp}>Sign up instead</Button>
                </CardActions>
            </Paper>
  )
}

export default SignInForm