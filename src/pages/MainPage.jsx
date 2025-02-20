import "./MainPage.css";
import EG_Logo from "../assets/EG.png"
import MainMenu from "../components/MainMenu";

function MainPage({ showMainPageOnly }) {
  

  return (
    <>
    {showMainPageOnly && <MainMenu />}
      <div className="main-page-container">
        <div className="mainPage-logo-container" onClick={() => window.location.href = "/"}>
              <img
                        className="icon-mainPage"
                        src={EG_Logo}
                        alt="EG logo"
                     />
        </div>
        <div className="anim-EG-container">
          <h1 className="anim-E">
            E<span className="anim-Lias">lias</span>
          </h1>
          <h1 className="anim-G">
            G<span className="anim-Aghlasian">aghlasian</span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default MainPage;
