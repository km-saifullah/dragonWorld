import React from "react";
import "./service.css";

const Service = ({ service, text, serial }) => {
  return (
    <div className="service">
      <div className="service_icon">{serial}</div>
      <div className="service_details">
        <h3>{service}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Service;
