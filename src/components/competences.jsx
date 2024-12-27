import React from "react";
import htmlLogo from "../photo/logo/htmlLogo.png";
import cssLogo from "../photo/logo/cssLogo.png";
import jsLogo from "../photo/logo/javascriptLogo.png";
import reactLogo from "../photo/logo/reactLogo.png";
import nodejsLogo from "../photo/logo/node.jsLogo.png";
import figmaLogo from "../photo/logo/figmaLogo.png";
import mongodbLogo from "../photo/logo/mongodbLogo.png";
import "../styles/competences.scss";

const skills = [
  { id: 1, name: "HTML", logo: htmlLogo, tooltip: "Architecture du web ? Ça, c'est mon terrain." },
  { id: 2, name: "CSS", logo: cssLogo, tooltip: "Le style, ce n'est pas qu'une question de design." },
  { id: 3, name: "JavaScript", logo: jsLogo, tooltip: "Pour chaque bug, il y a toujours une fonction." },
  { id: 4, name: "React", logo: reactLogo, tooltip: "Mes composants vivent en harmonie." },
  { id: 5, name: "Node.js", logo: nodejsLogo, tooltip: "Serveurs et API, c'est ma zone de confort." },
  { id: 6, name: "Figma", logo: figmaLogo, tooltip: "Des idées aux pixels, tout est sous contrôle." },
  { id: 7, name: "Mongodb", logo: mongodbLogo, tooltip: "Parce que même les données méritent un inventaire bien organisé !" },
];

const Competences = () => {
  return (
    <div className="competences">
      <h2>Mes compétences</h2>
      <div className="skills-row">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-icon" style={{ backgroundImage: `url(${skill.logo})` }}>
            <div className="tooltip">{skill.tooltip}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competences;
