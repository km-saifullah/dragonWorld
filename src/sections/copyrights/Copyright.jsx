import React from "react";
import "./copyright.css";

const Copyright = () => {
  return (
    <div className="copyright">
      <div className="container">
        <div className="copyright_wrapper">
          <div className="copyright_text">
            <p>All Rights Reserved @ dragonWorld</p>
          </div>
          <div>
            <ul className="copyright_list">
              <li>
                <a href="#">Privacy & Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
