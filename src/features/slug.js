import { create, createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", age: 0, email: ""};

export const slugSlice = createSlice({
    name: "slug",
    initialState: { value: {id: 0, name: "", slug:"", description: "", status: false}},
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = initialStateValue;
        },
    },
});

export const { login } = slugSlice.actions;
export const { logout } = slugSlice.actions;

export default slugSlice.reducer; 