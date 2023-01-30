import './AllVenues.css';
import { useSelector} from "react-redux";
import GridOfComponents from './GridOfComponents';
import transformDataToArrayOfVenueComponents from '../../utility_functions/transformDataToArrayOfVenueComponents';

function AllVenues({defaultData}){
    const allVenuesArray = useSelector((state)=>{
        return (state.allCityVenuesReducer.cityVenues.length > 0?state.allCityVenuesReducer.cityVenues: defaultData)
    });
    const arrayOfVenueComponents = transformDataToArrayOfVenueComponents(allVenuesArray);
    return(
        <GridOfComponents arrayOfComponents={arrayOfVenueComponents} />
    )
}
export default AllVenues;


