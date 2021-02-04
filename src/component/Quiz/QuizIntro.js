import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import "./quiz.css"
import MainQuiz from "./mainquiz";
export default function QuizIntro(props){
    const [data1,setData1]= useState();
    const [data2,setData2]= useState();
    var handle1 = (e)=>{
        return setData1(e.target.value)
      }
      var handle2 = (e)=>{
        return setData2(e.target.value)
      }
    return(
        <div className="container-fluid Intro">
            <div className="row">
                <div className="col-lg-3">
                </div>
                <div className="col-lg-6">
                <h1>Welcome</h1>
            <br></br>
            <p>This is a hyptical Test for check that you have any symthoms Regarding Covid-19 .In this test we asked some Question regarding you Health Status and Travel Histroy.Any Do'nt Worry Your information safe and we doesn't share with unauthorized People or Company </p>
            <input type="text" onChange={handle1} placeholder="Please Enter Name"/><br></br><br></br>
            <input type="text" onChange={handle2} placeholder="Please Enter Number"/>
            <div style={{display:"none"}}><MainQuiz name={data1}/></div>
            
            <br></br><br></br>
            <p ><NavLink to="/covid/test" className="link">Start</NavLink> </p>
                </div>
            </div>
        </div>
    )
}