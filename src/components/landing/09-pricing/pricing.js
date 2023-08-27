import React from "react";
import "./pricing.css";

import box from "../../../assets/icons/box.svg";
import Button from "../../button/button";

const Pricing = () => {
  return (
    <div className="pricingContainer">
      <p>area of practice</p>
      <h1>our pricing</h1>
      <hr className="HR" />

      <div className="pricingCardDiv">
        <div className="pricingCard">
          <img src={box} alt="" className="pricingImg" />
          <p className="pricingP">Starter Plan</p>
          <h2 className="pricingH2">$250</h2>
          <p className="pricingPar">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <div className="pricingBtnDiv">
            <Button>get started</Button>
          </div>
        </div>

        <div className="pricingCard">
          <img src={box} alt="" className="pricingImg" />
          <p className="pricingP">basic Plan</p>
          <h2 className="pricingH2">$500</h2>
          <p className="pricingPar">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <div className="pricingBtnDiv">
            <Button>get started</Button>
          </div>
        </div>

        <div className="pricingCard">
          <img src={box} alt="" className="pricingImg" />
          <p className="pricingP">advanced Plan</p>
          <h2 className="pricingH2">$1000</h2>
          <p className="pricingPar">
            Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <div className="pricingBtnDiv">
            <Button>get started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
