import React from "react";
import "./feedback.css";

const Feedback = ({ clientName, designation, msg, photo }) => {
  return (
    <div className="feedback">
      <div className="client_img">
        <img src={photo} alt="client photo not found" />
      </div>
      <div className="client_feedback">
        <p className="msg">{msg}</p>
        <h4 className="clientName">{clientName}</h4>
        <p className="designation">{designation}</p>
      </div>
    </div>
  );
};

export default Feedback;
