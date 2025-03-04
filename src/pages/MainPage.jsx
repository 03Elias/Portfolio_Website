import { useState, useEffect } from "react";
import "./MainPage.css";
import EG_Logo from "../assets/EG.png";
import profilPic from "../assets/profilPic.jpeg";
import MainMenu from "../components/MainMenu";

function MainPage({ showMainPageOnly }) {
  const roles = ["Web Developer", "Software Developer", "IT Recruiter", "Problem Solver", "Team Leader"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showTypingEffect, setShowTypingEffect] = useState(false);

  
  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setShowTypingEffect(true);
    }, 5000); 

    return () => clearTimeout(delayTimer);
  }, []);

  
  useEffect(() => {
    if (!showTypingEffect) return; 

    if (subIndex === roles[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 500);
    } else if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    }

    const timeout = setTimeout(() => {
      setText(roles[index].substring(0, subIndex));
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 100 : 200);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, showTypingEffect]);

  return (
    <>
      {showMainPageOnly && <MainMenu />}
      <div className="main-page-container">
        <div className="mainPage-logo-container" onClick={() => window.location.href = "/"}>
          <img className="icon-mainPage" src={EG_Logo} alt="EG logo" />
        </div>
        <div className="anim-EG-container">
          <h1 className="anim-E">
            E<span className="anim-Lias">lias</span>
          </h1>
          <h1 className="anim-G">
            G<span className="anim-Aghlasian">aghlasian</span>
          </h1>
        </div>
          <div className="profile-image-container">
              <img className="profile-image" src={profilPic} alt="Elias Gaghlasian" />
          </div>


        
        {showTypingEffect && <p className="typing-effect">{text}<span className="cursor">|</span></p>}
      </div>
    </>
  );
}

export default MainPage;
