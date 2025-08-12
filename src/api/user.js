import api from "./api";

const uploadProfile = async (data) => {
    const response = await api.put(`/api/users/profile/upload`, data);
    return response?.data
}
export {uploadProfile}