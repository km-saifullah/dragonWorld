import React from "react";
import { IoIosSearch } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { PiShoppingCart } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav_wrapper">
          <div className="logo">
            <img className="logo_img" src="logo.svg" alt="Logo Not Found" />
            <p className="logo_text">
              dragon<span className="logo_name">World</span>
            </p>
          </div>
          <div className="menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/offers">Offers</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="nav_icons">
            <IoIosSearch className="navbar_icon" />
            <LuUser2 className="navbar_icon" />
            <PiShoppingCart className="navbar_icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
