import React, { useState } from 'react';
import './Recipe.css';

function Recipe({ recipe }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`recipe-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
      <div className="recipe-card-inner">
        <div className="recipe-card-front">
          <h2>{recipe.title}</h2>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h3>Instructions</h3>
          <p>{recipe.instructions}</p>
        </div>
        <div className="recipe-card-back">
          <img src={recipe.image} alt={`${recipe.title}`} />
        </div>
      </div>
    </div>
  );
}

export default Recipe;
