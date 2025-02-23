import { useEffect, useRef } from "react";
import './ProjectPage.css'
import KTH_Logo from "../assets/kth-connect.svg"
import UNIU from "../assets/UGGLU.svg"
import Algorithm from "../assets/algoData.svg"

function AboutMePage () {


    return (
        <>
            <div id="project-page" className="project-page-container">

                <div className="cardHolder">
                    <a href="https://github.com/danljungstrom/KTH-Connect" target="_blank" rel="noopener noreferrer">
                        <div className='card first'>
                            <img
                                className="kth-connect-logo"
                                src={KTH_Logo}
                                alt="KTH-connect logo"
                            />
                            <p className="firstParagraph">KTH-Connect Application (Social Application For Students To Communicate At KTH)</p>
                        </div>
                    </a>
                    <a href="https://github.com/Karl-Johan-Jacobson/Ladusvala" target="_blank" rel="noopener noreferrer">
                    <div className='card second'>
                        <img
                            className="uniu-logo"
                            src={UNIU}
                            alt="UNIU owl logo"
                        />
                        <p className="secondParagraph">Student counselor to help find a relevant program based on personal interests <br/>(Application is available at uniu.nu.)</p>
                    </div>
                    </a>
                    <a href="https://github.com/03Elias/ID1021-Algoritmer-och-Datastrukturer/tree/main" target="_blank" rel="noopener noreferrer">
                        <div className='card third'>
                            <img
                                className="algo-logo"
                                src={Algorithm}
                                alt="Binary Tree Algorithms logo"
                            />
                            <p className="thirdParagraph">A Java course where you learn to program algorithms and data structures </p>
                        </div>
                    </a>
                </div>
                    <div className="githubButtonContainer">
                        <button className="githubButton" onClick={() => window.open("https://github.com/03Elias", "_blank")}>
                            GitHub
                        </button>
                    </div>
            </div>
        </>
    );
}

export default AboutMePage