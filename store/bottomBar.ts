import { PayloadAction, createSlice } from '@reduxjs/toolkit';
export const bottomState = createSlice({
  name : 'bottomState',
  initialState : 'home',
  reducers : {
    changeBottomState(state,action:PayloadAction<string>){
        return state = action.payload;
    }
  }
});
export const {changeBottomState} =  bottomState.actions;
export default bottomState.reducer