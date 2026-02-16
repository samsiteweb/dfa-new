import React from "react";
import { motion } from "framer-motion";
import "./practice-con1.css";

import Practice3 from "../../../assets/img/practice3.jpg";

const PracticeCon1 = () => {
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
            <span className="sectionNumber">01</span>
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
