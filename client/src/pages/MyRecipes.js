import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../stylesfolder/myRecipesStyle.css"
import HomeLink from '../SearchLinks/HomeLink'
import GeneralSearchLink from "../SearchLinks/GeneralSearchLink"
import Header from '../components/Header'

export default function MyRecipes() {

    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        axios.get("/recipe")
            .then(resp => {
                setRecipes(resp.data)
            })
    }, [])

    const recipesMap = recipes.map(recipe => {
        return (
            <div key={recipe._id} className="recipe-map">
                <a href={recipe.recipeLink}>{recipe.recipeLink}</a>
                <div>Rating: {ratingConversion[recipe.rating - 1]}</div>
                <div>Comment: {recipe.comments}</div>
            </div>
        )
    })

  return (
    <div className="myRecipes-container">
        <section id="genNav">
                <HomeLink />
                <GeneralSearchLink text="SEARCH" />
            </section>
            <header id="genHeader">
                <Header header="My Recipes"/>
            </header>
        <div>{recipesMap}</div>
    </div>
  )
}

const ratingConversion = ['⭐️', '⭐️⭐️', '⭐️⭐️⭐️']