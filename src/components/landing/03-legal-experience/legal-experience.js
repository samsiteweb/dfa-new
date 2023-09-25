import React from "react";
import "./legal-experience.css";
import Slide from "react-reveal/Slide";

import Button from "../../button/button";
import { Link } from "react-router-dom";

function LegalExperience() {
  return (
    <Slide left>
      <div className="legalDiv">
        <h4 style={{ color: "#828282" }}>Welcome to DFA SOLICITORS</h4>
        <h1 style={{ color: "#310C4B" }}>Over 3 Decades of Legal Experience</h1>
        <hr className="HR" />

        <div className="legalDetailsDiv">
          <p className="legalDetailsPar">
          We are consistently committed to delivering exceptional legal solutions. With a keen understanding of diverse legal matters, we provide comprehensive research, top notch advice / documentation, and effective resolution to address clients’ needs. Collaborating closely with seasoned attorneys, we have contributed to successful outcomes and assisted in complex negotiations and transactions. 
          Our Team possesses strong technical skills, meticulous attention to details, and a client-centered approach to problem-solving, solidifying our dedication to upholding the highest standards of excellence.
          </p>
          <div className="featureDetailsDivInner" >
            <Link to="/about-dfa-solicitors"><Button>learn more</Button>  </Link>
            
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
        </div>
      </div>
    </Slide>
  );
}

export default LegalExperience;
