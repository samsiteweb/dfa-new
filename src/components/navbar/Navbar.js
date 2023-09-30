import React, { useState } from "react";
import "./navbar.css";

import Logo from "../../assets/icons/logo.svg";
import Menu from "../../assets/icons/menu.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };
  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <nav>
      <div className="DesktopNav">
        <div className="logoDiv">
          <Link to="/">
            <img src={Logo} alt="" className="logoImg" />
          </Link>
        </div>
        <div className="options">
          <Link to="/" onClick={closeMenu} className="option">
            home
          </Link>
          <Link to="/about" onClick={closeMenu} className="option">
            about
          </Link>
          <Link to="/practice-area" onClick={closeMenu} className="option">
            practice area
          </Link>
          <Link to="/esg/all-resources" onClick={closeMenu} className="option">
            resources
          </Link>
          <Link to="/contact" onClick={closeMenu} className="option">
            contact
          </Link>
        </div>
      </div>
      <div className="logoDiv">
        <Link to="/">
          <img src={Logo} alt="" className="logoImgMobile" />
        </Link>
      </div>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleMenu}>
          Close
        </button>
        <div className="options">
          <Link to="/" onClick={closeMenu} className="option">
            home
          </Link>
          <Link to="/about" onClick={closeMenu} className="option">
            about
          </Link>
          <Link to="/practice-area" onClick={closeMenu} className="option">
            practice area
          </Link>
          <Link to="/esg/all-resources" onClick={closeMenu} className="option">
            resources
          </Link>
          <Link to="/contact" onClick={closeMenu} className="option">
            contact
          </Link>
        </div>
      </div>
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}>
        <img src={Menu} alt="HamburgerMenu" />
      </div>
      {menuOpen && <div className="overlay"></div>}
    </nav>
  );
};

export default Navbar;
