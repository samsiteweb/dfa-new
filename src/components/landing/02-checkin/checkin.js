import React from "react";
import { Link } from "react-router-dom";
import "./checkin.css";

import calender from "../../../assets/icons/calender.svg";
import award from "../../../assets/icons/award.svg";
import contact from "../../../assets/icons/contact.svg";

const Checkin = () => {
  return (
    <div className="checkinContainer">
      <div className="checkinContainerInner">
        <div className="checkinCard">
          <div className="checkiniconsDiv">
            <img src={calender} alt="" className="checkinImg" />
          </div>
          <div>
            <div className="detailsDiv">
              <Link to="/">
                <h4 className="subHeading">book your</h4>
                <h2 className="smallHeading">appointment</h2>
              </Link>
            </div>
          </div>
        </div>

        <div className="checkinCard">
          <div className="checkiniconsDiv">
            <img src={award} alt="" className="checkinImg" />
          </div>
          <div>
            <div className="detailsDiv">
              <Link to="/">
                <h4 className="subHeading">get free</h4>
                <h2 className="smallHeading">expert advice</h2>
              </Link>
            </div>
          </div>
        </div>

        <div className="checkinCard">
          <div className="checkiniconsDiv">
            <img src={contact} alt="" className="checkinImg" />
          </div>
          <div>
            <div className="detailsDiv">
              <Link to="/contact">
                <h4 className="subHeading">you can easily</h4>
                <h2 className="smallHeading">contact us</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkin;
