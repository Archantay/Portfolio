import React, { useState } from 'react';
import projet1 from '../photo/siteBookiPresentation.png';
import projet2 from '../photo/kasaPresentation.png';
import projet3 from '../photo/sophieBluelPresentation.png';
import projet4 from '../photo/ninaCarducciPresentation.png';
import '../styles/carousel.scss';

const Carrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Liste des projets avec titres, descriptions et images
  const projects = [
    { title: "Projet 1",
      description: "Un aperçu de mon premier projet.",
      issue: "Résolution des bugs d'affichage sur mobile",
      skills: "HTML, CSS, JavaScrispt",
      link: "",
      image: projet1,
    },
    { title: "Projet 2", description: "Un aperçu de mon deuxième projet.", image: projet2 },
    { title: "Projet 3", description: "Un aperçu de mon troisième projet.", image: projet3 },
    { title: "Projet 4", description: "Un aperçu de mon quatrième projet.", image: projet4 },
  ];

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <div className="carrousel">
      {/* Flèche gauche */}
      <button className="carrousel-btn prev" onClick={prevProject}>←</button>

      <div className="carrousel-images">
        <div className="carrousel-card prev-card">
          <img src={projects[(currentIndex - 1 + projects.length) % projects.length].image} alt={`Projet précédent`} />
        </div>

        <div className="carrousel-card current-card">
          <img src={projects[currentIndex].image} alt={`Projet actuel`} />
          <div className="overlay">
            <h3>{projects[currentIndex].title}</h3>
            <p>{projects[currentIndex].description}</p>
            <p><strong>Problèmes :</strong> {projects[currentIndex].issues}</p>
            <p><strong>Compétences :</strong> {projects[currentIndex].skills}</p>
            <a href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer">
              Voir le projet →
            </a>
          </div>
        </div>

        <div className="carrousel-card next-card">
          <img src={projects[(currentIndex + 1) % projects.length].image} alt={`Projet suivant`} />
        </div>
      </div>

      {/* Flèche droite */}
      <button className="carrousel-btn next" onClick={nextProject}>→</button>
    </div>
  );
};

export default Carrousel;
