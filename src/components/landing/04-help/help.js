import React from "react";
import "./help.css";

import user from "../../../assets/icons/users.svg";
import anchor from "../../../assets/icons/anchor.svg";
import layers from "../../../assets/icons/layers.svg";
import slack from "../../../assets/icons/slack.svg";
import home from "../../../assets/icons/home.svg";
import dollar from "../../../assets/icons/dollar-sign.svg";
import git from "../../../assets/icons/git-pull-request.svg";
import pen from "../../../assets/icons/pen-tool.svg";
import eye from "../../../assets/icons/eye-off.svg";
import clipboard from "../../../assets/icons/clipboard.svg";
import box from "../../../assets/icons/codesandbox.svg";

const Help = () => {
  return (
    <div className="helpContainer">
      <p style={{ color: "#828282" }}>area of practice</p>
      <h1 style={{ color: "#310C4B" }}>How can we Help You</h1>
      <hr className="HR" />

      <div className="gridedGap">
        <div className="helpCard">
          <img src={user} alt="" className="helpImg" />
          <div>
            <h5 className="helpHeader">Legal Advisory & Consultancy</h5>
            <hr className="helpHR" />
            <p className="paragragh">
              There are many variations of passages of Lorem There are many
              variations of passages of Lorem
            </p>
          </div>
        </div>

        <div className="helpCard">
          <img src={anchor} alt="" className="helpImg" />
          <div>
            <h5 className="helpHeader">Legal Risk Management Compliance</h5>
            <hr className="helpHR" />
            <p className="paragragh">
              There are many variations of passages of Lorem There are many
              variations of passages of Lorem
            </p>
          </div>
        </div>

        <div className="helpCard">
          <img src={layers} alt="" className="helpImg" />
          <div>
            <h5 className="helpHeader">Labour Law</h5>
            <hr className="helpHR" />
            <p className="paragragh">
              There are many variations of passages of Lorem There are many
              variations of passages of Lorem
            </p>
          </div>
        </div>

        <div className="helpCard2">
          <img src={slack} alt="" className="helpImg" />
          <div>
            <h5 className="helpHeader">Technology Law</h5>
            <hr className="helpHR" />
            <p className="paragragh">
              There are many variations of passages of Lorem There are many
              variations of passages of Lorem
            </p>
          </div>
        </div>

        <div className="helpCard2">
          <img src={home} alt="" className="helpImg" />
          <div>
            <h5 className="helpHeader">Real Estate</h5>
            <hr className="helpHR" />
            <p className="paragragh">
              There are many variations of passages of Lorem There are many
              variations of passages of Lorem
            </p>
          </div>
        </div>

        <div className="helpCard2">
          <img src={dollar} alt="" className="helpImg" />
          <div>
            <h5 className="helpHeader">Transactions & Projects</h5>
            <hr className="helpHR" />
            <p className="paragragh">
              There are many variations of passages of Lorem There are many
              variations of passages of Lorem
            </p>
          </div>
        </div>

        <div className="helpCard3">
          <img src={user} alt="" className="helpImg" />
          <div>
            <h5 className="helpHeader">Corporate Secretaries</h5>
            <hr className="helpHR" />
            <p className="paragragh">
              There are many variations of passages of Lorem There are many
              variations of passages of Lorem
            </p>
          </div>
        </div>

        <div className="helpCard3">
          <img src={git} alt="" className="helpImg" />
          <div>
            <h5 className="helpHeader">Dispute Resolution</h5>
            <hr className="helpHR" />
            <p className="paragragh">
              There are many variations of passages of Lorem There are many
              variations of passages of Lorem
            </p>
          </div>
        </div>

        <div className="helpCard3">
          <img src={pen} alt="" className="helpImg" />
          <div>
            <h5 className="helpHeader">Trainings & Capability development</h5>
            <hr className="helpHR" />
            <p className="paragragh">
              There are many variations of passages of Lorem There are many
              variations of passages of Lorem
            </p>
          </div>
        </div>

        <div className="helpCard4">
          <img src={eye} alt="" className="helpImg" />
          <div>
            <h5 className="helpHeader">Data Privacy</h5>
            <hr className="helpHR" />
            <p className="paragragh">
              There are many variations of passages of Lorem There are many
              variations of passages of Lorem
            </p>
          </div>
        </div>

        <div className="helpCard4">
          <img src={clipboard} alt="" className="helpImg" />
          <div>
            <h5 className="helpHeader">Contracts & Bespoke Agreements</h5>
            <hr className="helpHR" />
            <p className="paragragh">
              There are many variations of passages of Lorem There are many
              variations of passages of Lorem
            </p>
          </div>
        </div>

        <div className="helpCard4">
          <img src={box} alt="" className="helpImg" />
          <div>
            <h5 className="helpHeader">Business Law</h5>
            <hr className="helpHR" />
            <p className="paragragh">
              There are many variations of passages of Lorem There are many
              variations of passages of Lorem
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
