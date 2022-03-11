import React from "react"
import { Link } from "react-router-dom"

function GeneralSearchLink(){
    return(
        <div>
            <button >
                <Link to="/generalSearch">Enter</Link>
            </button>
        </div>
    )
}
export default GeneralSearchLink