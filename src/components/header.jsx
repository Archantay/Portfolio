import React from 'react';
import githubLogo from '../photo/logo/github_PNG40.png';
import linkedinLogo from '../photo/logo/linkedinLogoRond.png';
import '../styles/header.scss';

const Header = () => {
  return (
    <header className="header">
  <div className="logo">
    <h1>Kevin Lutringer</h1>
  </div>
  <div className="nav-social-container">
    <nav>
      <ul>
      <li><a href="#presentation">Présentation</a></li>
          <li><a href="#projets">Projets</a></li>
          <li><a href="#competences">Compétences</a></li>
          <li><a href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              const email = "lutringerkevin@gmail.com";
              const subject = "";
              const body = "";
              window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            }}>
              Contact
            </a></li>
      </ul>
    </nav>
    <div className="socials">
      <a href="https://github.com/Archantay" target="_blank" rel="noopener noreferrer">
        <img src= {githubLogo} alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/kevin-lutringer-b00625279/" target="_blank" rel="noopener noreferrer">
        <img src= {linkedinLogo} alt="LinkedIn" />
      </a>
    </div>
  </div>
</header>
  );
};

export default Header;