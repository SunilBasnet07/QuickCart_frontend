import { login, register } from "@/api/auth";
import  { createAsyncThunk } from"@reduxjs/toolkit";

const signIn = createAsyncThunk("auth/login",async(data,{rejectWithValue})=>{
try {
    const response = await login(data);
    localStorage.setItem("authToken",response.data?.token)
    return response.data;
} catch (error) {
    return rejectWithValue(error || "Login Failed")
}
})

const signUp=createAsyncThunk("auth/register",async(data,{rejectWithValue})=>{
  try {
    const response = await register(data);
    localStorage.setItem("authToken",response.data?.token)
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Register Failed")
  }
})

export {signIn,signUp}