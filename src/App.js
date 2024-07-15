import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header';
import RecipeList from './RecipeList';

const recipes = [
  {
    title: 'Green Chile Casserole',
    ingredients: ['10 eggs', '1/2 cup flour', '1 teaspoon baking powder', '1 pound Monterey Jack cheese', '2 cups cottage cheese', '2 4-ounce cans diced green chiles', '1/2 cup melted butter', '1/2 teaspoon salt'],
    instructions: 'In a large bowl, beat the eggs. Add the remaining ingredients and mix well. Pour into a greased 9 x 13 inch baking dish. Bake at 350 degrees for 40 minutes.'
  },
  {
    title: 'Streusel Coffee Cake',
    ingredients: ['3/4 cups sugar', '1/4 cup sofented butter', '1 egg', '1/2 cup milk', '1.5 cups flour', '2 teaspoons baking powder', '1/2 teaspoon salt'],
    instructions: 'Mix sugar, butter, and egg. Stir in milk. Blend dry ingredients, stir into wet mixture. Spread batter into a greased 8 x 8 inch baking dish. Sprinkle with streusel topping (streusel topping: mix 1/2 cup brown sugar (packed), 2 tablespoons flour, 2 teaspoons cinnamon, 2 tablespoons melted butter). Bake for 25-35 minutes or until a toothpick stuck in the center comes out clean.'
  }
];

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/recipes/')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.log('There was an error fetching the recipes!');
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
