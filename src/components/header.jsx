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
          <li><a href="#projets">Mes projets</a></li>
          <li><a href="#competences">Mes compétences</a></li>
          <li><a href="#contact">Me Contacter</a></li>
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