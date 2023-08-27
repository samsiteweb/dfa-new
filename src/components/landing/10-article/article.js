import React from "react";
import "./article.css";
import Button from "../../button/button";

import Rectangle1 from "../../../assets/img/Rectangle1.jpg";
import Rectangle2 from "../../../assets/img/Rectangle2.jpg";
import Rectangle3 from "../../../assets/img/Rectangle3.jpg";
import Arrow from "../../../assets/icons/arrow.svg";

const Article = () => {
  return (
    <div className="articleContainer">
      <div className="articleTop">
        <div className="articleTopDetails">
          <h4 className="articleTopH4">Resources</h4>
          <p className="articleTopP">Here’s what we've been up to recently.</p>
        </div>
        <div className="articleBtn">
          <Button>view all</Button>
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

export default Article;
