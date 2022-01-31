import React from "react";
// import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients}) =>{
	return(
		<div className="container" key={title}>
			
			<h1 className="text">{title}</h1>
			<img className={image} src={image} alt=""/>
			<p>{ingredients.map(ingredientLines=>(<li>{ingredientLines}</li>))}</p>

            <h4 className="cal">Calories : {(calories).toFixed(2)}</h4>
			
		</div>
	);

}
export default Recipe;
