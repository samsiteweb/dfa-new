import React from "react";
import "./need.css"

import Image from "../../../assets/img/Picture Frame.jpg";
import Button from "../../button/button";

const Need = () => {
  return (
    <div className="needContainer">
      <img src={Image} alt="" className="needImg" />
      <div className="needDetails">
        <h2 className="needHeader">why you need us</h2>
        <p className="needP">
          When navigating life and business, you need to be dead sure that you
          are making the right decisions aligned with all applicable policies,
          governance requirements, laws and regulations.
        </p>
        <p className="needP">
          With almost three(3) decades of providing innovative legal solutions
          and delivering exceptional legal services, DFA Solicitors is
          well-equipped to act as your pillar of support to successfully lock
          sustainable life and business transactions.
        </p>
        <div className="buttonDivNeed">
          <Button>more about us</Button>
        </div>
      </div>
    </div>
  );
};

export default Need;
