import React from 'react';
import '../styles/cards.scss';

const Card = ({ tech, description, level }) => {
  return (
    <div className="card">
      <h3>{tech}</h3>
      <p>{description}</p>
      <span>{level}</span>
    </div>
  );
};

export default Card;
