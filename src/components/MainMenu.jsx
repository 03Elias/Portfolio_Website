import './MainMenu.css';
function MainMenu() {
    return (
      <>
        <nav className="menu-container">
          <ul>
            <li><a href="javascript:void(0);" onClick={() => window.location.href = "/"}>Home</a></li>
            <li><a href="javascript:void(0);" onClick={() => window.scrollTo({ top: document.getElementById('main-page').offsetTop, behavior: 'smooth' })}>About</a></li>
            <li><a href="javascript:void(0);" onClick={() => window.scrollTo({ top: document.getElementById('project-page').offsetTop, behavior: 'smooth' })}>Projects</a></li>
            <li><a href="javascript:void(0);" onClick={() => window.scrollTo({ top: document.getElementById('skills-page').offsetTop, behavior: 'smooth' })}>Skills</a></li>
            <li><a href="javascript:void(0);" onClick={() => window.scrollTo({ top: document.getElementById('contact-page').offsetTop, behavior: 'smooth' })}>Contact</a></li>
          </ul>
        </nav>
      </>
    );
  }
  
  export default MainMenu;
  