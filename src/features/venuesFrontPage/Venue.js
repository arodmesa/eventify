import './Venue.css';
import { useSelector, useDispatch } from "react-redux";
import { clickLikeVenue } from "./likedVenuesSlice";
function Venue({imageURL, venueName, venueCenterAndDate, price, city, ticketURL, venueID}){
    const isPhotoLiked = useSelector((state)=>state.likedVenuesReducer.likedVenues[venueID])
    const dispatch = useDispatch();
    return (
        <a className='ticketLink' href={ticketURL} target='_blank' rel="noreferrer">
            <div className="divColumn divVenue">
                <div className='divImage'>
                    <img className='venueImage' src={imageURL} alt='Venue'></img>
                    <i className={`fa fa-heart ${isPhotoLiked?'liked':''}`} aria-hidden="true" onClick = {(event)=>{
                        event.preventDefault();
                        const venueData = {
                            venueID,
                            venueInfo: {
                                imageURL, 
                                venueName, 
                                venueCenterAndDate, 
                                price, 
                                city, 
                                ticketURL,
                                venueID
                            }
                        }
                        dispatch(clickLikeVenue(venueData))}
                    }></i>
                </div>                
                <p className="p_label p_bold">{venueName}</p>
                <p className="p_label">{venueCenterAndDate??city}</p>
                <p className="p_label p_price">{(price?`From $${price}`:'SOLD OUT')}</p>
                <hr className='horizontalLine venueLine'/>
            </div>
        </a>        
    )
}
export default Venue;