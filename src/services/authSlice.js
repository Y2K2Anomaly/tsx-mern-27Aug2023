import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: '',
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearAuth: (state) => {
            state.token = '';
            state.user = null;
        },
    },
});

export const { setToken, setUser, clearAuth } = authSlice.actions;

export default authSlice.reducer;
