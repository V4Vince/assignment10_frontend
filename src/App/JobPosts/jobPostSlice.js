import { createSlice } from '@reduxjs/toolkit'

export const jobPostSlice = createSlice({
  name: 'jobPostSlice',
  initialState: {
    jobPosts: [],
  },
  reducers: {
    loadJobPosts: (state, action) => {
      state.jobPosts = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { loadJobPosts } = jobPostSlice.actions

export default jobPostSlice.reducer