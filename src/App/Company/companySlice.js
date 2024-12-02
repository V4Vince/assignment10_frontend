import { createSlice } from '@reduxjs/toolkit'

export const companySlice = createSlice({
  name: 'companySlice',
  initialState: {
    companies: [],
  },
  reducers: {
    loadCompanies: (state, action) => {
      state.companies = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { loadCompanies } = companySlice.actions

export default companySlice.reducer