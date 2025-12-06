import React from "react";
import "./legal-experience.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function LegalExperience() {
  const achievements = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Client-Centered",
      description: "Bespoke solutions tailored to your unique needs"
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Rapid Response",
      description: "Fast turnaround on complex legal matters"
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "Strategic Excellence",
      description: "Comprehensive legal strategies that deliver results"
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Expert Team",
      description: "Seasoned attorneys with decades of experience"
    }
  ];

  return (
    <section className="premiumWelcomeSection">
      {/* Background Decorations */}
      <div className="welcomeBgDecor">
        <div className="welcomeShape welcomeShape1"></div>
        <div className="welcomeShape welcomeShape2"></div>
        <div className="welcomeGridPattern"></div>
      </div>

      <div className="welcomeContainer">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="welcomeHeader"
        >
          <span className="welcomeBadge">
            <span className="badgeIcon">✦</span>
            Welcome to DFA Solicitors
          </span>
          <h2 className="welcomeTitle">
            Over <span className="titleHighlight">3 Decades</span> of Legal Excellence
          </h2>
          <div className="welcomeDivider">
            <span className="dividerDot"></span>
            <span className="dividerLine"></span>
            <span className="dividerDot"></span>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="welcomeContent">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="welcomeText"
          >
            <p className="welcomeParagraph">
              We are consistently committed to delivering exceptional legal solutions. 
              With a keen understanding of diverse legal matters, we provide comprehensive 
              research, top-notch advice, documentation, and effective resolution to address 
              clients' needs.
            </p>
            <p className="welcomeParagraph">
              Collaborating closely with seasoned attorneys, we have contributed to successful 
              outcomes and assisted in complex negotiations and transactions. Our team possesses 
              strong technical skills, meticulous attention to detail, and a client-centered 
              approach to problem-solving, solidifying our dedication to upholding the highest 
              standards of excellence.
            </p>

            <Link to="/about" className="welcomeCtaBtn">
              <span>Discover Our Story</span>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          {/* Achievement Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="achievementGrid"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                className="achievementCard"
              >
                <div className="achievementIcon">
                  {achievement.icon}
                </div>
                <h3 className="achievementTitle">{achievement.title}</h3>
                <p className="achievementDesc">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Feature Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="welcomeFeatureBar"
        >
          <div className="featureBarItem">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <span>Certified & Accredited</span>
          </div>
          <div className="featureBarDivider"></div>
          <div className="featureBarItem">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Global Reach, Local Expertise</span>
          </div>
          <div className="featureBarDivider"></div>
          <div className="featureBarItem">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>24/7 Legal Support</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default LegalExperience;
