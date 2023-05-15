import { createSlice } from '@reduxjs/toolkit';
export const readSummary = createSlice({
  name : 'readSummary',
  initialState : false,
  reducers : {
    changeSummaryState(prevState){
        return !prevState
    }
  }
});
export const {changeSummaryState} = readSummary.actions;
export default readSummary.reducer