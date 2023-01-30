import '../venuesFrontPage/AllVenues.css';
import './FavouriteVenues.css';
import { useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';
import GridOfComponents from "../venuesFrontPage/GridOfComponents";
import transformDataToArrayOfVenueComponents from "../../utility_functions/transformDataToArrayOfVenueComponents";
function FavoriteVenues(){
    const navigate = useNavigate();
    const likedVenues = useSelector((state)=>state.likedVenuesReducer.likedVenues);
    const likedVenuesArray = Object.values(likedVenues);
    const arrayOfLikedVenues = transformDataToArrayOfVenueComponents(likedVenuesArray);
    const noFavouriteVenues = 
        <div className="divColumn divNoFavourite">
            <h1 className="h1_nothingSelected">NOTHING SELECTED YET</h1>
            <button className="returnBtn" onClick={()=>navigate('/')}>GO BACK</button>
        </div>;
    return (
        ((arrayOfLikedVenues.length === 0)?noFavouriteVenues: <GridOfComponents arrayOfComponents={arrayOfLikedVenues} />)             
    )
}
export default FavoriteVenues;