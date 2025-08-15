
import api from "./api";


const getAllOrders = async () => {
    const response = await api.get(`/api/orders?sort={createdAt:1}`);
    return response?.data
}
const createOrder = async (data) => {
    const response = await api.post(`/api/orders`, data);
    return response?.data
}
const getOrderByUser = async (status="pending") => {
    const statused = status || "pending"
    const response = await api.get(`/api/orders/user?status=${statused}`);
    return response.data;
}
const deleteOrder = async (orderId) => {
    const response = await api.delete(`/api/orders/${orderId}`);
    return response.data;
}
const checkoutOrder = async (orderId, data) => {
    const response = await api.put(`/api/orders/${orderId}/checkout`, data);
    return response;
}
const confirmOrder = async (id, data) => {
   
    const response = await api.put(`/api/orders/${id}/confirm`, data);
    return response;
}
const updateOrderByStatus = async (id,data) => {
    const response = await api.put(`/api/orders/status/${id}`, data);
    return response;
}



export { getAllOrders, createOrder, getOrderByUser, checkoutOrder, confirmOrder, updateOrderByStatus,deleteOrder }