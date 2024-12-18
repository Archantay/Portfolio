import React from 'react';
import githubLogo from '../photo/logo/github_PNG40.png';
import linkedinLogo from '../photo/logo/linkedinLogoCarre.png';
import contactLogo from '../photo/logo/contactLogo.png';
import { Link } from 'react-router-dom';
import '../styles/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socials">
        
        <Link to="/contact" aria-label="Contact">
          <img src= {contactLogo} alt="Contact" />
        </Link>
        
        <a href="https://github.com/toncompte" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src= {githubLogo} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/kevin-lutringer-b00625279/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src= {linkedinLogo} alt="LinkedIn" />
        </a>
      </div>
      <p>&copy; 2024 Kevin Lutringer, Tous droits réservés.</p>
      <button className="back-to-top" onClick={() => window.scrollTo(0, 0)}>
        ↑
      </button>
    </footer>
  );
}

export default Footer;