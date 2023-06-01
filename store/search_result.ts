import { createSlice } from "@reduxjs/toolkit";

export const searchText = createSlice({
    name: "searchText",
    initialState : "",
    reducers : {
      setSearchText(state,action){
        return state = action.payload
      }
    }
  })
  export const {setSearchText} = searchText.actions;
  export default searchText.reducer