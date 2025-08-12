import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        totalPrice: 0,
      
    },
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingProduct = state.products.find((item) => item.id == product.id);
            if (existingProduct) {
                state.products = state.products.map((item) => item.id == product.id ? { ...item, quantity: item.quantity + 1, } : item )
                 state.totalPrice =state.totalPrice + product.price
            } else {

                state.products = [...state.products, { ...product, quantity: 1 }]
                state.totalPrice = state.totalPrice + product.price
            }

        },
        // selectedToCart: (state, action) => {
        //     const product = action.payload;
        //     const existingProduct = state.products.find((item) => item.id == product.id);
        //     if (existingProduct) {
        //         state.products = state.products.map((item) => item.id == product.id ? { ...item, quantity: item.quantity + 1, } : item )
        //          state.totalPrice =state.totalPrice + product.price
        //     } else {

        //         state.products = [...state.products, { ...product, quantity: 1 }]
        //         state.totalPrice = state.totalPrice + product.price
        //     }

        // },
        increasmentQuantity:(state,action)=>{
            const product = action.payload;
            const existingProduct =state.products.find((item)=>item.id == product.id)
            if(existingProduct){
                state.products =state.products.map((item)=> item.id == product.id ? {...item,quantity:item.quantity+1}:item)
                state.totalPrice = state.totalPrice + product.price
               
            }
        },
        decreasmentQuantity:(state,action)=>{
            const product = action.payload;
            const existingProduct =state.products.find((item)=>item.id == product.id)
            if(existingProduct){
                state.products =state.products.map((item)=> item.id == product.id ? {...item,quantity:item.quantity-1}:item)
                state.totalPrice = state.totalPrice - product.price
            }
        },
        removeProduct:(state,action)=>{
            const product = action.payload;
            state.products = state.products.filter((item)=> item.id != product.id)
            state.totalPrice =state.totalPrice -product.price*product.quantity;
        },
        clearCart:(state)=>{
            state.products = [];
            state.totalPrice= 0;
        }


    }
})
export const { addToCart,increasmentQuantity,decreasmentQuantity,removeProduct,selectedToCart,clearCart } = cartSlice.actions;
export default cartSlice.reducer;