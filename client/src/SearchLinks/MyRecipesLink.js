import React from "react"
import { Link } from "react-router-dom"

function MyRecipesLink(){
    return(
        <div>
            <Link to="/myRecipes" className="nav-btn">My Recipes</Link>
        </div>
    )
}
export default MyRecipesLink