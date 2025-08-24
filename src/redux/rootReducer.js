import authReducer from "@/redux/auth/authSlice"
import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "@/redux/cart/cartSlice"
import orderReducer from "@/redux/order/orderSlice"
import wishListReducer from "@/redux/wish/wishListSlice"
import userReducer from "@/redux/user/userSlice"
import shippingReducer from "@/redux/shippingAddress/shippingSlice"


const rootReducer= combineReducers({
    auth:authReducer,
    cart:cartReducer,
    order:orderReducer,
    user:userReducer,
    shipping:shippingReducer,
    wish:wishListReducer,
})
export default rootReducer;