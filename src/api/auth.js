const { apiBaseUrl } = require("@/config/apiUrl")
const { default: axios } = require("axios")

const login = async(data)=>{
    const response = await axios.post(`${apiBaseUrl}/api/auth/login`,data);
    return response;
}
const register = async(data)=>{
    console.log(data);
    const response = await axios.post(`${apiBaseUrl}/api/auth/register`,data);
    return response;
}
export {login,register}