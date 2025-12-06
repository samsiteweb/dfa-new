import React from "react";
import "./about-founder.css";
import { motion } from "framer-motion";

import FounderImg from "../../../assets/img/founder.jpg";

const AboutFounder = () => {
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

      <div className="aboutFounderMiddle">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img src={FounderImg} className="founderImg" alt="" />
        </motion.div>
        <motion.div
          className="aboutFounderDetailsDiv"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h4 className="founderName">Mrs. Abidemi Ademola</h4>
          <p className="founderPosition">Senior Partner</p>
          <p className="founderIntro">
              A highly skilled and well experienced Corporate Counsel,
              Governance Professional and Executive Business Leader with over 27
              years of Commercial Law and Corporate Governance practice in
              Nigeria and West Africa. Passionately driven by a personal purpose
              to build a lasting legacy by shaping capability in Law,
              Governance, Risk and Compliance, her forte is to proactively
              identify legal, regulatory, compliance and corporate governance
              risks and develop innovative mitigations/solutions to enable
              seamless operations and sustainability. Abidemi has been
              instrumental in building strong legal teams and delivering several
              epic legal transactions and projects across West Africa.
            </p>
        </motion.div>
      </div>

      <div className="aboutFounderBottom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h4 className="founderSkills">Personal Experience</h4>
          <hr className="founderSkillsHR" />
          <p className="founderSkillsP">
            She has supported Boards in Nigeria, Ghana and Francophone Africa
            for over 10 years to implement world class Corporate Governance
            practices and processes with positive impact on Board effectiveness.
            In recognition of her wholesome contribution at Unilever, she was
            appointed as an Executive Director of Unilever Nigeria Plc. a
            positive culmination of her stellar in-house Counsel career. Her
            decision to set up DFA Solicitors is well aligned with her purpose
            to build a lasting legacy and leverage the opportunity for greater
            impact.
            </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h4 className="founderSkills">Education</h4>
          <hr className="founderSkillsHR" />
          <ul>
            <li className="founderSkillsP">
              Abidemi holds a Bachelor of Laws degree from the Obafemi Awolowo
              University, Ile-Ife.
            </li>
            <li className="founderSkillsP">
              a Master of Laws from the University of Lagos, Akoka and an MBA
              Leadership from Walden University, United States.
            </li>
            <li className="founderSkillsP">
              She is a Fellow of the Institute of Chartered Secretaries and
              Administrators of Nigeria (ICSAN) and was a member of ICSAN
              Governing Council in 2022/2023.{" "}
            </li>
            <li className="founderSkillsP">
              She is also a Fellow of the WIMBOARD Institute, a WIMBIZ/IE
              University, Madrid Executive Education Programme for Women on
              Boards.
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h4 className="founderSkills">membership</h4>
          <hr className="founderSkillsHR" />
          <ul>
            <li className="founderSkillsP">
              Abidemi is a member of the Nigerian Bar Association, the Society
              for Corporate Governance and the Institute of Directors, Nigeria.{" "}
            </li>
            <li className="founderSkillsP">
              She was the pioneer chairperson of the Corporate Counsel Committee
              of the NBA Section on Business Law{" "}
            </li>
            <li className="founderSkillsP">
              She is currently an Officer of the Corporate Counsel Committee of
              the NBA Women Forum.
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h4 className="founderSkills">Publications</h4>
          <hr className="founderSkillsHR" />
          <p className="founderSkillsP">
            Abidemi has authored articles and co-authored books on Law &
            Corporate Governance. She is a trained trainer, an international
            speaker and is currently on the training faculty of the Institute of
              Directors, Nigeria.
            </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutFounder;
