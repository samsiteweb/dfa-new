import React from "react";
import "./experience.css";

import Line from "../../../assets/icons/Line 3.svg";
import Gift from "../../../assets/icons/giftWhite.svg";
import Home from "../../../assets/icons/homeWhite.svg";
import Paste from "../../../assets/icons/pasteWhite.svg";
import Fingerprint from "../../../assets/icons/fingerprintWhite.svg";

const Experience = () => {
  return (
    <div className="experienceContainer">
      <div className="purpleOverlay">
        <div className="experienceDetails">
          <h2 className="experienceHeader">20 Years Of Experience</h2>
          <p className="experiencePar">
            We’re proud that our law firm offers top-notch legal services for a
            nationwide affordable pricing! With us you’ll never feel like the
            lawyers are just robbers in suits, besides, we win 98% of all cases.
            So with us, your chances of winning are as high as they possibly can
            be!
          </p>
        </div>
        <hr className="lineHR" />

        <div className="boxFlex">

          <div className="boxFlexCard">
            <img src={Gift} alt="" className="boxFlexImg" />
            <p className="boxFlexPar">Dedicated Lawyer</p>
            <h4 className="boxFlexH4">50 +</h4>
          </div>

          <div className="boxFlexCard">
            <img src={Paste} alt="" className="boxFlexImg" />
            <p className="boxFlexPar">Case Dismissed</p>
            <h4 className="boxFlexH4">5 %</h4>
          </div>

          <div className="boxFlexCard">
            <img src={Fingerprint} alt="" className="boxFlexImg" />
            <p className="boxFlexPar">Trusted Client</p>
            <h4 className="boxFlexH4">100</h4>
          </div>

          <div className="boxFlexCard">
            <img src={Home} alt="" className="boxFlexImg" />
            <p className="boxFlexPar">Cases Won</p>
            <h4 className="boxFlexH4">10 %</h4>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;
