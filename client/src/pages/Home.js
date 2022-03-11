import React from "react"
import Header from "../components/Header"
import GeneralSearchLink from "../SearchLinks/GeneralSearchLink"
import "../../src/stylesfolder/homeStyle.css"

function Home(props){
    return(
        <div id="homeContainer">
            <header id="homeHeader">
                <Header header="Whats for Dinner"/>
            </header>
            <section id="intro">
                <h2>this will talk about the app a liitle bit</h2>
            </section>
            <section id="pageLinks">
                <div className="pages">
                    <h3>General Search</h3>
                    <GeneralSearchLink text="SEARCH" />
                </div>
            </section>
        </div>
    )
}
export default Home