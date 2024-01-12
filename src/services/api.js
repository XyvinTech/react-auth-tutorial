import withTokenInstance from "./axiosInstances";

export const getUserData = async () => {
    try {
        withTokenInstance.get(`/api/users`)   //baseurl is already attached with instance so does the headers
    } catch (error) {
        console.error(error)
    }
}