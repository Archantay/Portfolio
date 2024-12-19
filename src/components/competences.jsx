import React, { useState } from "react";
import htmlLogo from "../photo/logo/htmlLogo.png";
import cssLogo from "../photo/logo/cssLogo.png";
import jsLogo from "../photo/logo/javascriptLogo.png";
import reactLogo from "../photo/logo/reactLogo.png";
import nodejsLogo from "../photo/logo/node.jsLogo.png";
import figmaLogo from "../photo/logo/figmaLogo.png";
import "../styles/competences.scss";

const skills = [
  { id: 1,
    name: "HTML",
    logo: htmlLogo,
    tooltip: { title: "HTML", description: "Architecture du web ? Ça, c'est mon terrain." },
    details: [
      "Sémantique : Utilisation des balises HTML5 (<header>, <section>, <article>, etc.).",
      "Gestion des formulaires avec des types d’entrée (email, date, range).",
      "Intégration de médias : <audio> et <video>.",
      "Utilisation des attributs globaux (data-*, aria-*).",
      "Gestion des métadonnées : <meta>, <title>.",
      "Structure des documents : <nav>, <main>, <aside>.",
      "Optimisation SEO avec des balises appropriées.",
      "Manipulation des attributs contenteditable et draggable.",
      "Intégration des API natives : Geolocation, Web Storage, etc.",
      "Connaissance des bonnes pratiques d’accessibilité (WCAG).",
    ]},
  { id: 2,
    name: "CSS",
    logo: cssLogo,
    tooltip: { title: "CSS", description: "Le style, ce n'est pas qu'une question de design." },
    details: [
      "Flexbox : Alignement et disposition avancés.",
      "CSS Grid : Mise en page complexe avec grille.",
      "Animation avec @keyframes.",
      "Utilisation des pseudo-classes (:hover, :nth-child, :not).",
      "Styles responsives avec media queries.",
      "Gestion des variables CSS (--color-primary).",
      "Effets visuels : ombres, transitions, transformations 2D/3D.",
      "Design system : Boutons, cards, modals réutilisables.",
      "Techniques avancées de typographie (polices, alignement, gestion des textes).",
      "Optimisation des performances CSS (minification, combinaison de sélecteurs).",
    ]},
  { id: 3,
    name: "JavaScript",
    logo: jsLogo,
    tooltip: { title: "JavaScript", description: "Pour chaque bug, il y a toujours une fonction." },
    details: [
      "Manipulation du DOM (sélection, ajout, suppression d’éléments).",
      "Utilisation des API JavaScript natives (Fetch, EventListener).",
      "Connaissance des types et conversions (Number, String, etc.).",
      "Programmation asynchrone avec async/await.",
      "Structuration du code avec des modules (import/export).",
      "Manipulation des objets (Object.keys(), Object.assign(), destructuring).",
      "Gestion des événements (déclencheurs et délégation).",
      "Tests unitaires avec des frameworks (ex : Jest).",
      "Optimisation des performances : détection de goulots d’étranglement.",
    ]},
  { id: 4,
    name: "React",
    logo: reactLogo,
    tooltip: { title: "React", description: "Mes composants vivent en harmonie." },
    details: [
      "Utilisation des Hooks (useState, useEffect, useContext).",
      "Création de composants fonctionnels réutilisables.",
      "Gestion des props et du state.",
      "Utilisation du Context API pour le partage de données globales.",
      "Gestion des routes avec React Router DOM.",
      "Rendu conditionnel et listes dynamiques.",
      "Intégration d’API REST ou GraphQL avec Axios ou Fetch.",
      "Utilisation des fragments (<></>) pour éviter les balises inutiles.",
      "Gestion des erreurs avec les boundary components.",
      "Optimisation des performances avec React.memo et lazy-loading.",
    ]},
  { id: 5,
    name: "Nodejs",
    logo: nodejsLogo,
    tooltip: { title: "Node.js", description: "Serveurs et API, c'est ma zone de confort." },
    details: [
      "Utilisation de frameworks comme Express.js.",
      "Gestion des fichiers avec le module fs.",
      "Manipulation de bases de données avec Mongoose (MongoDB).",
      "Gestion des middlewares (authentification, validation).",
      "Gestion des tâches asynchrones avec async/await.",
      "Configuration des variables d’environnement avec dotenv.",
    ]},
  { id: 6,
    name: "Figma",
    logo: figmaLogo,
    tooltip: { title: "Figma", description: "Des idées aux pixels, tout est sous contrôle" },
    details: [
      "Création de maquettes wireframe.",
      "Utilisation des composants pour la conception modulaire.",
      "Exportation d’éléments pour les développeurs (SVG, PNG).",
      "Utilisation des bibliothèques de styles pour la cohérence visuelle.",
      "Création de grilles et de règles.",
    ]},
];

const Competences = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <div className="competences-container">
      <h2 className="competences-title">Mes Compétences</h2>
      <div className="book">
        <div className="page left-page">
          <div className="skills-grid">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="skill-icon"
                onClick={() => handleSkillClick(skill)}
                style={{ backgroundImage: `url(${skill.logo})` }}
              >
                <div className="tooltip-container">
                  <div className="tooltip">
                    <h4>{skill.tooltip.title}</h4>
                    <p>{skill.tooltip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
    </div>
  );
};

export default Competences;
