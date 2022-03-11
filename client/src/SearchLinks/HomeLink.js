import React from "react"
import { Link } from "react-router-dom"

function HomeLink(){
    return(
        <div>
            <Link to="/" className="nav-btn">HOME </Link>
        </div>
    )
}
export default HomeLink