import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import emailReducer from '../features/emailSlice';
import rememberReducer from '../features/rememberSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    email: emailReducer,
    remember: rememberReducer,
  },
});
