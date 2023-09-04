import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

import Slide from "react-reveal/Slide";

import card from "../../assets/img/footer-card.png";
import logo from "../../assets/icons/logo.svg";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerTop">
        <Slide left>
          <div>
            <h2 className="footerH2">
              Get our stories delivered From us to your inbox weekly.
            </h2>
            <div className="newsletter">
              <input
                type="email"
                placeholder="your email"
                className="footerInput"
              />
              <button className="newsletterBtn">get started </button>
            </div>
            <p className="footerP">
              Get a response tomorrow if you submit by 9pm today. If we received
              after 9pm will get a reponse the following day.
            </p>
          </div>
        </Slide>

        <Slide right>
          <div>
            <img src={card} alt="" className="footerTopRight" />
          </div>
        </Slide>
      </div>

      <div className="footerMiddle">
        <div>
          <img src={logo} alt="" className="footerLogo" />
        </div>
        <div>
          <h2 className="productH2">product</h2>
          <Link to="/" className="productLink">
            Home
          </Link>
          <Link to="/about" className="productLink">
            about
          </Link>
          <Link to="/practice-area" className="productLink">
            practice area
          </Link>
          <Link to="/contact" className="productLink">
            contact
          </Link>
          <Link to="/esg/all-resources" className="productLink">
                  resources
          </Link>
        </div>
        <div>
          <h2 className="productH3">practice areas</h2>
          <a href="/" className="productLink">
            labour law
          </a>
          <a href="/" className="productLink">
            real estate
          </a>
          <a href="/" className="productLink">
            dispute resolution
          </a>
          <a href="/" className="productLink">
            competition law
          </a>
          <a href="/" className="productLink">
            data privacy
          </a>
        </div>
        <div>
          <h2 className="productH2">contact us</h2>
          <p className="productLink">
            Address: 6b Chief Collins Uchiduno street, Lekki Phase 1 Lagos
          </p>
          <p className="productLink">Phone No: +234 8034023891</p>
          <p className="productLink">
            Email Address: DFASolicitors@outlook.com
          </p>
        </div>
      </div>
      <hr className="footerHR" />
      <p className="footerBottom">
        Privacy Policy | © 2023 Barristar. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
