import React from "react";
import "./about-dfa.css";
import { motion } from "framer-motion";

const AboutDfaSolicitors = () => {
  return (
    <div className="aboutFounderContainer">
      <motion.div
        className="aboutFounderTop"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h4 style={{ color: "#828282" }}>Welcome To DFA Solicitors</h4>
        <h1 style={{ color: "#310C4B" }}>Firm Overview</h1>
        <hr className="HR" />
      </motion.div>

      <div className="aboutFounderBottom">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="founderSkillsP" style={{lineHeight: "50px", marginBottom: "20px"}}>
            DFA Solicitors is a general Law & Governance practice borne out of the desire and passion to build to last and help our clients (personal and corporate) to develop and grow their endeavours sustainably through world class services.
          </p>
          <p className="founderSkillsP" style={{lineHeight: "50px", marginBottom: "20px"}}>
          At DFA Solicitors, we go above and beyond to satisfy and exceed client expectation through gaining in-depth knowledge of context and peculiarities and providing bespoke services that address and resolve specific needs and requirements.
          We work with our clients to craft innovative solutions to life and business issues and build sustainable framework to enable them operate with confidence and deliver on their objectives.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
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
        </motion.div>

        <motion.div
          className="aboutFounderTop"
          style={{marginTop: "80px"}}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h1 style={{ color: "#310C4B" }}>Purpose</h1>
          <hr className="HR" />
        </motion.div>

      <div style={{marginBottom: "50px"}}>
      <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="founderSkillsP" style={{textAlign: "center", lineHeight: "50px", marginBottom: "20px"}}>
          To build a sustainable world class practice renowned for solution, innovation, talent and expertise.
          </p>
        </motion.div>
    </div>
        <div style={{marginBottom: "50px"}}>
        <motion.div
          className="aboutFounderTop"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h1 style={{ color: "#310C4B" }}>Our Vision</h1>
          <hr className="HR" />
        </motion.div>
      </div>
      <div style={{marginBottom: "50px"}}>
      <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="founderSkillsP" style={{textAlign: "center", lineHeight: "50px", marginBottom: "20px"}}>
          To be the first choice for innovative and sustainable solutions in Law, Corporate Governance and related matters.
          </p>
        </motion.div>
      </div>
      </div>
    </div>
  );
};

export default AboutDfaSolicitors;
