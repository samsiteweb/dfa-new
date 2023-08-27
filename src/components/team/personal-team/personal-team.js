import React from "react";
import "./personal-team.css";

import TeamPersonalBanner from "../../../assets/img/lily.jpg";

import FounderImg from "../../../assets/img/founder.jpg";
import Twitter from "../../../assets/icons/socials/twitter.svg";
import Linkedin from "../../../assets/icons/socials/linkedin.svg";
import Instagram from "../../../assets/icons/socials/instagram.svg";
import Google from "../../../assets/icons/socials/google.svg";
import Youtube from "../../../assets/icons/socials/youtube.svg";

import PCases1 from "../../../assets/img/pcases1.jpg";
import PCases2 from "../../../assets/img/pcases2.jpg";
import PCases3 from "../../../assets/img/pcases3.jpg";
import PCases4 from "../../../assets/img/pcases4.jpg";
import Button from "../../button/button";

const PersonalTeam = () => {
  return (
    <div>
      <div>
        <img
          src={TeamPersonalBanner}
          alt=""
          className="teamPersonalBannerImg"
        />
      </div>

      <div className="aboutFounderContainer">
        <div className="aboutFounderContainerTop">
          <p className="aboutFounderParg">Meet Our Experts</p>
          <h2 className="aboutFounderHead1">Important Information</h2>
          <hr className="aboutFounderHR1" />
        </div>

        <div className="aboutFounderTop">
          <div>
            <img src={FounderImg} className="founderImg" alt="" />
          </div>
          <div className="aboutFounderDetailsDiv">
            <p className="founderSub">What people say</p>
            <h2 className="founderName">Darcy Alec</h2>
            <hr className="founderHR" />

            <p className="founderDetailsProper">Positon: Senior Lawyer</p>
            <p className="founderDetailsProper">
              Practice Areas: Family Lawyer, Criminal Defence, Personal Injury
            </p>
            <p className="founderDetailsProper">Experience: 10 Years </p>
            <p className="founderDetailsProper">Phone: 0800.123.456 </p>
            <p className="founderDetailsProper">Email: youremail@gmail.com </p>
            <p className="founderDetailsProper">Fax: 6985231456 </p>

            <div className="socialsDiv">
              <img src={Twitter} className="social-img" alt="" />
              <img src={Linkedin} className="social-img" alt="" />
              <img src={Instagram} className="social-img" alt="" />
              <img src={Google} className="social-img" alt="" />
              <img src={Youtube} className="social-img" alt="" />
            </div>
          </div>
        </div>

        <div className="aboutFounderBottom">
          <h4 className="founderSkills">Personal Experience</h4>
          <hr className="founderSkillsHR" />
          <p className="founderSkillsP">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
            <br /> <br />
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
          </p>

          <h4 className="founderSkills">Education</h4>
          <hr className="founderSkillsHR" />
          <p className="founderSkillsP">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
            <br /> <br />
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
          </p>

          <h4 className="founderSkills">Language</h4>
          <hr className="founderSkillsHR" />
          <p className="founderSkillsP">
            French(fluent), English(fluent), Greek , chinese.
          </p>
        </div>
      </div>

      <div className="pCasesDiv">
        <h2 className="pCasesH2">Participated Case</h2>
        <div className="pCasesImgDiv">
          <img src={PCases1} className="pCasesImg" alt="" />
          <img src={PCases2} className="pCasesImg" alt="" />
          <img src={PCases3} className="pCasesImg" alt="" />
          <img src={PCases4} className="pCasesImg" alt="" />
        </div>
      </div>

      <div className="pCasesFormDiv">
        <div className="aboutFounderContainerBottom">
          <p className="aboutFounderParg2">Meet Our Experts</p>
          <h2 className="aboutFounderHead2">Quick Contact Form</h2>
          <hr className="aboutFounderHR2" />
        </div>

        <div className="pCasesFormDivInner">
          <form>
            <div className="inputDiv">
              <input type="text" placeholder="your name*" className="input2" />
              <input type="text" placeholder="your email*" className="input2" />
              <input type="text" placeholder="your phone*" className="input2" />
              <input type="text" placeholder="address" className="input2" />
            </div>
            <textarea className="textarea">your message*</textarea>
            <div className="btnDiv">
              <Button>book appointment</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalTeam;
