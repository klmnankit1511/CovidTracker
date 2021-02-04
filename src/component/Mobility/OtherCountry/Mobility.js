import React,{useState,useEffect} from "react";
import axios from "axios";
import "./Other.css"


export default function Mobility(props){
    var con
    if(props.country!=null){
        // console.log(true);
        con=props.country
    }
    else{
        // console.log(false);
        con="India"
    }
    const [Data,setData] = useState([]);
    useEffect(()=>{
        axios.get("https://google-mobility-data.p.rapidapi.com/api/data?name="+con+"&date=2020-04-05", {
            "headers": {
                "x-rapidapi-host": "google-mobility-data.p.rapidapi.com",
                "x-rapidapi-key": "0306ee9745msh15f45a6ba89d8afp109e44jsnd83a8a8157f5"
            }
        })
        .then(respone => {
            console.log(respone.data);
            setData(respone.data)
        })
  })
  
  return(
      <div>
          {Data.map(datas=>(
              datas.data.map(da=>(
                  <div className="mob-report">
                  <p>{da.type}</p>
                  <p>{da.change}</p>
                  </div>
              )) 
          ))}
      </div>
  )
}