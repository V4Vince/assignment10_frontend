import { siteAxios } from "../../Utilities/api";

export const getAllJobPosts = async () => {
    try {
        const res = await siteAxios.get('/jobs')

        // console.log("RESPONSE DATA IN API", res.data)
        return res.data.jobs
    } catch (error) {
        console.log(error)
    }
}

export const createNewJobPost = async (jobPost) => {
    try {
        const res = await siteAxios.post('/jobs', jobPost)
        return res.data.job
    } catch (error) {
        console.log(error)
    }
}

export const updateUserFavoriteJobs = async (userId, favoritedJobs) => {
    try {
        const res = await siteAxios.patch(`/users/${userId}`, favoritedJobs)

        return res.data.user
    } catch (error) {
        console.log(error)
    }
}