import { createSlice } from '@reduxjs/toolkit';
export const heart = createSlice({
  name : 'heart',
  initialState : ['❤', '🧡', '💛'],
  reducers : {
    addHeartColor(prevState){
      return[...prevState,'💚', '💙', '💜'];
    },
    changeHeartColor(){
      return ['💙', '💜', '🤍'];
    },
  }
});
export const {addHeartColor, changeHeartColor} = heart.actions;
export default heart.reducer