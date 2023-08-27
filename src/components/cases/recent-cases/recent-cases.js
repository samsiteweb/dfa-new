import React from "react";
import { useNavigate } from "react-router-dom";
import "./recent-cases.css";

import Button from "../../button/button";

import RecentCasesImg1 from "../../../assets/img/recent-cases-1.jpg";
import RecentCasesImg2 from "../../../assets/img/recent-cases-2.jpg";

import Rectangle1 from "../../../assets/img/Rectangle1.jpg";
import Rectangle2 from "../../../assets/img/Rectangle2.jpg";
import Rectangle3 from "../../../assets/img/Rectangle3.jpg";
import Arrow from "../../../assets/icons/arrow.svg";

const RecentCases = () => {
  let navigate = useNavigate();
  return (
    <div className="articleContainer">
      <div className="articleTop">
        <div className="articleTopDetails">
          <h4 className="articleTopH4">Resources</h4>
          <p className="articleTopP">Here’s what we've been up to recently.</p>
        </div>
        <div className="articleBtn">
          <Button
            onClick={() => {
              navigate("/esg/all-resources");
            }}
          >
            view all
          </Button>
        </div>
      </div>

      <div className="recentCasesDiv">
        <div className="articleCard">
          <img src={RecentCasesImg1} alt="" className="articleImg" />
          <div className="articleCardDetails">
            <h4 className="articleHeader">
              Strike A million dollar real estate deal
            </h4>
            <div className="articleInner">
              <p className="articleUser">Aliza Anne | Jul 01, 2019</p>
              <div className="articleLinkDiv">
                <a href="/" className="articleLink">
                  read more
                </a>
                <img src={Arrow} alt="" className="articleImg2" />
              </div>
            </div>
          </div>
        </div>
        <div className="articleCard">
          <img src={RecentCasesImg2} alt="" className="articleImg" />
          <div className="articleCardDetails">
            <h4 className="articleHeader">
              When we represent you, you always win
            </h4>
            <div className="articleInner">
              <p className="articleUser">Aliza Anne | Jul 01, 2019</p>
              <div className="articleLinkDiv">
                <a href="/" className="articleLink">
                  read more
                </a>
                <img src={Arrow} alt="" className="articleImg2" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="articleCardDiv">
        <div className="articleCard">
          <img src={Rectangle1} alt="" className="articleImg" />
          <div className="articleCardDetails">
            <h4 className="articleHeader">How to choose a good lawyer?</h4>
            <div className="articleInner">
              <p className="articleUser">Aliza Anne | Jul 01, 2019</p>
              <div className="articleLinkDiv">
                <a href="/" className="articleLink">
                  read more
                </a>
                <img src={Arrow} alt="" className="articleImg2" />
              </div>
            </div>
          </div>
        </div>

        <div className="articleCard">
          <img src={Rectangle2} alt="" className="articleImg" />
          <div className="articleCardDetails">
            <h4 className="articleHeader">How to choose a good lawyer?</h4>
            <div className="articleInner">
              <p className="articleUser">Aliza Anne | Jul 01, 2019</p>
              <div className="articleLinkDiv">
                <a href="/" className="articleLink">
                  read more
                </a>
                <img src={Arrow} alt="" className="articleImg2" />
              </div>
            </div>
          </div>
        </div>

        <div className="articleCard">
          <img src={Rectangle3} alt="" className="articleImg" />
          <div className="articleCardDetails">
            <h4 className="articleHeader">How to choose a good lawyer?</h4>
            <div className="articleInner">
              <p className="articleUser">Aliza Anne | Jul 01, 2019</p>
              <div className="articleLinkDiv">
                <a href="/" className="articleLink">
                  read more
                </a>
                <img src={Arrow} alt="" className="articleImg2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentCases;
