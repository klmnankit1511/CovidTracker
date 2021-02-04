import React from "react";
import {NavLink} from "react-router-dom";
import "./Navigation.css"
export default function Navigation(){
    return(
       <div className="Navigation"> 
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/">PANDEMICHUB</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="nav navbar-nav">
              <li className="nav navbar-nav navbar-right"><NavLink to="/">Home</NavLink></li>
              <li class="nav navbar-nav navbar-right"><NavLink to="/country/mobility">Mobility</NavLink></li> 
              <li class="nav navbar-nav navbar-right"><NavLink to="/covid/test/intro">Test</NavLink></li>
              <li class="nav navbar-nav navbar-right"><NavLink to="/api/sourse">Resourse</NavLink></li> 
              <li class="nav navbar-nav navbar-right"><NavLink to="/member/about">About</NavLink></li> 
            </ul>
  </div>
</nav></div>
    
    )
} 