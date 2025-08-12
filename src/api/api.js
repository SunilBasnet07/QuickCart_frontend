import { apiBaseUrl } from "@/config/apiUrl"
import authToken from "@/config/token"
import axios from "axios"

const api = axios.create({
    baseURL: apiBaseUrl,
    headers:{
        Authorization:`Bearer ${authToken}`
    }
})
export default api;