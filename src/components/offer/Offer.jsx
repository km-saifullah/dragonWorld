import React from "react";
import "./offer.css";

const Offer = ({ photo, percentage, title, offtitle }) => {
  return (
    <div className="offer">
      <div className="offer_img">
        <img src={photo} alt="offers image not found" />
      </div>
      <div className="offer_details">
        <p>
          Up To <span className="percent">{percentage}</span> {title}
        </p>
        <h6>{offtitle}</h6>
      </div>
    </div>
  );
};

export default Offer;
