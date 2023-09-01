import React from "react";
import "./01-banner2.css";

import BG from "../../../assets/img/carousel-item-1.png";
import Header from "../../navbar/Navbar";

const Banner2 = () => {
  return (
    <div className="banner2Div">
      <Header />
      {/* <img src={BG} alt='' className='banner2Bg' /> */}
      <div className="banner2Details">
        <h1 className="banner2H1">Your Trusted Pillar For Life And Business</h1>
        <p className="banner2P">
          DFA Solicitors, We areDFA Solicitors, We areDFA Solicitors, We areDFA
          Solicitors, We areDFA Solicitors, We are
        </p>
      </div>
    </div>
  );
};

export default Banner2;
