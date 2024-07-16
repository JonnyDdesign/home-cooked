import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import Recipe from './Recipe';

/*const recipes = [
  {
    id: 1,
    title: 'Green Chile Casserole',
    ingredients: ['10 eggs', '1/2 cup flour', '1 teaspoon baking powder', '1 pound Monterey Jack cheese', '2 cups cottage cheese', '2 4-ounce cans diced green chiles', '1/2 cup melted butter', '1/2 teaspoon salt'],
    instructions: 'In a large bowl, beat the eggs. Add the remaining ingredients and mix well. Pour into a greased 9 x 13 inch baking dish. Bake at 350 degrees for 40 minutes.',
    image: '/public/Enchiladas.webp'
  },
  {
    id: 2,
    title: 'Streusel Coffee Cake',
    ingredients: ['3/4 cups sugar', '1/4 cup sofented butter', '1 egg', '1/2 cup milk', '1.5 cups flour', '2 teaspoons baking powder', '1/2 teaspoon salt'],
    instructions: 'Mix sugar, butter, and egg. Stir in milk. Blend dry ingredients, stir into wet mixture. Spread batter into a greased 8 x 8 inch baking dish. Sprinkle with streusel topping (streusel topping: mix 1/2 cup brown sugar (packed), 2 tablespoons flour, 2 teaspoons cinnamon, 2 tablespoons melted butter). Bake for 25-35 minutes or until a toothpick stuck in the center comes out clean.',
    image: '/public/Enchiladas.webp'
  }
];*/

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/recipes/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setRecipes(data);
        setLoading(false);
      })
      .catch(error => {
        console.log('There was an error fetching the recipes!', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <h1>Click a Recipe Below for an Amazing Home Cooked Meal:</h1>
        {loading ? (
          <div className="loader">Loading...</div>
        ) : error ? (
          <div className="error-message">There was an error fetching the recipes: {error}</div>
        ) : (
          <div className="recipe-list">
            {recipes.map(recipe => (
              <Recipe key={recipe.id} recipe={recipe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
