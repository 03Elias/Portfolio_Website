import { useState, useEffect } from "react";

function ScrollHandler({ onRemoveIntro }) {
  useEffect(() => {
    const handleScroll = () => {
      const mainPage = document.getElementById("main-page");

      if (mainPage) {
        const mainPageTop = mainPage.offsetTop;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop >= mainPageTop) { // If the user scrolled past IntroPage
          onRemoveIntro(); // Remove IntroPage
          
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onRemoveIntro]);

  return null; // This component handles logic only
}

export default ScrollHandler;
