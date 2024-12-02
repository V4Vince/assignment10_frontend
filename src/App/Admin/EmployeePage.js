import React, { useEffect, useState } from 'react'
import { fetchAllEmployees } from './api'
import EmployeeTable from './EmployeeTable'
import { useDispatch, useSelector } from 'react-redux'
import { loadEmployees } from './employeeSlice'

export const EmployeePage = () => {
  //selects the employees slice of data
    const employees = useSelector(state => state.employeesSlice.employees)
    const dispatch = useDispatch()

    useEffect(() => {
      //fetches all employees from the database
        const getEmployees = async () => {
            const allUsers = await fetchAllEmployees()
            //filters the users to only include employees
            const filteredUsers = allUsers.filter(user => user.type === 'employee')
            //dispatches the loadEmployees action with the filtered users
            dispatch(loadEmployees(filteredUsers))
        }
        //calls the getEmployees function
        getEmployees()
    }, [])
  return (
    //renders the EmployeeTable component with the employees data
    <EmployeeTable employees={employees}/>
  )
}
