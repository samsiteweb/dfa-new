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
            As a prestigious law firm, we consistently are committed to
            delivering exceptional legal solutions. With a keen understanding of
            diverse legal matters, we provided comprehensive research, drafted
            persuasive legal documents, and effectively communicated with
            clients to address their needs. Collaborating closely with seasoned
            attorneys, we have contributed to successful case outcomes and
            assisted in complex negotiations. Our Team possesses strong
            analytical skills, a meticulous attention to detail, and a
            client-centered approach to problem-solving, solidifying our
            dedication to upholding the highest standards of legal excellence."
          </p>
          <div className="featureDetailsDivInner" >
            <Link to="/about"><Button>learn more</Button>  </Link>
            
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
