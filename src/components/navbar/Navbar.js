import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

import logo from "../../assets/icons/logo.svg";

const Header = () => {
  return (
    <div className="navContainer">
      <div className="navContainerInner">
        <div>
          <img src={logo} alt="" className="logo" />
        </div>
        <div className="options">
          <Link to="/" className="option">
            home
          </Link>
          <Link to="/" className="option">
            about
          </Link>
          <Link to="/" className="option">
            practice area
          </Link>
          <Link to="/" className="option">
            contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
