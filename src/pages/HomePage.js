import SearchBar from '../features/searchBar/SearchBar';
import AllVenues from '../features/venuesFrontPage/AllVenues';
import NoCityVenues from '../features/venuesFrontPage/NoCityVenues';
import getDataFromAPI from '../utility_functions/get_fetch';
import { useSelector } from "react-redux";
import {useState, useEffect} from 'react';
import { apiURL, clientID } from '../constants';

function HomePage({showNotification}){
    const defaultCity = 'new york';
    const {selectedCity, selectedState} = useSelector((state)=>state.currentCityAndStateReducer);
    const noVenuesFinded = useSelector((state)=>state.allCityVenuesReducer.cityVenues === 'No Venues Finded');
    const [defaultData, setDefaultData] = useState([]);       
    useEffect(()=>{
      (async() =>{
        const retreivedData = (await getDataFromAPI(apiURL+defaultCity+'&'+clientID));
        if (retreivedData.events){
          setDefaultData(retreivedData.events);
        }else{
          showNotification('Some error has occured. Check your internet connection or try again later...', 2000);
        }
        
      })();
    },[showNotification]);
    return(
      <>
        <section className='section1 divColumn'>
          <h1 className='h1_title'>Eventify</h1>
          <p className='sub-title'>The best night of your life is waiting.<br/>And we have the tickets.</p>
          <SearchBar showNotification={showNotification} />
        </section>
        <section className='section2 divColumn'>
          <p className='p_section2'>Upcoming Events</p>
          {(!noVenuesFinded)&&<h1 className='h1_section2'>{`${selectedCity}, ${selectedState}`}</h1>}
        </section>
        <hr className='horizontalLine'/>
        {(noVenuesFinded)?<NoCityVenues />:<AllVenues defaultData={defaultData} />}
      </>
    )
}
export default HomePage;