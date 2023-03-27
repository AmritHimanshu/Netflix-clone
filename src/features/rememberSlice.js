import { createSlice } from '@reduxjs/toolkit';

export const rememberSlice = createSlice({
    name: 'remember',
    initialState: {
        remember: false,
        cost: null,
    },
    reducers: {
        rememberMe: (state) => {
            state.remember = true;
        },
        rememberMeNot: (state) => {
            state.remember = false;
        },
        setCost: (state, action) => {
            state.cost = action.payload.cost;
        },
        unsetCost: (state) => {
            state.cost = null;
        },
    },
});

export const { rememberMe, rememberMeNot, setCost, unsetCost } = rememberSlice.actions;

export const selectRemember = (state) => state.remember.remember;
export const selectCost = (state) => state.remember.cost;

export default rememberSlice.reducer;