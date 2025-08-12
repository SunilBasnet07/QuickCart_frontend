import authReducer from "@/redux/auth/authSlice"
import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "@/redux/cart/cartSlice"
import orderReducer from "@/redux/order/orderSlice"
import shippingReducer from "@/redux/shippingAddress/shippingSlice"


const rootReducer= combineReducers({
    auth:authReducer,
    cart:cartReducer,
    order:orderReducer,
    shipping:shippingReducer
})
export default rootReducer;