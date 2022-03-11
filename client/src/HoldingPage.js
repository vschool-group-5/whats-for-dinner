import React from "react"
import Home from "./pages/Home"
import GeneralSearch from "./pages/GeneralSearch"
import MyRecipes from "./pages/MyRecipes"

import {Switch, Route} from "react-router-dom"

function HoldingFile(){
    return(
        <>
            <Switch>
                <Route  exact path="/">
                    <Home/>
                </Route>
                <Route path="/generalSearch">
                    <GeneralSearch/>
                </Route>
                <Route path="/myRecipes">
                    <MyRecipes />
                </Route>
            </Switch>        
        </>
    )
}
export default HoldingFile