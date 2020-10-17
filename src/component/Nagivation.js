import React from "react";
import {Link} from "react-router-dom"
import "./Nagivation.css"

function Nagivation(){
    return(
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Nagivation;