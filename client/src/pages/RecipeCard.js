import React from "react"

function RecipeCard(props){
    return(
        <div>
            <h1>{props.title}</h1>
           <h1><a href={props.site} target="_blank">full recipe</a></h1>
            <img src={props.pic} alt="food"/>
        </div>
    )
}
export default RecipeCard