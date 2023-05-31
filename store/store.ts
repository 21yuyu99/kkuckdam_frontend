import { configureStore, createSlice } from '@reduxjs/toolkit';
import { heart } from './test';
import { readSummary } from './detail';
import { bottomState } from './bottomBar';
import { reviewText, toggleState } from './library';

export const store = configureStore({
  reducer: {
    heart : heart.reducer,
    readSummary : readSummary.reducer,
    bottomState : bottomState.reducer,
    toggleState : toggleState.reducer,
    reviewText : reviewText.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch