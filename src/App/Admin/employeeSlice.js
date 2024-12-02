import { createSlice } from '@reduxjs/toolkit'

export const employeeSlice = createSlice({
  name: 'employeeSlice',
  initialState: {
    employees: [],
  },
  reducers: {
    loadEmployees: (state, action) => {
      state.employees = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { loadEmployees } = employeeSlice.actions

export default employeeSlice.reducer