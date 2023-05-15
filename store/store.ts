import { configureStore, createSlice } from '@reduxjs/toolkit';
import { heart } from './test';
import { readSummary } from './detail';

export const store = configureStore({
  reducer: {
    heart : heart.reducer,
    readSummary : readSummary.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch