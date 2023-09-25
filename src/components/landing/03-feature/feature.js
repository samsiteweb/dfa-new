import React from "react";
import "./feature.css";
import Button from "../../button/button";

import Slide from "react-reveal/Slide";
import Flip from "react-reveal/Flip";

import Lawyer from "../../../assets/img/abidemi.jpg";
import { Link } from "react-router-dom";

function FeaturedAttorney() {
  return (
    <div className="featureDiv">
      <Flip right>
        <h4 style={{ color: "#828282" }}>Meet Our Founder & Managing Partner</h4>
        <h1 style={{ color: "#310C4B" }}>Featured Attorney</h1>
        <hr className="HR" />
      </Flip>

      <div className="featureDetailsDiv">
        <Slide left>
          <div className="featuring">
            <img src={Lawyer} alt="" className="lawyerImg" />
            <h2 className="featureName">Mrs. Abidemi Ademola</h2>
            <h4 className="featurePosition">Managing Partner</h4>
          </div>
        </Slide>
        <Slide right>
          <p className="featureDetailsPar">
          Abidemi Ademola is a highly skilled and well experienced Corporate Counsel, Governance
          Professional and Executive Business Leader with over 27 years of Commercial Law and Corporate Governance practice in Nigeria and West Africa.
          </p>
          <p className="featureDetailsPar">
          Passionately driven by a personal purpose to build a lasting legacy by shaping capability in Law, Governance, Risk and Compliance, her forte is to proactively identify legal, regulatory, compliance and corporate governance risks and develop innovative mitigations/solutions to enable seamless operations and sustainability.
          </p>
          <div className="featureDetailsDivInner">
          <Link to="/about"> <Button>learn more</Button> </Link>
            {/* <div className="lineDiv">
            <img src={PurpleLine} alt="" className="lineImg" />
            <img src={PurpleLineLight} alt="" className="lineImgLight" />
            <img src={PurpleLine} alt="" className="lineImg" />
            <img src={PurpleLineLight} alt="" className="lineImgLight" />
            <img src={PurpleLine} alt="" className="lineImg" />
            <img src={PurpleLineLight} alt="" className="lineImgLight" />
            <img src={PurpleLine} alt="" className="lineImg" />
            <img src={PurpleLineLight} alt="" className="lineImgLight" />
            </div> */}
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default FeaturedAttorney;
