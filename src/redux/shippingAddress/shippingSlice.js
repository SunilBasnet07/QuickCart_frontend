const { createSlice } = require("@reduxjs/toolkit");

const shippingSlice = createSlice({
    name:"shipping",
    initialState:{
        address:{},
    },
    reducers:{
        shippingAddress:(state,action)=>{
            state.address= action.payload;
        },
        clearAddres:(state)=>{
         state.address={};
        }
    },
    
})
export const {shippingAddress,clearAddres}= shippingSlice.actions;
export default shippingSlice.reducer;