import './App.css';
import {Routes, Route} from 'react-router-dom';
import NotificationBar from './features/notificationBar/NotificationBar';
import HomePage from './pages/HomePage';
import FavoritePage from './pages/FavouritePage';
import NavBar from './features/navBar/NavBar';
import AboutUs from './pages/AboutUs';
import PageNotFound from './pages/PageNotFound';
import { useState } from 'react';
function App() {
  const matchMedia = window.matchMedia( '(max-width: 550px)' );  
  matchMedia.onchange = (event)=>{
    if(event.matches !== isMobileDevice){
      setIsMobileDevice(!isMobileDevice);
    }
  }
  const [isMobileDevice, setIsMobileDevice] = useState(matchMedia.matches);
  const [notificationText, setNotificationText] = useState('');
  const [horizontalBarsVisibility, setHorizontalBarsVisibility] = useState(true); 
  function resetNotificationText(resetTime){
    setTimeout(()=>setNotificationText(''), resetTime);
  }
  function showNotification(textToDisplay, resetTime){
    setNotificationText(textToDisplay);
    resetNotificationText(resetTime);
  }
  function focusOutsideNavBar(){
    if (!horizontalBarsVisibility){
      setHorizontalBarsVisibility(true);
    }
  }
  function desactivateHorizontalBarsVisibility(){
    setHorizontalBarsVisibility(false);
  }
  return (
    <div className="App divColumn" onClick={focusOutsideNavBar}>
      <NotificationBar notificationText={notificationText} />
      <NavBar horizontalBarsVisibility={horizontalBarsVisibility} isMobileDevice={isMobileDevice} desactivateHorizontalBarsVisibility={desactivateHorizontalBarsVisibility}/>
      <Routes>
        <Route path='/' element={<HomePage showNotification={showNotification}/>}></Route>
        <Route path='favourite' element={<FavoritePage/>}></Route>
        <Route path='aboutUs' element={<AboutUs />}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
      <footer className='footer'>
        <h3 className='h3_footer'>This website uses the <a className='apiLink' href='https://platform.seatgeek.com/' target='_blank' rel='noreferrer'>SeatGeek API</a>. Thanks to the developers...</h3>
      </footer>
    </div>
  );
}

export default App;
