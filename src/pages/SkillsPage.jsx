import './SkillsPage.css';
import JS from "../assets/js.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import ReactLogo from "../assets/react.png";
import NodeJs from "../assets/node-js.png";
import Typescript from "../assets/typescript.png";
import Python from "../assets/python.png";
import Java from "../assets/java.png";
import C from "../assets/c-.png";

function SkillsPage() {
    return (
        <>
            <div id="skills-page" className="skills-page">
                
                <div className="skill-container">
                    <img src={HTML} alt="HTML" />
                    <span className="skill-text">Professional Level</span>
                </div>

                <div className="skill-container">
                    <img src={CSS} alt="CSS" />
                    <span className="skill-text">Intermediate Level</span>
                </div>

                <div className="skill-container">
                    <img src={JS} alt="JavaScript" />
                    <span className="skill-text">Intermediate Level</span>
                </div>

                <div className="skill-container">
                    <img src={ReactLogo} alt="React" />
                    <span className="skill-text">Intermediate Level</span>
                </div>

                <div className="skill-container">
                    <img src={NodeJs} alt="Node.js" />
                    <span className="skill-text">Intermediate Level</span>
                </div>

                <div className="skill-container">
                    <img src={Typescript} alt="TypeScript" />
                    <span className="skill-text">Intermediate Level</span>
                </div>

                <div className="skill-container">
                    <img src={Python} alt="Python" />
                    <span className="skill-text">Intermediate Level</span>
                </div>

                <div className="skill-container">
                    <img src={Java} alt="Java" />
                    <span className="skill-text">Intermediate Level</span>
                </div>

                <div className="skill-container">
                    <img src={C} alt="C" />
                    <span className="skill-text">Basic Level</span>
                </div>

            </div>
        </>
    );
}

export default SkillsPage;
