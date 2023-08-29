import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import Button from "../button/button";

import card from "../../assets/img/footer-card.png";
import logo from "../../assets/icons/logo.svg";

import Twitter from "../../assets/icons/socials/twitter.svg";
import Linkedin from "../../assets/icons/socials/linkedin.svg";
import Instagram from "../../assets/icons/socials/instagram.svg";
import Google from "../../assets/icons/socials/google.svg";
import Youtube from "../../assets/icons/socials/youtube.svg";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerTop">
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
            <Button>get started</Button>
          </div>
          <p className="footerP">
            Get a response tomorrow if you submit by 9pm today. If we received
            after 9pm will get a reponse the following day.
          </p>
        </div>
        <div>
          <img src={card} alt="" className="footerTopRight" />
        </div>
      </div>

      <div className="footerMiddle">
        <div>
          <img src={logo} alt="" className="footerLogo" />
          <p className="logoDetails">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature
          </p>
          <div className="socialsDiv">
            <img src={Twitter} className="social-img" alt="" />
            <img src={Linkedin} className="social-img" alt="" />
            <img src={Instagram} className="social-img" alt="" />
            <img src={Google} className="social-img" alt="" />
            <img src={Youtube} className="social-img" alt="" />
          </div>
        </div>
        <div>
          <h2 className="productH2">product</h2>
          <Link to="/" className="productLink">
            Home
          </Link>
          <Link to="/" className="productLink">
            about
          </Link>
          <Link to="/" className="productLink">
            practice area
          </Link>
          <Link to="/" className="productLink">
            attorneys
          </Link>
          <Link to="/" className="productLink">
            blog
          </Link>
          <Link to="/" className="productLink">
            contact
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
