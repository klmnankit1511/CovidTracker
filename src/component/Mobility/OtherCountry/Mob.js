import React,{useState} from "react";
import Box from "./Box";
import Cases from "./Case"
import Mobility from "./Mobility";
import "./Other.css"
export default function Mob(){
    const [search,setSearch] = useState();
  var handle = (e)=>{
    return setSearch(e.target.value)
  }

  
  return(
      <div className="container-fluid mob">
          <div className="row">
          <div className="col-lg-2"></div>
              <div className="col-lg-4">
                  <Box handle={handle}/>
                  <h1 className="sea">{search}</h1>
                 <Cases country={search}/> 
              </div>
              <div className="col-lg-6">
              <br></br>
              <h1>Mobility Report {search}</h1>
                  <Mobility country={search}/>
              </div>
          </div>
      </div>
  )
}