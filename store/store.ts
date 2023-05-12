import { configureStore, createSlice } from '@reduxjs/toolkit';
import { testSlice } from './test';
export const store = configureStore({
  reducer: {
  },
})
const initialState = {
  name: '아이유', // state 초기값
};

const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    
  },
});
export default configureStore({
  reducer: {
    person: personSlice.reducer,
    test: testSlice.reducer,
  },
});