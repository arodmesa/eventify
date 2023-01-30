import { createSlice } from "@reduxjs/toolkit";

const allCityVenuesSlice = createSlice({
    name: 'venues',
    initialState: {cityVenues: []},
    reducers:{
        saveVenues(state, action) {
            state.cityVenues = action.payload;
        }
    }
})

export const saveCityVenues = allCityVenuesSlice.actions.saveVenues;
export default allCityVenuesSlice.reducer;