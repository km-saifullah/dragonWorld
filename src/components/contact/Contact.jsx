import React from "react";
import { LuMapPin } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import "./contact.css";

const Contact = () => {
  return (
    <div className="">
      <div className="conatct_logo">
        <img src="./logo.svg" alt="" />
        <h4>
          dragon<span className="logo_text">World</span>
        </h4>
      </div>
      <p className="contact_text">
        Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem
        Ipsum is dummy text of the printing.
      </p>
      <div className="contact_info">
        <div className="details">
          <LuMapPin className="contact_icon" />
          <p>Dragon Tower, Dhaka</p>
        </div>
        <div className="details">
          <BsTelephone className="contact_icon" />
          <p>+880 1111111111</p>
        </div>
        <div className="details">
          <IoMailOutline className="contact_icon" />
          <p>
            <a href="#">info@webmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
