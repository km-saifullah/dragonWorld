import React from "react";
import "./slime.css";
import CommonBtn from "../../components/commonBtn/CommonBtn";

const Slime = () => {
  return (
    <div className="dragon_slime">
      <div className="container">
        <div className="slime_wrapper">
          <div className="slime_img">
            <img src="./dragonSlime.jpeg" alt="Dragon Slime not found" />
          </div>
          <div className="slime_details">
            <div className="slime_info">
              <h6 className="deals">🔥 Hot Deals</h6>
              <h2 className="slime_title">
                Dragon Fruit Slime Unique Products for kids
              </h2>
              <div className="slime_time">
                <div>155</div>
                <div>10</div>
                <div>25</div>
                <div>56</div>
              </div>
              <div className="slime_timeline">
                <p>Days</p>
                <p>Hour</p>
                <p>Minute</p>
                <p>Seconds</p>
              </div>
            </div>
            <CommonBtn title="Buy Now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slime;
