import React from "react";
import "./footerLink.css";

const FooterLink = (props) => {
  return (
    <div className="">
      <ul className="company_link">
        <h6 className="link_title">{props.title}</h6>
        <li>
          <a href="#">{props.link1}</a>
        </li>
        <li>
          <a href="#">{props.link2}</a>
        </li>
        <li>
          <a href="#">{props.link3}</a>
        </li>
        <li>
          <a href="#">{props.link4}</a>
        </li>
        <li>
          <a href="#">{props.link5}</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterLink;
