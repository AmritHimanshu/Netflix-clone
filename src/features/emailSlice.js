import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: null,
    password: null,
};

export const emailSlice = createSlice({
    name: 'email',
    initialState,
    reducers: {
        currentEmail: (state,action) => {
            state.email = action.payload.email;
        },
        currentPassword: (state, action) => {
            state.password = action.payload.password;
        },
    },
});

export const { currentEmail, currentPassword } = emailSlice.actions;
export const selectCurrentEmail = (state) => state.email.email;
export const selectCurrentPassword = (state) => state.email.password;

export default emailSlice.reducer;