import React from "react";
import "./feature.css";
import Button from "../../button/button";

import Lawyer from "../../../assets/img/abidemi.jpg";
import PurpleLine from "../../../assets/img/purple-line.jpg";
import PurpleLineLight from "../../../assets/img/purple-line-light.jpg";

function FeaturedAttorney() {
  return (
    <div className="featureDiv">
      <p style={{ color: "#828282" }}>Meet Our Senior Partner</p>
      <h1 style={{ color: "#310C4B" }}>Featured Attorney</h1>
      <hr className="HR" />

      <div className="featureDetailsDiv">
        <div className="featuring">
          <img src={Lawyer} alt="" className="lawyerImg" />
          <p className="featureName">
          Mrs. Abidemi Ademola
          </p>
          <p className="featurePosition">
          Senior Partner
          </p>
        </div>
        <p className="featureDetailsPar">
        Mrs. Abidemi Ademola is a highly skilled and well experienced Corporate Counsel, Governance Professional  and Executive Business Leader with over 27 years of Commercial Law and Corporate Governance practice in Nigeria and West Africa. Passionately driven by a personal purpose to build a lasting legacy by shaping capability in Law, Governance, Risk and Compliance, her forte is to proactively identify legal, regulatory, compliance and corporate governance risks and develop innovative mitigations/solutions to enable seamless operations and sustainability. Abidemi has been instrumental in building
        </p>
        <div className="featureDetailsDivInner">
            <Button>learn more</Button>
            <div className="lineDiv">
            <img src={PurpleLine} alt="" className="lineImg" />
            <img src={PurpleLineLight} alt="" className="lineImgLight" />
            <img src={PurpleLine} alt="" className="lineImg" />
            <img src={PurpleLineLight} alt="" className="lineImgLight" />
            <img src={PurpleLine} alt="" className="lineImg" />
            <img src={PurpleLineLight} alt="" className="lineImgLight" />
            <img src={PurpleLine} alt="" className="lineImg" />
            <img src={PurpleLineLight} alt="" className="lineImgLight" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedAttorney;
