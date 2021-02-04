import React from "react";

export default function Box(props){
    return(
        <div>
        <br></br><br></br><br></br>
        <select id="mySelect" onChange={props.handle}>
        <option>----Select----</option>
        <option value="CoVID-19 Testing Lab">CoVID-19 Testing Lab</option>
        <option value="Free Food">Free Food</option>
        <option value="Delivery [Vegetables, Fruits, Groceries, Medicines, etc.]">Delivery</option>
        <option value="Hospitals and Centers">Hospitals</option>
        <option value="Fundraisers">Fundraisers</option>
        <option value="Police">Police</option>
        </select>   
        </div>
        
    )
}