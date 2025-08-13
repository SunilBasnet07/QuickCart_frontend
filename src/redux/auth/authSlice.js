import { createSlice } from "@reduxjs/toolkit";
import { signIn, signUp } from "./authAction";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    reducers: {
        logout:(state)=>{
            localStorage.removeItem("authToken");
            state.user=null;

        },
        updatedUser:(state,action)=>{
       
            state.user= action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signIn.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.user = null;
        }).addCase(signIn.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        }).addCase(signIn.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.user=null;
        }).addCase(signUp.pending,(state)=>{
            state.loading = true;
            state.error = null;
            state.user = null;
        }).addCase(signUp.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.error = null;
        }).addCase(signUp.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.user=null;
        })
    }
})
export const {logout,updatedUser}= authSlice.actions;
export default authSlice.reducer;