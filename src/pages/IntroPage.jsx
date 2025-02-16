import { useState, useEffect } from 'react';
import './IntroPage.css';
import DisableZoom from '../components/disableZoom';

function IntroPage() {

  return (
    <>
      <DisableZoom/>
      <div className="intro-page-container">
        <div className="icon-container">
          <img
            className="icon"
            src="/EG.png"
            alt="EG logo"
         />
        </div>
      </div>
    </>
  );
}

export default IntroPage;
