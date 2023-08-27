import React from "react";
import "./about-founder.css";

import FounderImg from "../../../assets/img/founder.jpg";
import Twitter from "../../../assets/icons/socials/twitter.svg";
import Linkedin from "../../../assets/icons/socials/linkedin.svg";
import Instagram from "../../../assets/icons/socials/instagram.svg";
import Google from "../../../assets/icons/socials/google.svg";
import Youtube from "../../../assets/icons/socials/youtube.svg";

const AboutFounder = () => {
  return (
    <div className="aboutFounderContainer">
      <div className="aboutFounderTop">
        <div>
          <img src={FounderImg} className="founderImg" alt="" />
        </div>
        <div className="aboutFounderDetailsDiv">
          <p className="founderSub">About our Leader</p>
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
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
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
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.
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
  );
};

export default AboutFounder;
