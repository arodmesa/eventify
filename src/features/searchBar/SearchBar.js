import './SearchBar.css';
import { useSelector, useDispatch } from "react-redux";
import { changeSearchBarText } from "./searchBarSlice";
import getDataFromAPI from '../../utility_functions/get_fetch';
import { saveCityVenues } from "../venuesFrontPage/allCityVenuesSlice";
import { changeCityAndState } from "../venuesFrontPage/currentCityAndStateSlice";
import { apiURL, clientID } from '../../constants';

function SearchBar ({showNotification}){
    const searchVenues = async ()=>{
        let fetchedData = await getDataFromAPI(apiURL+displayedText+`&${clientID}`); 
        if (!fetchedData.errorInFetch && fetchedData.events.length > 0){
            fetchedData = fetchedData.events;
            dispatch(saveCityVenues(fetchedData));
            dispatch(changeCityAndState({selectedCity: fetchedData[0].venue.city, selectedState: fetchedData[0].venue.state}))
        }else{
            const text = fetchedData.errorInFetch??"We can't find your city, check the spell. (Only US and Canada cities are allowed).";
            dispatch(saveCityVenues('No Venues Finded'));
            showNotification(text, 3000)
        }      
    }
    const displayedText = useSelector((state) => state.searchBarReducer.inputText);
    const dispatch = useDispatch();
    return (
        <div className="rowDiv bordered">
            <i className="fa fa-search" />
            <input className='searchInput' type='text' placeholder="Type your city here..." onKeyDown={(event)=>{if(event.key === 'Enter'){searchVenues()}}} onChange={(event)=>dispatch(changeSearchBarText(event.target.value))} value={displayedText}></input>
        </div>
    )
}
export default SearchBar;