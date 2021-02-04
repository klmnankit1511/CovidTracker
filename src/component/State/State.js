import React,{useState,useEffect} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
import "./State.css"
import MobilityIndia2 from "../Mobility/India/MobilityIndia2";
import MobilityIndia1 from "../Mobility/India/MobilityCountry1";
import Spinner from "../Spinner/Spinner";
export default function State(){
    const [Data,setData] = useState([]);
    const [ani,setAni]=useState(false)
    useEffect(()=>{
        setAni(true)
        axios.get("https://api.covid19india.org/data.json").then(res=>{
            // console.log(res.data.statewise);
            
            setData(res.data.statewise)
        })
    })
    var mobilityIndia1 = <MobilityIndia1 />
    if(ani){
        mobilityIndia1 = <Spinner></Spinner>
    }
    return(
        <div className="container-fluid state">
        <div className="row">
        <div className="col-lg-3"><h1><br></br>About <br></br>Covid'19</h1></div>
        <div class="col-lg-8 col-sm-12 about">
			
			<p>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
             Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.  Older people, and those with underlying medical problems like cardiovascular disease, diabetes, chronic respiratory disease, and cancer are more likely to develop serious illness.
             The best way to prevent and slow down transmission is be well informed about the COVID-19 virus, the disease it causes and how it spreads. Protect yourself and others from infection by washing your hands or using an alcohol based rub frequently and not touching your face. 
             The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow).
             At this time, there are no specific vaccines or treatments for COVID-19. However, there are many ongoing clinical trials evaluating potential treatments. WHO will continue to provide updated information as soon as clinical findings become available.</p>
		</div>
        </div>
            <div className="row">
                <div className="col-lg-6">
                    <table>
                        <tr>
                            <td className="">State</td>
                            <td className="confirmed">Confirm</td>
                            <td className="active">Active</td>
                            <td className="recovered">Recovered</td>
                            <td className="death">Died</td>
                        </tr>
                        {Data.map(data=>(
                            <tr>
                            <td className="state2"><li><NavLink to={"/"+data.state} style={{color:"grey"}}>{data.state}</NavLink></li></td>
                            <td className="confirmed2">{data.confirmed}</td>
                            <td className="active2">{data.active}</td>
                            <td className="recovered2">{data.recovered}</td>
                            <td className="death2">{data.deaths}</td>
                        </tr>
                        ))}
                    </table>
                </div>
                <div className="col-lg-6">
                <h1>Mobility Report India</h1>
                <br></br>
                    
                     <h1>2020-03-29</h1>       
                    {mobilityIndia1}
                    <br></br>
                    <h1>2020-04-05</h1>
                    <MobilityIndia2 />
                    <br></br>
                    <p><NavLink to="country/mobility" className="moblink">Mobility</NavLink></p>
                </div>
            </div>
        </div>
    )
}