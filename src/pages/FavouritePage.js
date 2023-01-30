import './FavouritePage.css';
import FavoriteVenues from "../features/favouriteVenues/FavouriteVenues";
function FavoritePage(){
    return(
        <div className="divColumn">
            <div className="organizeTitle">
                <div className='h1Background'>
                    <h1 className="h1_title h1_favourite">Your<br/>favourite<br/>Venues</h1>
                </div>                
            </div>
                <FavoriteVenues />
        </div>
    )
}
export default FavoritePage;