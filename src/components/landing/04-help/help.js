import React from "react";
import "./help.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
  const services = [
    { 
      icon: user, 
      title: "Legal Advisory & Consultancy", 
      description: "Strategic legal counsel to guide your business decisions and ensure compliance with regulatory frameworks.",
      category: "Advisory",
      featured: true
    },
    { 
      icon: anchor, 
      title: "Legal Risk Management", 
      description: "Proactive identification and mitigation of legal risks to protect your business interests.",
      category: "Governance",
      featured: false
    },
    { 
      icon: layers, 
      title: "Labour Law", 
      description: "Comprehensive employment law services, from contracts to dispute resolution and workplace compliance.",
      category: "Employment",
      featured: false
    },
    { 
      icon: slack, 
      title: "Technology Law", 
      description: "Navigate the digital landscape with expertise in software licensing, IP rights, and tech regulations.",
      category: "Innovation",
      featured: true
    },
    { 
      icon: home, 
      title: "Real Estate", 
      description: "Full-spectrum property law services covering transactions, development, and dispute resolution.",
      category: "Property",
      featured: false
    },
    { 
      icon: box, 
      title: "Business Law", 
      description: "End-to-end legal support for business operations, from incorporation to exit strategies.",
      category: "Corporate",
      featured: false
    },
    { 
      icon: dollar, 
      title: "Transactions & Projects", 
      description: "Expert guidance through complex business transactions, mergers, acquisitions, and project finance.",
      category: "Corporate",
      featured: true
    },
    { 
      icon: user, 
      title: "Corporate Secretaries", 
      description: "Professional company secretarial services ensuring statutory compliance and corporate governance.",
      category: "Governance",
      featured: false
    },
    { 
      icon: git, 
      title: "Dispute Resolution", 
      description: "Skilled representation in arbitration and alternative dispute resolution mechanisms.",
      category: "Dispute Resolution",
      featured: false
    },
    { 
      icon: eye, 
      title: "Data Privacy", 
      description: "Comprehensive data protection services, NDPR compliance, and privacy policy development.",
      category: "Compliance",
      featured: true
    },
    { 
      icon: pen, 
      title: "Training & Capability", 
      description: "Custom legal training programs to build in-house expertise and ensure regulatory compliance.",
      category: "Development",
      featured: false
    },
    { 
      icon: clipboard, 
      title: "Contracts & Agreements", 
      description: "Drafting, reviewing, and negotiating bespoke contracts tailored to your business needs.",
      category: "Documentation",
      featured: false
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      Advisory: { primary: "#9338b6", gradient: "linear-gradient(135deg, #9338b6, #7a2a9b)" },
      Governance: { primary: "#c58cdb", gradient: "linear-gradient(135deg, #c58cdb, #b06cc4)" },
      Employment: { primary: "#C62C89", gradient: "linear-gradient(135deg, #C62C89, #a82373)" },
      Innovation: { primary: "#8b3aa6", gradient: "linear-gradient(135deg, #8b3aa6, #6e2d85)" },
      Property: { primary: "#ba52d4", gradient: "linear-gradient(135deg, #ba52d4, #9c3fb8)" },
      Corporate: { primary: "#310c4b", gradient: "linear-gradient(135deg, #310c4b, #1e0729)" },
      "Dispute Resolution": { primary: "#d946a6", gradient: "linear-gradient(135deg, #d946a6, #b8368a)" },
      Development: { primary: "#a64db3", gradient: "linear-gradient(135deg, #a64db3, #883d94)" },
      Compliance: { primary: "#7c2d9e", gradient: "linear-gradient(135deg, #7c2d9e, #5f2279)" },
      Documentation: { primary: "#b75cc7", gradient: "linear-gradient(135deg, #b75cc7, #9745a8)" }
    };
    return colors[category] || colors.Advisory;
  };

  return (
    <section className="creativeHelpSection">
      {/* Background Decorative Elements */}
      <div className="helpBgDecor">
        <div className="helpFloatingShape shape1"></div>
        <div className="helpFloatingShape shape2"></div>
        <div className="helpFloatingShape shape3"></div>
        <div className="helpFloatingShape shape4"></div>
      </div>

      <div className="creativeHelpContainer">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="creativeHelpHeader"
        >
          <span className="creativeBadge">Areas of Practice</span>
          <h2 className="creativeHelpTitle">How Can We Help You?</h2>
          <p className="creativeHelpSubtitle">
            Delivering excellence across diverse legal disciplines with precision and dedication
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="bentoGrid">
          {services.map((service, index) => {
            const colors = getCategoryColor(service.category);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className={`bentoCard ${service.featured ? 'featured' : ''}`}
              >
                <div className="bentoCardInner">
                  {/* Front Face */}
                  <div className="cardFront">
                    <div className="cardTopBar" style={{ background: colors.gradient }}>
                      <span className="categoryTag">{service.category}</span>
                    </div>
                    <div className="cardContent">
                      <div 
                        className="bentoIconBox"
                        style={{ 
                          background: `linear-gradient(135deg, ${colors.primary}15, ${colors.primary}08)`
                        }}
                      >
                        <img src={service.icon} alt="" className="bentoIcon" />
                      </div>
                      <h3 className="bentoTitle">{service.title}</h3>
                      <p className="bentoDescription">{service.description}</p>
                      <div className="cardFooter">
                        <span className="learnMore" style={{ color: colors.primary }}>
                          Explore Service →
                        </span>
                      </div>
                    </div>
                    <div className="cardGlow" style={{ background: colors.gradient }}></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="helpCtaSection"
        >
          <div className="helpCtaCard">
            <div className="ctaContent">
              <h3 className="ctaTitle">Need Legal Consultation?</h3>
              <p className="ctaText">Let's discuss how we can support your legal needs</p>
            </div>
            <div className="ctaButtons">
              <Link to="/practice-area" className="ctaBtn primary">
                <span>View All Services</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link to="/contact" className="ctaBtn secondary">
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Help;
