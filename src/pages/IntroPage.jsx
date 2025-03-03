import { useState, useEffect } from 'react';
import './IntroPage.css';
import EG_Logo from "../assets/EG.png"
import downArrowLogo from "../assets/arrow.png";
import DisableZoom from '../components/disableZoom';

function IntroPage() {


  useEffect(() => {
   
    const logo = document.querySelector(".mainPage-logo-container");
    
  
    if (logo) {
      logo.style.display = "none";
    }

    
    return () => {
      if (logo) {
        logo.style.display = "block"; 
      }
    };
  }, []);

  return (
    <>
      <DisableZoom/>
      <div className="intro-page-container">
        <div className="icon-container">
          <img
            className="icon"
            src={EG_Logo}
            alt="EG logo"
         />

          <img
            className='arrow'
            src={downArrowLogo}
            alt="down pointing arrow logo"
          />
        </div>
      </div>
    </>
  );
}

export default IntroPage;
