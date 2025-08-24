const { createSlice } = require("@reduxjs/toolkit");

const wishListSlice = createSlice({
    name:"wish",
    initialState:{
        iswished:false,
        lists:[],
    },
    reducers:{
        addWishList:(state,action)=>{
          const product= action.payload; 
          console.log(product)
            state.lists= [...state.lists , product]
            state.iswished=true
        }
    } 
})
export const {addWishList}= wishListSlice.actions;
export default wishListSlice.reducer;