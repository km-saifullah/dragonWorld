import React from "react";
import CommonBtn from "../../components/commonBtn/CommonBtn";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner_wrapper">
          <div className="banner_info">
            <div className="banner_icon">
              <img src="bannerIcon.png" alt="Banner Icon Not Found" />
              <p className="banner_subtitle">100% genuine Products</p>
            </div>
            <h1 className="main_heading">Tasty and Healthy Organic Food</h1>
            <CommonBtn title="Explore Products" />
          </div>
          <div className="banner_img">
            <img src="banner.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
