import Venue from "../features/venuesFrontPage/Venue";
function transformDataToArrayOfVenueComponents(dataArray){
    const arrayOfVenueComponents = dataArray.map((venue, index)=>{
        let {imageURL, venueName, venueCenterAndDate, price, city, ticketURL, venueID} = venue;
        if (!imageURL){
            imageURL = venue.performers[0].image;
            venueName = venue.performers[0].name;
            venueCenterAndDate = `${new Date(venue.datetime_local??venue.venueCenterAndDate).toLocaleString()}, ${venue.venue.name_v2}`;
            price = venue.stats.lowest_price;
            city = venue.venue.city;
            ticketURL = venue.url;
            venueID = venue.id;
        }
        return (
            <Venue key={index} imageURL={imageURL} 
                   venueName={venueName} venueCenterAndDate={venueCenterAndDate} 
                   price={price} city={city} 
                   ticketURL={ticketURL} venueID={venueID} 
            />
        )
    });
    return arrayOfVenueComponents;
}
export default transformDataToArrayOfVenueComponents;