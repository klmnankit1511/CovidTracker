import React,{useState,useEffect} from "react";
import axios from "axios";
import "./Mobility.css"

export default function MobilityIndia1(){
    const [Data,setData] = useState([]);
    useEffect(()=>{
        if(setData){
            axios.get("https://google-mobility-data.p.rapidapi.com/api/data?name=India&date=2020-03-29", {
            
            "headers": {
                "x-rapidapi-host": "google-mobility-data.p.rapidapi.com",
                "x-rapidapi-key": "0306ee9745msh15f45a6ba89d8afp109e44jsnd83a8a8157f5"
            }
        })
        .then(respone => {
            // console.log(respone.data);
            setData(respone.data)
        })
        }
        
  })

  return(
      <div className="mobility">
          {Data.map(datas=>(
            
              datas.data.map((da,i)=>(
                  <div>
                    <p>{da.type}</p>
                    <p>{da.change}</p>
                  </div>  
              ))
              
              
          ))}
      </div>
  )
}