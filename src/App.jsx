import { useState, useEffect } from "react";
import IntroPage from "./pages/IntroPage";
import MainPage from "./pages/MainPage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import ScrollHandler from "./components/ScrollHandler";

function App() {
  const [showMainPageOnly, setShowMainPageOnly] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showContact, setContact] = useState(false);

  useEffect(() => {
    if (showMainPageOnly) {
      const timer = setTimeout(() => {
        setShowAboutMe(true);
        setContact(true);
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
          {showAboutMe && <ProjectPage />}
          {showContact && <ContactPage />}

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
