import React from "react";
import "./need.css";

import Slide from "react-reveal/Slide";

import Image from "../../../assets/img/Picture Frame.jpg";
import Button from "../../button/button";
import { Link } from "react-router-dom";

const Need = () => {
  return (
    <div className="needContainer">
      <Slide left>
        <img src={Image} alt="" className="needImg" />
      </Slide>
      <Slide right>
        <div className="needDetails">
          <h2 className="needHeader">why you need us</h2>
          <p className="needP">
            When navigating life and business, you need to be dead sure that you
            are making the right decisions aligned with all applicable policies,
            governance requirements, laws and regulations.
          </p>
          <p className="needP">
            With almost three(3) decades of providing innovative legal solutions
            and delivering exceptional legal services, the DFA team is
            well-equipped to act as your pillar of support to successfully lock
            sustainable life and business transactions.
          </p>
          <div className="buttonDivNeed">
          <Link to="/about"> <Button>more about us</Button>  </Link>
            
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Need;
