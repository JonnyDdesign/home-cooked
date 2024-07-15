import React from 'react';

function Recipe({ recipe }) {
  return (
    <div>
      <h2>{recipe.title}</h2>
      <h3>Ingredients</h3>
      <ul>
        {Array.isArray(recipe.ingredients) ? (
          recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))
        ) : (
          <li>No ingredients available</li>
        )}
      </ul>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default Recipe;
