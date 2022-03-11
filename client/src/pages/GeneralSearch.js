import React, {useState, useEffect} from "react"
import axios from "axios"
import RecipeCard from "./RecipeCard"
import "../../src/stylesfolder/genStyle.css"
import Header from "../components/Header"
import HomeLink from "../SearchLinks/HomeLink"

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
            console.log(res.data)
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
                <HomeLink/>
            </section>
            <header id="genHeader">
                <Header header = "General Search"/>
                <section>
                    <h3>this is the gen serach section</h3>
                </section>
            </header>
            <section id="searchSection">
                <Header header="whats for dinner"/>
            <form onSubmit={userInput}>
                <input
                    type="text"
                    placeholder="enter an ingredient or recipe"
                    name="keyword"
                    value={search}
                    onChange={trackInput}
                />
                <button type="submit">search for dinner</button>
            </form>
            </section>
            <ul>
                <li>{mapped}</li>
            </ul>
        </div>
    )
}
export default GeneralSearch