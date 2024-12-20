import React, { useState } from 'react';
import projet1 from '../photo/siteBookiPresentation.png';
import projet2 from '../photo/sophieBluelPresentation.png';
import projet3 from '../photo/ninaCarducciPresentation.png';
import projet4 from '../photo/kasaPresentation.png';
import '../styles/carousel.scss';

const Carrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const projects = [
    { title: "Site Booki",
      description: "J'ai du developper une page d'accueil pour une agence de voyage.",
      issue: "Rendre les page d'accueil responsive et conforme à la maquette.",
      skills: "HTML et CSS",
      link: "https://git@github.com/Archantay/Projet-2-Cr-er-la-page-d-accueil-d-une-agence-de-voyage-avec-HTML-CSS.git",
      image: projet1,
    },
    { title: "Porfolio architecte",
      description: "Créez une page web dynamique avec JavaScript",
      issue: "La gestion des événements utilisateurs et la manipulation des éléments du DOM",
      skills: "JavaScript",
      link: "https://github.com/Archantay/Portfolio-architecte-sophie-bluel",
      image: projet2, 
    },
    { title: "Portfolio photographe",
      description: "Améliorer les performances et l'accessibilité du site pour un meilleur référencement sur les moteurs de recherche.",
      issue: "Comprendre les outils lighthouse et wave afin d'apporter les modifications nécessaires au bon référencement du site.",
      skills: "HTML",
      link: "https://github.com/Archantay/Nina-Carducci-Dev",
      image: projet3, 
    },
    { title: "Kasa, agence immobilière",
      description: "Implémenter le front-end d’une application en utilisant React et React Router",
      issue: "La gestion des données dynamiques entre les differentes pages du site.",
      skills: "JaveScript",
      link: "https://git@github.com/Archantay/site-kasa.git",
      image: projet4, 
    },
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
      <button className="carrousel-btn prev" onClick={prevProject}></button>

      <div className="carrousel-images">
        <div className="carrousel-card prev-card">
          <img src={projects[(currentIndex - 1 + projects.length) % projects.length].image} alt={`Projet précédent`} />
        </div>

        <div className="carrousel-card current-card">
          <img src={projects[currentIndex].image} alt={`Projet actuel`} />
          <div className="overlay">
            <h3>{projects[currentIndex].title}</h3>
            <p>{projects[currentIndex].description}</p>
            <p><strong>Problèmes :</strong> {projects[currentIndex].issue}</p>
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

      <button className="carrousel-btn next" onClick={nextProject}></button>
    </div>
  );
};

export default Carrousel;
