import React from 'react';
import Recipe from './Recipe';

function RecipeList ({ recipes }) {
    return (
        <div className="recipe-list">
            {recipes.map((recipe, index) => (
                <Recipe
                    key={index}
                    title={recipe.title}
                    ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                    image={recipe.image}
                />
            ))}
        </div>
    );
}

export default RecipeList;
