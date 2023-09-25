import React from "react";
import "./about-founder.css";

import Slide from "react-reveal/Slide";
import Flip from "react-reveal/Flip";

const AboutDfa = () => {
  return (
    <div className="aboutFounderContainer">
      <Flip right>
        <div className="aboutFounderTop">
          <h4 style={{ color: "#828282" }}>Welcome To DFA Solicitors</h4>
          <h1 style={{ color: "#310C4B" }}>Firm Overview</h1>
          <hr className="HR" />
        </div>
      </Flip>

      <div className="aboutFounderBottom">
        <Slide left>
          <p className="founderSkillsP" style={{lineHeight: "50px", marginBottom: "20px"}}>
            DFA Solicitors is a general Law & Governance practice borne out of the desire and passion to build to last and help our clients (personal and corporate) to develop and grow their endeavours sustainably through world class services.
          </p>
          <p className="founderSkillsP" style={{lineHeight: "50px", marginBottom: "20px"}}>
          At DFA Solicitors, we go above and beyond to satisfy and exceed client expectation through gaining in-depth knowledge of context and peculiarities and providing bespoke services that address and resolve specific needs and requirements.
          We work with our clients to craft innovative solutions to life and business issues and build sustainable framework to enable them operate with confidence and deliver on their objectives.
          </p>
        </Slide>
        <Slide right>
          <h4 className="founderSkills" style={{ color: "#310C4B", fontWeight: "bolder" }}>Core Values</h4>
          <hr className="founderSkillsHR" />
          <ul style={{ listStyleType: 'square' }}>
            <li className="founderSkillsP founderSkillsList">
            Integrity
            </li>
            <li className="founderSkillsP founderSkillsList">
            Excellence 
            </li>
            <li className="founderSkillsP founderSkillsList">
            Value
            </li>
          </ul>
        </Slide>

        <Slide right>
          <h4 className="founderSkills" style={{ color: "#310C4B", fontWeight: "bolder" }}>Our Modus Operandi</h4>
          <hr className="founderSkillsHR" />
          <ul style={{ listStyleType: 'square' }}>
            <li className="founderSkillsP founderSkillsList">
            Personalized service
            </li>
            <li className="founderSkillsP founderSkillsList">
            Collaboration & Partnerships
            </li>
            <li className="founderSkillsP founderSkillsList">
            Concise & Demystify
            </li>
            <li className="founderSkillsP founderSkillsList">
            Innovative solutions
            </li>
            <li className="founderSkillsP founderSkillsList">
            Economies of scale
            </li>
          </ul>
        </Slide>

        <Flip right>
        <div className="aboutFounderTop" style={{marginTop: "80px"}}>
          <h1 style={{ color: "#310C4B" }}>Purpose</h1>
          <hr className="HR" />
        </div>
      </Flip>
      <div style={{marginBottom: "50px"}}>
      <Slide left>
          <p className="founderSkillsP" style={{textAlign: "center", lineHeight: "50px", marginBottom: "20px"}}>
          To build a sustainable world class practice renowned for solution, innovation, talent and expertise.
          </p>
        </Slide>
    </div>
        <div style={{marginBottom: "50px"}}>
        <Flip right>
        <div className="aboutFounderTop">
          <h1 style={{ color: "#310C4B" }}>Our Vision</h1>
          <hr className="HR" />
        </div>
      </Flip>
      </div>
      <div style={{marginBottom: "50px"}}>
      <Slide left>
          <p className="founderSkillsP" style={{textAlign: "center", lineHeight: "50px", marginBottom: "20px"}}>
          To be the first choice for innovative and sustainable solutions in Law, Corporate Governance and related matters.
          </p>
        </Slide>
      </div>
      </div>
    </div>
  );
};

export default AboutDfa;
