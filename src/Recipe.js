import React, { useState } from 'react';
import './Recipe.css';

function Recipe({ title, ingredients, instructions, image }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`recipe-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="recipe-card-front">
        <img src={image} alt={title} className="recipe-image" />
        <h2>{title}</h2>
      </div>
      <div className="recipe-card-back">
        <h3>Ingredients</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Instructions</h3>
        <p>{instructions}</p>
      </div>
    </div>
  );
}

export default Recipe;
