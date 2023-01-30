import { createSlice } from "@reduxjs/toolkit";

const currentCityAndStateSlice = createSlice({
    name: 'CityAndState',
    initialState: {selectedCity: 'New York', selectedState: 'NY'},
    reducers:{
        updateCityAndState(state, action){
            state.selectedCity = action.payload.selectedCity;
            state.selectedState = action.payload.selectedState
        }
    }
})
export const changeCityAndState = currentCityAndStateSlice.actions.updateCityAndState;
export default currentCityAndStateSlice.reducer;