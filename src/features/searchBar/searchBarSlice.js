import { createSlice } from "@reduxjs/toolkit";

const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState:{inputText: ''},
    reducers:{
        changeText(state, action){
            state.inputText = action.payload
        }
    }
})
export const changeSearchBarText = searchBarSlice.actions.changeText;
export default searchBarSlice.reducer;