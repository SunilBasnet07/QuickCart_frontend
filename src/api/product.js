
import { apiBaseUrl } from "@/config/apiUrl";

import axios from "axios";
import api from "./api";

const getAllProducts = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}/api/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    // Return an empty array as fallback to prevent the component from crashing
    return [];
  }
};

const getProductById = async (id) => {
  try {
    const response = await axios.get(`${apiBaseUrl}/api/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    return null;
  }
};

const addProduct = async (data) => {
  
  const response = await api.post(`/api/products`, data);
  return response.data;
};
const deleteProduct = async (id) => {
  const response = await api.delete(`/api/products/${id}`)
  return response.data;
}
const updateProduct = async (id,data) => {
  const response = await api.put(`/api/products/${id}`,data)
  return response.data;
}

export { getAllProducts, getProductById, addProduct, deleteProduct,updateProduct };