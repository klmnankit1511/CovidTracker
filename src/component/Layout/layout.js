import React from "react";
import {BrowserRouter,Route} from "react-router-dom";
import State from "../State/State";
import District from "../District/District"
import Quiz from "../Quiz/Quiz"
import Mob from "../Mobility/OtherCountry/Mob";
import Navigation from "../Navigation/Navigation";
import Member from "../Member/Member";
import QuizIntro from "../Quiz/QuizIntro";
import Resource from "../Resourse/Resource";
import Plan from "../Resourse/Plan";
import Payment from "../Resourse/Payment";

export default function Layout(){
    return(
        <BrowserRouter basename="/ankit">
        
            <Navigation></Navigation>
            <Route render={() =><h1>Hello</h1>} />
            <Route path="/api/sourse" exact component={Resource} />
            <Route path="/api/sourse/plan" exact component={Plan} />
            <Route path="/api/sourse/payments" exact component={Payment} />
            <Route path="/" exact component={State} />
            <Route path="/covid/test/intro" exact component={QuizIntro} />
            <Route path="/covid/test" exact component={Quiz} />
            <Route path="/country/mobility" exact component={Mob} />
            <Route path="/member/about" exact component={Member}/>
            <Route path="/:id" exact component={District} />
        </BrowserRouter>
        
    )
}
