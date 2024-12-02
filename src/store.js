import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./App/Admin/employeeSlice";
import companyReducer from "./App/Company/companySlice";
import jobPostReducer from "./App/JobPosts/jobPostSlice";

//By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state.
export default configureStore({
    reducer: {
        employeesSlice: employeeReducer,
        companiesSlice: companyReducer,
        jobPostsSlice: jobPostReducer
    }
});