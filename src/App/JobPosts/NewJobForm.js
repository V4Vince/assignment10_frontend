import { Box, Button, CardActions, FormControl, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material'
import TextInput from '../Input/TextInput'
import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { createNewCompany, createNewJobPost } from './api'
import { useCompanies } from '../../Utilities/companiesProvider'

const NewJobForm = () => {
  
    const [jobForm, setJobForm] = useState({title: "", description: "", salary: "", applyLink: "", requiredSkills: [], companyId: ""})
    // const [isValid, setIsValid] = useState({email: false, confirmPassword: false})
    const navigate = useNavigate();
    const location = useLocation(); 
    const {companies, actions} = useCompanies()
    
    const  handleChange = (e, field) => {
        //Grabs the user ID from the location state
        const userId = location.state.userId
        //Updates the company form state with the new value
        setJobForm({...jobForm, [field]: e.target.value, userId: userId})
    }

    const handleSubmit = async () => {
        console.log("JOB FORM:", jobForm);
        
        createNewJobPost(jobForm).then(() => navigate('/job-listing'))
        
    };

    console.log("COMPANIES:", companies);
    

    const handleCancel = () => navigate('/job-listing');
    
    return (
    <Box display={'flex'} justifyContent={'center'} mt={5}>
        <Paper elevation={10} sx={{ maxWidth: 275, paddingX: 2, paddingBottom: 2}}>
                <Typography textAlign={'center'} variant={"h5"} marginY={2}>Create New Job post</Typography>
                <TextInput textLabel="Job Title" value={jobForm.title} type="text" onChange={e => handleChange(e, 'title')}/>
                <TextInput textLabel="Description" value={jobForm.description} type="text" onChange={e => handleChange(e, 'description')}/>
                <TextInput textLabel="Salary" value={jobForm.salary} type="text" onChange={e => handleChange(e, 'salary')}/>
                <TextInput textLabel="Apply Link" value={jobForm.applyLink} type="text" onChange={e => handleChange(e, 'applyLink')}/>
                <TextInput textLabel="Required Skills" value={jobForm.requiredSkills} type="text" onChange={e => handleChange(e, 'requiredSkills')}/>
                <FormControl sx={{minWidth: 1}}>
                <InputLabel id="company-select">Company</InputLabel>
                <Select
                    autoWidth
                    label="Company"
                    labelId="company-select"
                    value={jobForm.companyId}
                    onChange={e => handleChange(e, 'companyId')}
                >
                    {companies.map(company => (
                        
                        <MenuItem key={company._id} value={company._id}>
                            {company.name}
                        </MenuItem>
                    ))}
                </Select>
                </FormControl>
                <CardActions display='flex'>
                    <Button fullWidth onClick={handleSubmit}>create</Button>
                    <Button fullWidth onClick={handleCancel}>cancel</Button>
                </CardActions>
            </Paper>
    </Box>
  )
}

export default NewJobForm