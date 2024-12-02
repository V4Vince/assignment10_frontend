import { Box, Button, CardActions, Paper, Typography } from '@mui/material'
import TextInput from '../Input/TextInput'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { createNewCompany } from './api'

const NewCompanyForm = ({signUserUp, isEmailValid, isPasswordValid, handleNavigateToSignInPage}) => {
  
    const [companyForm, setCompanyForm] = useState({name: "", description: "", })
    // const [isValid, setIsValid] = useState({email: false, confirmPassword: false})
    const navigate = useNavigate();
    const location = useLocation(); 
    
    
    const  handleChange = (e, field) => {
        //Grabs the user ID from the location state
        const userId = location.state.userId
        //Updates the company form state with the new value
        setCompanyForm({...companyForm, [field]: e.target.value, userId: userId})
    }

    const handleSubmit = async () => {
        createNewCompany(companyForm).then(() => navigate('/company-showcase'))
    };

    const handleCancel = () => navigate('/company-showcase');
    
console.log("LOCATION:", location);

    return (
    <Box display={'flex'} justifyContent={'center'} mt={5}>
        <Paper elevation={10} sx={{ maxWidth: 275, paddingX: 2, paddingBottom: 2}}>
                <Typography textAlign={'center'} variant={"h5"} marginY={2}>Create a new company</Typography>
                <TextInput textLabel="Company name" value={companyForm.name} type="text" onChange={e => handleChange(e, 'name')}/>

                <TextInput textLabel="Description"  type="text" value={companyForm.description} onChange={e => handleChange(e, 'description')} />
                <CardActions display='flex'>
                    <Button fullWidth onClick={handleSubmit}>create</Button>
                    <Button fullWidth onClick={handleCancel}>cancel</Button>
                </CardActions>
            </Paper>
    </Box>
  )
}

export default NewCompanyForm