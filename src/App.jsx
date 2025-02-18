import { useState } from "react";
import IntroPage from "./pages/IntroPage";
import MainPage from "./pages/MainPage";
import ScrollHandler from "./components/ScrollHandler";


function App() {
  const [showMainPageOnly, setShowMainPageOnly] = useState(false);
  return (
    <>
  
      {!showMainPageOnly && <ScrollHandler onRemoveIntro={() => 
        setShowMainPageOnly(true)} />}
      {showMainPageOnly ? (
        <div id="main-page">
          <MainPage showMainPageOnly={true}/>
        </div>
      ) : (
        <>
          <div id="intro-page">
            <IntroPage />
          </div>
          <div id="main-page">
            <MainPage showMainPageOnly={false}/>
          </div>
         
        </>
      )}
    </>
  );
}

export default App;
