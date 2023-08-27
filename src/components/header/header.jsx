import React from "react";
import "./header.css";

import Logo from "../../assets/icons/logo.svg";
import Menu from "../../assets/icons/menu.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerDiv">
      <div className="logoDiv">
        <img src={Logo} alt="" className="logoImg" />
      </div>
      <div className="options">
        <Link to="/" className="option">
          home
        </Link>
        <Link to="/about" className="option">
          about
        </Link>
        <Link to="/practice-area" className="option">
          practice area
        </Link>
        <Link to="/esg" className="option">
          ESG
        </Link>
        <Link to="/team" className="option">
          team
        </Link>
        <Link to="/esg/all-resources" className="option">
          resources
        </Link>
        <Link to="/contact" className="option">
          contacts
        </Link>
      </div>

      <div className="mobileNav">
        <input type="checkbox" id="navi-toggle" className="checkbox" />
        <label for="navi-toggle" className="button">
          <img src={Menu} className="icon" alt="menu" />
        </label>

        <nav className="nav">
          <ul className="list">
            <li className="item">
              <a className="link">company</a>
            </li>
            <li className="item">
              <a className="link">about</a>
            </li>
            <li className="item">
              <a className="link">practice area</a>
            </li>
            <li className="item">
              <a className="link">ESG</a>
            </li>
            <li className="item">
              <a className="link">team</a>
            </li>
            <li className="item">
              <a className="link">resources</a>
            </li>
            <li className="item">
              <a className="link">contacts</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
