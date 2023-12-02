import React from "react";
import Contact from "../../components/contact/Contact";
import FooterLink from "../../components/footerlist/FooterLink";
import { LuSendHorizonal } from "react-icons/lu";
import { FaCcAmex } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa6";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="contact_info">
            <Contact />
          </div>
          <div className="company_info">
            <FooterLink
              title="Company"
              link1="About"
              link2="Blog"
              link3="All Products"
              link4="Shop"
              link5="Contact Us"
            />
          </div>
          <div className="service_info">
            <FooterLink
              title="Service"
              link1="Order Tracking"
              link2="Wishlist"
              link3="Login"
              link4="My Account"
            />
          </div>
          <div className="customer_info">
            <FooterLink
              title="Customer Care"
              link1="Sign Up"
              link2="Feedback"
              link3="FAQ"
              link4="Contact Us"
            />
          </div>
          <div className="newsletter_info">
            <h6 className="newsletter_title">Newsletter</h6>
            <p className="newsletter_text">
              Subscribe to our weekly Newsletter and receive updates via email.
            </p>
            <div className="newsletter_form">
              <input type="text" placeholder="Enter Your Email" />
              <button className="btn">
                <LuSendHorizonal className="send_icon" />
              </button>
            </div>
            <div className="payment">
              <h4>We Accept</h4>
              <div className="payment_methods">
                <img className="payment_icon" src="./bkash.svg" alt="" />
                <img className="payment_icon" src="./nagad.svg" alt="" />
                <FaCcVisa className="payment_icon" />
                <FaCcMastercard className="payment_icon" />
                <FaCcAmex className="payment_icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
