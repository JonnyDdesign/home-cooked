import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import RecipeList from './RecipeList';

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
          <RecipeList recipes={recipes} />
        )}
      </div>
    </div>
  );
}

export default App;
