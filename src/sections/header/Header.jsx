import React from "react";
import { HiOutlineMapPin } from "react-icons/hi2";
import { CiMail } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { SlSocialTwitter } from "react-icons/sl";
import { PiInstagramLogoThin } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import "./header.css";

const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <div className="heading_wrapper">
          <div className="mail_address">
            <div className="address">
              <HiOutlineMapPin className="pin_icon" />
              <p>Dragon Tower, Dhaka</p>
            </div>
            <div className="mail">
              <CiMail className="mail_icon" />
              <a href="mailto:info@webmail.com">
                <p>info@webmail.com</p>
              </a>
            </div>
          </div>
          <div className="social_icon">
            <CiFacebook className="social_link" />
            <SlSocialTwitter className="social_link" />
            <PiInstagramLogoThin className="social_link" />
            <CiLinkedin className="social_link" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
