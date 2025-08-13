import api from "./api";

const uploadProfile = async (data) => {
    console.log(data)
    const response = await api.put(`/api/users/profile/upload`, data);
    return response?.data
}
const editProfile = async (id,data) => {

   
    const response = await api.put(`/api/users/${id}`, data);
    return response?.data
}
const getUserById = async (id) => {
    console.log(id)
    const response = await api.get(`/api/users/${id}`);
    return response?.data
}
export {uploadProfile,getUserById,editProfile}