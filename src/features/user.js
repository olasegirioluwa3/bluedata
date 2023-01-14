import { create, createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", age: 0, email: ""};

export const userSlice = createSlice({
    name: "user",
    initialState: { value: { name: "", age: 0, email: "hi@gmail.com"}},
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = initialStateValue;
        },
    },
});

export const { login } = userSlice.actions;
export const { logout } = userSlice.actions;

export default userSlice.reducer; 