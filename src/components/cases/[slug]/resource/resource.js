import React from "react";
import "./resource.css";
import ResourceBG from "../../../../assets/img/DFA Solicitors (1)/Image.jpg";

const Resource = () => {
  return (
    <div className="resourceDiv">
      
      <h1 className="resourceHead">
        Why Legal Advisor is Needed before starting your business
      </h1>
      <p className="resourceP">
        Corem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <img src={ResourceBG} alt="" className="resourceImg" />

      <div>
        <h2 className="resourceTitle">Corem ipsum dolor sit amet</h2>
        <p className="resourcePar">
          Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Corem ipsum dolor sit amet, consectetur adipiscing
          elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos.
        </p>
        <p className="resourcePar">
          Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Corem ipsum dolor sit amet, consectetur adipiscing
          elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos.
        </p>
        <h2 className="resourceTitle">Corem ipsum dolor sit amet</h2>
        <p className="resourcePar">
          consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
          ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Corem ipsum dolor
          sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
          interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos.
        </p>
      </div>

    </div>
  );
};

export default Resource;
