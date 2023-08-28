import React from "react";
import "./pricing.css";

import box from "../../assets/icons/box.svg";
import Button from "../button/button";

const Pricing = () => {
  return (
    <div className="practicePricingDiv">
      <div className="practicePricingOverlay">
        <p style={{ color: "#C58CDB" }}>Choose From</p>
        <h1 style={{ color: "#fff", fontSize: "48px" }}>Our Pricing Plans</h1>
        <hr className="pricingHR" />

        <div className="pricingCardDiv">
          <div className="pricingCard">
            <img src={box} alt="" className="pricingImg" />
            <p className="pricingP">Starter Plan</p>
            <h2 className="pricingH2">Flat Fee</h2>
            <p className="pricingPar">
              This plan is best for big cases and comes with benefits such as
              access to various legal experts, cutting edge products and free
              legal advice
            </p>
            <div className="pricingBtnDiv">
              <Button>get started</Button>
            </div>
          </div>

          <div className="pricingCard">
            <img src={box} alt="" className="pricingImg" />
            <p className="pricingP">basic Plan</p>
            <h2 className="pricingH2">Hourly Fee</h2>
            <p className="pricingPar">
              This plan is best suited for appearances at case management
              conferences, Alternative Dispute Resolution centres, arbitral
              tribunals and other similar proceedings.
            </p>
            <div className="pricingBtnDiv">
              <Button>get started</Button>
            </div>
          </div>

          <div className="pricingCard">
            <img src={box} alt="" className="pricingImg" />
            <p className="pricingP">Started Plan</p>
            <h2 className="pricingH2">Premium</h2>
            <p className="pricingPar">
              This plan is for high worth clients on a general retainer for a
              period of 15 years. It is also a plan for foreign clients planning
              long term investments in the Nigerian economy.
            </p>
            <div className="pricingBtnDiv">
              <Button>get started</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
