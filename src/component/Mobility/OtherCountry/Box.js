import React,{useState,useEffect} from "react";
import axios from "axios"
import "./Other.css"
export default function Box(props){
    const [Data,setData] = useState([]);
    useEffect(()=>{
        axios.get("https://api.covid19api.com/countries").then(res=>{
            // console.log(res.data);  
            setData(res.data)
        })
    })

    return(
        <div>
        
        <select id="mySelect" className="con-name" onChange={props.handle} style={{width:"200px"}}>
        <option>----Select Country----</option>
        {Data.map(data=>(
            <option value={data.Country}>{data.Country}</option>
        ))}
        </select>   
        </div>
        
    )
}