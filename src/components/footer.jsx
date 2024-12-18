import React from 'react';
import githubLogo from '../photo/logo/github_PNG40.png';
import linkedinLogo from '../photo/logo/linkedinLogoCarre.png';
import contactLogo from '../photo/logo/contactLogo.png';
import '../styles/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socials">
        
      <a href="#contact" 
    onClick={(e) => {
      e.preventDefault();
      const email = "lutringerkevin@gmail.com";
      const subject = "";
      const body = "";
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }}
    >
          <img src= {contactLogo} alt="Contact" />
          </a>
        
        <a href="https://github.com/Archantay" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
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