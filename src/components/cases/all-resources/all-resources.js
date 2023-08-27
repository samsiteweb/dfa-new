import React from "react";
import { useNavigate } from "react-router-dom";
import "./all-resources.css";

import Image1 from "../../../assets/img/DFA Solicitors/Image.jpg";
import Button from "../../button/button";

const AllResources = () => {
  let navigate = useNavigate();
  return (
    <div className="AllResourcesDiv">
      <div className="allResourcesHeadDiv">
        <h1 className="allResourcesHead">All Resources</h1>
        <hr className="allResourcesHR" />
      </div>

      <div className="AllResourcesinner">
        <div>
          <img src={Image1} alt="" className="resourcesImg" />
        </div>
        <div className="allResourcesDetails">
          <h2 className="allResourcesTitle">
            Afrika Cheap Airline Tickets Case
          </h2>
          <p className="allResourcesPar">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <p className="allResourcesPar">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <p className="allResourcesPar">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <div className="allResourcesBtnDiv">
            <Button
              onClick={() => {
                navigate("/esg/all-resources/12345/resource");
              }}
            >
              read more...
            </Button>
          </div>
        </div>
      </div>

      <div className="AllResourcesinner">
        <div>
          <img src={Image1} alt="" className="resourcesImg" />
        </div>
        <div className="allResourcesDetails">
          <h2 className="allResourcesTitle">RealStasia Contract</h2>
          <p className="allResourcesPar">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <p className="allResourcesPar">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <p className="allResourcesPar">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <div className="allResourcesBtnDiv">
            <Button
              onClick={() => {
                navigate("/esg/all-resources/12345/resource");
              }}
            >
              read more...
            </Button>
          </div>
        </div>
      </div>

      <div className="AllResourcesinner">
        <div>
          <img src={Image1} alt="" className="resourcesImg" />
        </div>
        <div className="allResourcesDetails">
          <h2 className="allResourcesTitle">
            Cheap Airline Tickets Great Ways To Save
          </h2>
          <p className="allResourcesPar">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <p className="allResourcesPar">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <p className="allResourcesPar">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <div className="allResourcesBtnDiv">
            <Button
              onClick={() => {
                navigate("/esg/all-resources/12345/resource");
              }}
            >
              read more...
            </Button>
          </div>
        </div>
      </div>

      <div className="AllResourcesinner">
        <div>
          <img src={Image1} alt="" className="resourcesImg" />
        </div>
        <div className="allResourcesDetails">
          <h2 className="allResourcesTitle">Hotels and Suit Law Suits</h2>
          <p className="allResourcesPar">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <p className="allResourcesPar">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <p className="allResourcesPar">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <div className="allResourcesBtnDiv">
            <Button
              onClick={() => {
                navigate("/esg/all-resources/12345/resource");
              }}
            >
              read more...
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllResources;
