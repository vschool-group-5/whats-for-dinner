import React, {useState, useEffect} from "react"
import axios from "axios"
import RecipeCard from "./RecipeCard"
import "../../src/stylesfolder/genStyle.css"
import Header from "../components/Header"
import HomeLink from "../SearchLinks/HomeLink"
import MyRecipesLink from "../SearchLinks/MyRecipesLink"

const apiId = "32a73c3a"
const key = "95e21773a806776b06c6ce33bd5736c1"	

function GeneralSearch(){
    const [search, setSearch] = useState("")
    const [recipes, setRecipes] = useState([])
    const [foundRecipe, setFoundRecipe] = useState("")
   
    
    const trackInput = e =>{ 
      setSearch(e.target.value)
    }

    useEffect(()=>{
        findRecipe()
    }, [foundRecipe])

    const findRecipe = ()=>{
        axios.get(`https://api.edamam.com/search?q=${foundRecipe}&app_id=${apiId}&app_key=${key}&from=0&to=10`)
        .then(res=>{
            const data = res.data.hits
            setRecipes(data)
        })
    }

    const userInput = e => {
            e.preventDefault()
            setFoundRecipe(search)
            setSearch("")
    }
    
    const mapped = recipes.map((looper, index)=>{
        return <RecipeCard
                    key={index}
                    title={looper.recipe.label}
                    pic={looper.recipe.image}
                    site={looper.recipe.url}
                />
    })

    return(
        <div id="genContainer">
            <section id="genNav">
                <HomeLink />
                <MyRecipesLink />
            </section>
            <header id="genHeader">
                <Header header="General Search"/>
            </header>
            <section id="searchSection">
                <Header header="Whats for Dinner?"/>
            <form onSubmit={userInput}>
                <input
                    type="text"
                    placeholder="enter an ingredient or recipe"
                    name="keyword"
                    id="gen-search-box"
                    value={search}
                    onChange={trackInput}
                />
                <button type="submit" className="btn">SEARCH</button>
            </form>
            </section>
            <ul>
                <li className="searched-recipes">{mapped}</li>
            </ul>
        </div>
    )
}
export default GeneralSearch