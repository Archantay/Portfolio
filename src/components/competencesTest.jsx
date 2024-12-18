import React, { useState } from 'react';
import htmlLogo from '../photo/logo/htmlLogo.png';
import cssLogo from '../photo/logo/cssLogo.png';
import jsLogo from '../photo/logo/javascriptLogo.png';
import reactLogo from '../photo/logo/reactLogo.png';
import nodejsLogo from '../photo/logo/node.jsLogo.png';
import figmaLogo from '../photo/logo/figmaLogo.png';
import '../styles/competencesTest.scss';

// Liste des compétences
const skills = [
  { id: 1, name: 'HTML', logo: htmlLogo, details: ['Structure des pages web', 'Balises et attributs', 'SEO'] },
  { id: 2, name: 'CSS', logo: cssLogo, details: ['Styles avancés', 'Flexbox et Grid', 'Animations'] },
  { id: 3, name: 'JavaScript', logo: jsLogo, details: ['DOM', 'ES6+', 'Frameworks'] },
  { id: 4, name: 'React', logo: reactLogo, details: ['Structure des pages web', 'Balises et attributs', 'SEO'] },
  { id: 5, name: 'Nodejs', logo: nodejsLogo, details: ['Styles avancés', 'Flexbox et Grid', 'Animations'] },
  { id: 6, name: 'Figma', logo: figmaLogo, details: ['DOM', 'ES6+', 'Frameworks'] },
  // Ajoute d'autres compétences ici
];

const Competences = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Gestion des clics sur les compétences
  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <div className={`competences-container ${isOpen ? 'open' : ''}`}>
      {/* Livre fermé */}
      {!isOpen && (
        <div className="book-cover" onClick={() => setIsOpen(true)}>
          <h2>Mes Compétences</h2>
        </div>
      )}

      {/* Livre ouvert */}
      {isOpen && (
        <div className="book">
            <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
          {/* Page de gauche : Grille de compétences */}
          <div className="page left-page">
            <div className="skills-grid">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="skill-icon"
                  onClick={() => handleSkillClick(skill)}
                  style={{ backgroundImage: `url(${skill.logo})` }}
                />
              ))}
            </div>
          </div>

          {/* Page de droite : Détails */}
          <div className="page right-page">
            {selectedSkill ? (
              <div className="skill-details">
                <h3>{selectedSkill.name}</h3>
                <ul>
                  {selectedSkill.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>Cliquez sur une compétence pour afficher les détails</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Competences;
