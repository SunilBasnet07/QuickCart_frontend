const { createSlice } = require("@reduxjs/toolkit");

const orderSlice = createSlice({
    name: "order",
    initialState: {
        status: null,
    },
    reducers: {
        setOrderStatus: (state, action) => {
            state.status = action.payload;
        }
    }
})
export default orderSlice.reducer;
export const {setOrderStatus}= orderSlice.actions;