import React from "react";
import "./about-dfa.css";
import { motion } from "framer-motion";

const AboutDfaSolicitors = () => {
  return (
    <div className="aboutDfaContainer">
      <motion.div
        className="aboutDfaHeader"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h4 className="aboutDfaSubtitle">Welcome To DFA Solicitors</h4>
        <h1 className="aboutDfaTitle">Firm Overview</h1>
        <hr className="HR" />
      </motion.div>

      <div className="aboutDfaContent">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="aboutDfaTextSection"
        >
          <p className="aboutDfaText">
            DFA Solicitors is a general Law & Governance practice borne out of the desire and passion to build to last and help our clients (personal and corporate) to develop and grow their endeavours sustainably through world class services.
          </p>
          <p className="aboutDfaText">
            At DFA Solicitors, we go above and beyond to satisfy and exceed client expectation through gaining in-depth knowledge of context and peculiarities and providing bespoke services that address and resolve specific needs and requirements.
            We work with our clients to craft innovative solutions to life and business issues and build sustainable framework to enable them operate with confidence and deliver on their objectives.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="aboutDfaValuesSection"
        >
          <h3 className="aboutDfaValuesTitle">Core Values</h3>
          <div className="aboutDfaValuesList">
            <div className="aboutDfaValue">
              <span className="valueIcon">✓</span>
              <span className="valueText">Integrity</span>
            </div>
            <div className="aboutDfaValue">
              <span className="valueIcon">✓</span>
              <span className="valueText">Excellence</span>
            </div>
            <div className="aboutDfaValue">
              <span className="valueIcon">✓</span>
              <span className="valueText">Value</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutDfaSolicitors;
