import './NavBar.css';
import {NavLink} from 'react-router-dom';
function NavBar({horizontalBarsVisibility, isMobileDevice, desactivateHorizontalBarsVisibility}){  
    const navigationLinks = <nav className='navigationBar'>
                                <NavLink className='navLinks' to='/'>Home</NavLink>
                                <NavLink className='navLinks' to='/favourite'>Favourite Venues</NavLink>
                                <NavLink className='navLinks' to='/aboutUs'>About Us</NavLink>
                            </nav>
    if (isMobileDevice){
        return (
            <>
                {
                horizontalBarsVisibility?
                    <i className="fa fa-bars" onClick={(event)=>{event.preventDefault(); desactivateHorizontalBarsVisibility()}}/>:
                    navigationLinks
                }   
            </>             
        )
    }
    return navigationLinks;    
}
export default NavBar;