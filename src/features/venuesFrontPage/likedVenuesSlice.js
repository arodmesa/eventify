import { createSlice } from "@reduxjs/toolkit";

const likedVenuesSlice = createSlice({
    name: 'likedVenues',
    initialState: {likedVenues: {}},
    reducers: {
        clickLikeVenue(state, action){
            const {venueID, venueInfo} = action.payload;
            if (state.likedVenues[venueID]){
                delete state.likedVenues[venueID]
            }else{
                state.likedVenues[venueID] = venueInfo;
            }

        }
    }
})

export const clickLikeVenue = likedVenuesSlice.actions.clickLikeVenue;
export default likedVenuesSlice.reducer;