import React from 'react';
import { motion } from 'framer-motion';
import "./contact-banner.css";

const ContactBanner = () => {
  return (
    <div className="contactHero">
      {/* Background Decorations */}
      <div className="contactHeroBg">
        <div className="heroDecor heroDecor1"></div>
        <div className="heroDecor heroDecor2"></div>
        <div className="heroDecor heroDecor3"></div>
      </div>

      {/* Content */}
      <div className="contactHeroContent">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="contactHeroText"
        >
          <span className="contactBadge">Get In Touch</span>
          <h1 className="contactHeroTitle">Let's Discuss Your Legal Needs</h1>
          <p className="contactHeroSubtitle">
            Our experienced team is ready to provide expert legal guidance. 
            Reach out today for a consultation.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="contactInfoCards"
        >
          <div className="contactInfoCard">
            <div className="cardIcon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="cardContent">
              <h3 className="cardLabel">Phone</h3>
              <a href="tel:+2348186963053" className="cardValue">(+234) 818 696 3053</a>
              <p className="cardSubtext">Mon-Fri 9AM - 5PM</p>
            </div>
          </div>

          <div className="contactInfoCard">
            <div className="cardIcon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="cardContent">
              <h3 className="cardLabel">Email</h3>
              <a href="mailto:official@dfasolicitors.com" className="cardValue">official@dfasolicitors.com</a>
              <p className="cardSubtext">We'll respond within 24 hours</p>
            </div>
          </div>

          <div className="contactInfoCard">
            <div className="cardIcon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="cardContent">
              <h3 className="cardLabel">Office</h3>
              <p className="cardValue">Lagos, Nigeria</p>
              <p className="cardSubtext">Visit by appointment only</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactBanner;
