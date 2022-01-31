import React, { useEffect, useState } from 'react'
import './App.css';
import Recipe from './Recipe';

const App = () => {
  const APP_ID = "4e9f05eb";
  const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("cake");
  
  useEffect(() => {
    const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data);
  };
	getRecipes();
}, [query])

const updateSearch = e => {
	setSearch(e.target.value);
};
const getSearch = e => {
	e.preventDefault();
	setQuery(search);
	setSearch("");
}

return (
	<div className="App">
    <div className='App-header'>
	<h1 >RECIPE</h1>
	<form className="search-form" onSubmit={getSearch} >
		<input className="search-bar" type="text" value={search}
			onChange={updateSearch} />
		<button className="search-button" type="submit" >
			Search
		</button>
	</form>
	</div>
	<div className="container" >
		{recipes.map(recipe => (
		<Recipe
			key={recipe.recipe.uri}
			title={recipe.recipe.label}
			calories={recipe.recipe.calories}
			image={recipe.recipe.image}
			ingredients={recipe.recipe.ingredientLines}
		/>)
    )}
    
	</div>
	
  
	</div>
);
}

export default App;
