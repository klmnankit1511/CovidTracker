import React from "react";
import { NavLink } from "react-router-dom";

export default function Resource(){
    return(
        <div className="container-fluid Intro">
            <div className="row">
                <div className="col-lg-3">
                </div>
                <div className="col-lg-6">
            <br></br>
        <div className="resourse">
            <h1>Welcome</h1>
            <p style={{textAlign: "justify",fontSize: "30px"}}>We Offer data in the form of <bold>API</bold> to the Developer of making awesome website for awarness of coronavirus.Our Company Offers a very fast, low Latencyand fast Loading Api for development.We also offer api at very Low cost against our competitive Group.By purchasing our plan you also make your own api for our personal use.</p>
            <button><NavLink to="/api/sourse/plan">View Plan</NavLink></button>
        </div>
        </div>
        </div>
        </div>
    )
}