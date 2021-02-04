import React,{useState,useEffect} from "react";
import axios from "axios";
import "./Other.css";


export default function Cases(props){
    console.log(props.country);
    
    const [Data,setData] = useState([]);
    
    var con;
    var con1= props.country
    var d = new Date();
    var year = d.getFullYear();
    var month =d.getMonth() + 1;
    var date = d.getDate()-2;
    var Dates = year+"-0"+month+"-0"+date;
    console.log(con1);
    
    if(con1!=null){
        // console.log(true);
        con=con1
    }
    else{
        // console.log(false);
        con="India"
    }
    useEffect(()=>{
        axios.get("https://covid-19-data.p.rapidapi.com/report/country/name?date-format=YYYY-MM-DD&format=json&date="+Dates+"&name="+con, {
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "0306ee9745msh15f45a6ba89d8afp109e44jsnd83a8a8157f5"
	}
})
.then(res => {
    console.log(res.data);
    setData(res.data)
})
  })
  
  
  return(
      <div className="case">
      <br></br>
      {Data.map((data) =>(
                data.provinces.map(da=>(
                    <div>
                    <p className="active">Active<br></br>{da.active}</p>
                    <p className="confirmed">Confirmed<br></br>{" "+da.confirmed}</p>
                    <p className="death">Deaths<br></br>{" "+da.deaths}</p>
                    <p className="recovered">Recovered<br></br>{" "+da.recovered}</p>
                    </div>
                    
                ))
            ))}
      </div>
  )
}