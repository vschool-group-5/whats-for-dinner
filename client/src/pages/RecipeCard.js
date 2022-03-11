import React from "react"
import RecipeInfo from "../components/RecipeInfo"

function RecipeCard(props){
    return(
        <div className="recipe-card">
            <h1>{props.title}</h1>
            <a className="recipe-link" href={props.site}>full recipe</a>
            <img src={props.pic} alt="food"/>
            <RecipeInfo recipeLink={props.site}/>
        </div>
    )
}
export default RecipeCard