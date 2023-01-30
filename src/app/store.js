import { configureStore} from "@reduxjs/toolkit";
import searchBarReducer from '../features/searchBar/searchBarSlice';
import allCityVenuesReducer from '../features/venuesFrontPage/allCityVenuesSlice';
import likedVenuesReducer from '../features/venuesFrontPage/likedVenuesSlice';
import currentCityAndStateReducer from '../features/venuesFrontPage/currentCityAndStateSlice';

const store = configureStore({
    reducer: {
        searchBarReducer,
        allCityVenuesReducer,
        likedVenuesReducer,
        currentCityAndStateReducer
    }
})

export default store;
