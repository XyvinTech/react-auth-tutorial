import withTokenInstance from "./axiosInstances";

export const getUserData = async () => {
    try {
        await withTokenInstance.get(`/api/users`)   //baseurl is already attached with instance ,so does the headers+token
    } catch (error) {
        console.error(error)
    }
}