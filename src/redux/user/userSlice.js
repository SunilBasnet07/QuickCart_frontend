const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: "user",
    initialState: {
        status: null,
    },
    reducers: {
        setUserStatus: (state, action) => {
            state.status = action.payload;
        }
    }
})
export default userSlice.reducer;
export const {setUserStatus}= userSlice.actions;