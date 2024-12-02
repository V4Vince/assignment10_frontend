import { Button, CardActions, Paper, Typography } from '@mui/material'
import TextInput from '../Input/TextInput'
import React, { useState } from 'react'

function SignUpForm({signUserUp, isEmailValid, isPasswordValid, handleNavigateToSignInPage}) {
  
    const [signUpForm, setSignUpForm] = useState({fullName: '', email: '', password: '', confirmPassword: ''})
    const [isValid, setIsValid] = useState({email: false, confirmPassword: false})
    
    const  handleChange = (e, field) => {
        
        setSignUpForm({...signUpForm, [field]: e.target.value})

        if(field === 'email'){
            const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const isEmailValid = emailRegex.test(e.target.value)
            setIsValid({...isValid, email: isEmailValid})
        }
        if(field === 'confirmPassword'){
            const isConfirmPWValid = e.target.value === signUpForm.password
            setIsValid({...isValid, confirmPassword: isConfirmPWValid})
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signUserUp(signUpForm)
    }

    return (
        <form onsubmit={handleSubmit}>
    <Paper elevation={10} sx={{ maxWidth: 275, paddingX: 2, paddingBottom: 2}}>
               
               <Typography textAlign={'center'} variant={"h5"} marginY={2}>Sign Up for an account</Typography>
                <TextInput textLabel="Fullname" value={signUpForm.fullName} type="text" onChange={e => handleChange(e, 'fullName')}/>

                <TextInput textLabel="Email" type="email" value={signUpForm.email} onChange={e => handleChange(e, 'email')} error={!isValid.email}/>
                <TextInput textLabel="Password" type="password" value={signUpForm.password}  onChange={e => handleChange(e, 'password')} />
                <TextInput textLabel="Confirm Password" type="password" value={signUpForm.confirmPassword} error={!isValid.confirmPassword} onChange={e => handleChange(e, 'confirmPassword')} />
                <Typography variant="caption" color="error" display="block" textAlign="center">
                    {isValid.confirmPassword ? '' : 'Passwords do not match'}</Typography>
                <CardActions display='flex'>
                    <Button fullWidth onClick={handleSubmit}>Sign Up</Button>
                    <Button fullWidth onClick={handleNavigateToSignInPage}>Sign in instead</Button>
                </CardActions>
               
            </Paper>
            </form>
  )
}

export default SignUpForm