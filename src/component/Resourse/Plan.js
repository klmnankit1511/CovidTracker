import React from "react";
import { NavLink } from "react-router-dom";

export default function Plan(){
    return(
        <div className="container plan">
            <div className="row">
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Basic</h2>
        <p className="card-text">Requests 50000 / month quota </p>
        <p className="card-text"><bold>1 requests per second</bold></p>
        <p style={{fontSize:"20px",fontWeight:"bold"}}><bold>₹151.40/mo</bold> </p>
        <NavLink to="/api/sourse/payments" className="btn btn-primary">Purchase</NavLink>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Pro</h2>
        <p className="card-text">Requests Unlimited</p>
        <p className="card-text"><bold>20 requests per second</bold></p>
        <p><bold style={{fontSize:"20px",fontWeight:"bold"}}>₹251.40/mo</bold></p>
        <NavLink to="/api/sourse/payments"  className="btn btn-primary">Purchase</NavLink>
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Ultra</h2>
        <p className="card-text"><bold>Requests Unlimited</bold></p>
        <p className="card-text">-</p>
        <p><bold style={{fontSize:"20px",fontWeight:"bold"}}>₹351.40/mo</bold></p>
        <NavLink to="/api/sourse/payments"  className="btn btn-primary">Purchase</NavLink>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}