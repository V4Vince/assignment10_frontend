import { siteAxios } from "../../Utilities/api";

export const getAllCompanies = async () => {
    try {
        const res = await siteAxios.get('/companies')

        console.log("GET ALL COMPANIES IN API", res.data)
        return res.data.companies
    } catch (error) {
        console.log(error)
    }
}

export const createNewCompany = async (data) => {
    try {
        const res = await siteAxios.post('/companies', data)

        console.log("CREATE NEW COMPANY RESPONSE", res.data)
        return res.data.companies
    } catch (error) {
        console.log(error)
    }
}