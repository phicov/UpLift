import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice'
import forumReducer from '../features/forums/forumSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    forums: forumReducer,
  },
});
