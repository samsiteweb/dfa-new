import React from "react";
import "./header.css";

import Logo from "../../assets/icons/logo.svg";
import Menu from "../../assets/icons/menu.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerDivOutter">
      <div className="headerDiv">
        <Link to="/" className="logoDiv">
          <img src={Logo} alt="" className="logoImg" />
        </Link>
        <div className="options">
          <Link to="/" className="option">
            home
          </Link>
          <Link to="/about" className="option">
            about
          </Link>
          <Link to="/practice-area" className="option">
            practice areas
          </Link>
          <Link to="/contact" className="option">
            contact
          </Link>
          <Link to="/esg/all-resources" className="option">
            resources
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
                <Link to="/" className="link">
                  home
                </Link>
              </li>
              <li className="item">
                <Link to="/about" className="link">
                  about
                </Link>
              </li>
              <li className="item">
                <Link to="/practice-area" className="link">
                  practice area
                </Link>
              </li>
              <li className="item">
                <Link to="/contact" className="link">
                  contacts
                </Link>
              </li>
              <li className="item">
                <Link to="/esg/all-resources" className="link">
                  resources
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
