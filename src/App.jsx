import { useState, useEffect } from "react";
import IntroPage from "./pages/IntroPage";
import MainPage from "./pages/MainPage";
import AboutMePage from "./pages/AboutMePage";
import ScrollHandler from "./components/ScrollHandler";

function App() {
  const [showMainPageOnly, setShowMainPageOnly] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(false);

  useEffect(() => {
    if (showMainPageOnly) {
      const timer = setTimeout(() => {
        setShowAboutMe(true);
      }, 5500);

      return () => clearTimeout(timer);
    }
  }, [showMainPageOnly]);

  return (
    <>
      {!showMainPageOnly && <ScrollHandler onRemoveIntro={() => setShowMainPageOnly(true)} />}
      {showMainPageOnly ? (
        <div id="main-page">
          <MainPage showMainPageOnly={true} />
          {showAboutMe && <AboutMePage />}
        </div>
      ) : (
        <>
          <div id="intro-page">
            <IntroPage />
          </div>
          <div id="main-page">
            <MainPage showMainPageOnly={false} />
          </div>
        </>
      )}
    </>
  );
}

export default App;
