import axios from 'axios'
import { accessKey } from './credentials';


export const siteAxios = axios.create({
    baseURL: 'http://localhost:3000'
});
//Axios request to unsplash API for images
export const fetchImagesFromAPI = async () => {
    const response = await siteAxios.get(`https://api.unsplash.com/photos/?client_id=${accessKey}`)
    console.log("RESPONSE", response);

    return response.data
} 

export const createNewUser = async (data) => {
    const response = await siteAxios.post(`http://localhost:3000/users/create`, data)
    console.log("CREATE NEW USER RESPONSE", response);

    return response.data
}

export const signInUser = async (credentials) => {
    const response = await siteAxios.post(`http://localhost:3000/users/sign-in`, credentials)
    console.log("SIGN IN USER RESPONSE", response);

    return response.data
}