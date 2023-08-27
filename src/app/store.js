import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { starWarriorsApi } from '../services/starWarriorsApi';
import authReducer from '../services/authSlice';

export const store = configureStore({
    reducer: {
        [starWarriorsApi.reducerPath]: starWarriorsApi.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(starWarriorsApi.middleware)
});

setupListeners(store.dispatch);