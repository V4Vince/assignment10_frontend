import { siteAxios } from "../../Utilities/api";

export const fetchAllEmployees = async () => {
    try {
        const res = await siteAxios.get('/users/getAll')
        console.log("GET ALL USERS AXIOS REQUEST", res.data);
        
        return res.data
    } catch (error) {
        console.log(error)
    }
}