import React from "react";
import Offer from "../../components/offer/Offer";
import photo1 from "/fruit-1.jpeg";
import photo2 from "/fruit-3.jpeg";
import "./offers.css";
import CommonBtn from "../../components/commonBtn/CommonBtn";

const Offers = () => {
  return (
    <div className="offers">
      <div className="container">
        <div className="offers_wrapper">
          <div className="dragon_juice">
            <div>
              <p className="juice_heading">
                Red Dragon <span className="fruit_juice">Fruit Juice</span>
              </p>
              <p className="juice_details">
                Best Juice Flavour You will Never Miss
              </p>
              <CommonBtn title="Shop Now" />
            </div>
            <div className="juice_img">
              <img src="fruit-4.jpeg" alt="juice photo not found" />
            </div>
          </div>
          <div className="fruit_offer">
            <Offer
              photo={photo1}
              percentage="50%"
              title="Off On Fresh Fruit"
              offtitle="Starts from 99.0 BDT"
            />
            <Offer
              photo={photo2}
              percentage="30%"
              title="Off On Sliced Fruit"
              offtitle="Starts from 55.0 BDT"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
