import React from 'react';
import Recipe from './Recipe';

function RecipeList ({ recipes }) {
    return (
        <div>
            {recipes.map((recipe, index) => (
                <Recipe
                    key={index}
                    title={recipe.title}
                    ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                />
            ))}
        </div>
    );
}

export default RecipeList;
