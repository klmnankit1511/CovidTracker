import React, { useState, useEffect } from "react";
import axios from "axios";
import "./District.css";
import HelpLine from "../HelpLine/HelpLine";
export default function District(props) {
  const [Data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.covid19india.org/v2/state_district_wise.json")
      .then(res => {
        setData(res.data);
      });
  });
  var arr = ["Maharashtra","Rajasthan"]
  var a = []
  for(var i=0;i<arr.length;i++){
    let b = Data.filter(da => {
    return da.state.includes(arr[i]);
  });
  a = a.concat(b);
  }
  let filered = Data.filter(da => {
    return da.state.includes(props.match.params.id);
  });
// console.log(a[0]);
  return (
    <div className="container-fluid district">
      <div className="row">
        <br />
        <div className="col-lg-6">
          <caption>
            {" "}
            <h1>{props.match.params.id}</h1>{" "}
          </caption>
          <table>
            <tr>
              <td>City</td>
              <td>Confirmed</td>
              <td>Actived</td>
              <td>Recovered</td>
              <td>Deceased</td>
            </tr>
            {filered.map(dis =>
            
              dis.districtData.map(data => (
                
                <tr>
                  <td>{data.district}</td>
                  <td>{data.confirmed}</td>
                  <td>{data.active}</td>
                  <td>{data.recovered}</td>
                  <td>{data.deceased}</td>
                </tr>
              ))
            )}
          </table>
        </div>
        <div className="col-lg-6">
          <HelpLine states={props.match.params.id} />
        </div>
      </div>
    </div>
  );
}
