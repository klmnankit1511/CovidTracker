import React,{useState,useEffect} from "react";
import axios from "axios";
import "./HelpLine.css";
import Box from "./Box"
export default function HelpLine(props){
    const [Data,setData] = useState([]);
    const [Search,setSearch] = useState();
    useEffect(()=>{
        axios.get("https://api.covid19india.org/resources/resources.json").then(res=>{
            // console.log(res.data);
            setData(res.data.resources)
        })
    })
    
    let filered1 = Data.filter((da)=>{
        return da.state.includes(props.states);
    })
    var handle = (e)=>{
        return setSearch(e.target.value)
      }
      let filered2 = filered1.filter((da)=>{
        return da.category.includes(Search);
    })
    return(<div className="help">
          <Box handle={handle}/>
          <br></br>
        <table>
                        <tr>
                            <td>City</td>
                            <td>Category</td>
                            <td>Organisation</td>
                            <td>Number</td>
                            <td>Contact</td>
                        </tr>
                        {filered2.map(data=>(
                                <tr>
                                <td>{data.city}</td>
                                <td>{data.category}</td>
                                <td>{data.nameoftheorganisation}</td>
                                <td>{data.phonenumber}</td>
                                <td><a href={data.contact}>Contact</a></td>
                        </tr>
                        ))}
             </table>  
    </div>)
}