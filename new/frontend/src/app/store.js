import { configureStore } from '@reduxjs/toolkit';
import goalReducer from '../features/goals/goalSlice'

export const store = configureStore({
  reducer: {
    globalThis: goalReducer
  },
});
