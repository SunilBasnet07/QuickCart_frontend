import formatterParams from "@/helper/getFormatterParams";
import api from "./api";

const uploadProfile = async (data) => {
    const response = await api.put(`/api/users/profile/upload`, data);
    return response?.data
}
const editProfile = async (id,data) => {
const response = await api.put(`/api/users/${id}`, data);
    return response?.data
}
const getUserById = async (id) => {
 const response = await api.get(`/api/users/${id}`);
    return response?.data
}
const getAllUsers = async (searchParams={}) => {
  
    // const query = formatterParams(searchParams);
    
        const query = searchParams? `filters=${searchParams}`: '';
  
    // const query = searchParams || {};
    
    const response = await api.get(`/api/users?${query}`);
    return response?.data

}
const deleteUser = async (id) => {
    const response = await api.delete(`/api/users/${id}`);
       return response?.data
   }
   const createUser  = async (data) => {
    const response = await api.post(`/api/users`,data);
       return response?.data
   }

export {uploadProfile,getUserById,editProfile,getAllUsers,deleteUser,createUser}