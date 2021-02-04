import React from "react";
import "./Resourse.css";

export default function Payment() {
  return (
    <div className="payment">
      <div className="card">
        <div className="card1" >
          <div className="info">
          <h6>ORDER NUMBER</h6>
          <h4>6834990238</h4><br />
          
          <h6>AMOUNT</h6>
          <h4>₹251.40<h5 style={{display:"inline"}}>only</h5></h4>

          </div>
          <p className="rotate"></p>
          <p style={{marginLeft:"20%",color:"white"}}>MASTER CARD</p>
        </div>
        <div className="card2" >
          <p>MASTER CARD</p>
          <p style={{marginLeft:"20%"}}>></p>
          <hr />
          <form>
            <input placeholder="CARD HOLDER NAME" style={{width:"87%"}}/><br /><br /><br />
            <input placeholder="CARD NUMBER" style={{width:"87%"}} /><br /><br /><br />
            <input placeholder="EXPIRATION"/>
            <input placeholder="CVV" style={{marginLeft:"19%"}}/>
          </form>
          <br /><br /><br />
          <hr />
        </div>
      </div>
    </div>
  );
}
