import React from "react";
import { motion } from "framer-motion";
import "./practice-con1.css";

import Practice2 from "../../../assets/img/practice2.jpg";
import Practice3 from "../../../assets/img/practice3.jpg";

const PracticeCon1 = () => {
  const personalServices = [
    "Legal advisory and consultancy",
    "Contracts & Bespoke Agreements",
    "Start Up & Technology Law",
    "Employment Law",
    "Data Privacy",
    "Regulatory & enforcement",
    "Antitrust/Competition Law",
    "Intellectual Property",
    "Transactions & Projects",
    "Corporate Governance & Board Advisory/Services (Evaluation & Trainings)",
    "Case Assessment/Review",
    "Commercial Dispute Resolution",
    "Legal Risk Management"
  ];

  const corporateServices = [
    "Legal advisory and consultancy",
    "Contracts & Bespoke Agreements",
    "Start Up & Technology Law",
    "Employment Law",
    "Data Privacy",
    "Regulatory & enforcement",
    "Antitrust/Competition Law",
    "Intellectual Property",
    "Transactions & Projects",
    "Corporate Governance & Board Advisory/Services (Evaluation & Trainings)",
    "Case Assessment/Review",
    "Commercial Dispute Resolution",
    "Legal Risk Management"
  ];

  return (
    <div className="premiumPracticeContainer">
      {/* Personal Litigation Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="practiceSection"
      >
        <div className="practiceSectionHeader">
          <div className="sectionTitleWrapper">
            <span className="sectionNumber">01</span>
            <h2 className="sectionTitle">Personal Litigation</h2>
          </div>
          <div className="sectionDivider"></div>
        </div>

        <div className="practiceImageWrapper">
          <img src={Practice2} alt="Personal Litigation" className="practiceImage" />
          <div className="practiceImageOverlay"></div>
        </div>

        <div className="practiceContent">
          <p className="practiceDescription">
            Personal law deals with issues such as marriage, divorce, child custody,
            adoption, domestic violence, spousal support, property division, and
            more. Attorneys specializing in personal law play a crucial role in
            providing legal counsel, guidance, and representation to individuals and
            families navigating these often emotionally charged situations.
          </p>
          <p className="practiceDescription">
            The aim of personal law is to ensure fairness, protection, and
            resolution in matters that involve personal relationships and familial
            obligations. It seeks to balance legal requirements with the human and
            emotional complexities involved in family matters. As societal norms and
            values evolve, personal law continues to adapt to better serve the needs
            of diverse individuals and families while upholding justice and
            compassion in the realm of personal relationships.
          </p>
        </div>

        <div className="servicesWrapper">
          <h3 className="servicesTitle">Our Services</h3>
          <div className="servicesGrid">
            {personalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="serviceCard serviceCardPink"
              >
                <svg className="serviceIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Corporate Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="practiceSection"
      >
        <div className="practiceSectionHeader">
          <div className="sectionTitleWrapper">
            <span className="sectionNumber">02</span>
            <h2 className="sectionTitle">Corporate</h2>
          </div>
          <div className="sectionDivider"></div>
        </div>

        <div className="practiceImageWrapper">
          <img src={Practice3} alt="Corporate Law" className="practiceImage" />
          <div className="practiceImageOverlay"></div>
        </div>

        <div className="practiceContent">
          <p className="practiceDescription">
            Corporate Law is a core practice area of our firm, advising businesses 
            at every stage of their lifecycle. We provide comprehensive legal support 
            on the formation, structuring, governance, and dissolution of companies 
            and other business entities. Our services address the legal rights, 
            responsibilities, and obligations of corporations, shareholders, directors, 
            officers, and key stakeholders, ensuring compliance with applicable laws 
            while supporting efficient and strategic business operations.
          </p>
        </div>

        <div className="servicesWrapper">
          <h3 className="servicesTitle">Our Services</h3>
          <div className="servicesGrid">
            {corporateServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="serviceCard serviceCardPurple"
              >
                <svg className="serviceIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default PracticeCon1;
