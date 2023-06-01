import { configureStore } from '@reduxjs/toolkit';
import { heart } from './test';
import { readSummary } from './detail';
import { bottomState } from './bottomBar';
import { reviewText, toggleState } from './library';
import { searchText } from './search_result';

export const store = configureStore({
  reducer: {
    heart : heart.reducer,
    readSummary : readSummary.reducer,
    bottomState : bottomState.reducer,
    toggleState : toggleState.reducer,
    reviewText : reviewText.reducer,
    searchText : searchText.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch