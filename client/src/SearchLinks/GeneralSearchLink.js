import React from "react"
import { Link } from "react-router-dom"
import "../stylesfolder/linkStyle.css"

function GeneralSearchLink(props){
    return(
        <div>
            <Link to="/generalSearch" className="nav-btn">{props.text}</Link>
        </div>
    )
}
export default GeneralSearchLink