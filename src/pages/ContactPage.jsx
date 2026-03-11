import './ContactPage.css'

function ContactPage () {
    const resumeUrl = `${import.meta.env.BASE_URL}CV.pdf`;

    return(
        <>
            <div id="contact-page" className='contact-page-container'>
                <div className="contact-information-container">
                        
                        <div className="name-container">
                            <p>✍️ Elias George Gaghlasian</p> 
                        </div>

                        <div className="number-container">
                        <p>📞 +46 763 244 423</p>
                        </div>
                        
                        <div className="email-container">
                            <p>📧 <a href="mailto:elias.gaghlasian@icloud.com">elias.gaghlasian@icloud.com</a></p>
                        </div>

                        <div className="Linkedin-container">
                            <p>🔗 <a href='https://www.linkedin.com/in/elias-gaghlasian-a1460a208' target="_blank" rel="noopener noreferrer">LinkedIn </a></p>
                        </div>

                        <div className="gitHub-container">
                            <p>🖥️ <a href="https://github.com/03Elias" target="_blank" rel="noopener noreferrer">https://github.com/03Elias</a></p>
                        </div>

                        <div className="resume-container">
                <p>📄 <a href={resumeUrl} download="Elias_Gaghlasian_Resume.pdf">My Resume</a></p>
                        </div>

                </div>

            </div>
        </>
    );

}
export default ContactPage