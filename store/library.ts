import { createSlice } from '@reduxjs/toolkit';
export const toggleState = createSlice({
  name : 'toggleState',
  initialState : 'library',
  reducers : {
    changeToggleState(state,action){
        return state = action.payload
    }
  }
});
export const reviewText = createSlice({
  name: "reviewText",
  initialState : "",
  reducers : {
    setReviewText(state,action){
      return state = action.payload
    }
  }
})
export const {changeToggleState} = toggleState.actions;
export const {setReviewText} = reviewText.actions;
export default toggleState.reducer