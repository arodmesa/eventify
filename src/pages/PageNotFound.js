import './PageNotFound.css';
import { useNavigate } from 'react-router';
function PageNotFound(){
    const navigate = useNavigate();
    return(
        <div className="divColumn">
            <div className="navBarBackground"></div>
            <div className='noFoundImgBackgound'></div>
            <button className='goHomeBtn' onClick={()=>navigate('/')}>GO HOME</button>
        </div>
    )
}
export default PageNotFound;