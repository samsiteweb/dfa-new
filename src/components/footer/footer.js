import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../../assets/icons/logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footerContainer">
      {/* Premium Decorative Background Elements */}
      <div className="footerBgDecor">
        {/* Gradient Mesh Overlay */}
        <div className="decorMeshGradient"></div>
        
        {/* Geometric Shapes */}
        <div className="decorGeometric decorGeo1"></div>
        <div className="decorGeometric decorGeo2"></div>
        <div className="decorGeometric decorGeo3"></div>
        
        {/* Diagonal Lines */}
        <div className="decorDiagonal decorDiag1"></div>
        <div className="decorDiagonal decorDiag2"></div>
        
        {/* Grid Pattern */}
        <div className="decorGrid"></div>
        
        {/* Accent Bars */}
        <div className="decorBar decorBar1"></div>
        <div className="decorBar decorBar2"></div>
      </div>
      
      <div className="footerContent">
        <motion.div
          className="footerTop"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo Section */}
          <div className="footerBrand">
            <img src={logo} alt="DFA Solicitors" className="footerLogo" />
            <p className="footerTagline">Your Trusted Legal Partner</p>
          </div>

          {/* Navigation Grid */}
          <div className="footerNav">
            {/* Quick Links */}
            <div className="footerNavCol">
              <h4 className="footerNavTitle">Company</h4>
              <Link to="/" className="footerNavLink">Home</Link>
              <Link to="/about" className="footerNavLink">About Us</Link>
              <Link to="/esg/all-resources" className="footerNavLink">Resources</Link>
              <Link to="/contact" className="footerNavLink">Contact</Link>
            </div>

            {/* Practice Areas */}
            <div className="footerNavCol">
              <h4 className="footerNavTitle">Practice Areas</h4>
              <Link to="/practice-area#labour" className="footerNavLink">Labour Law</Link>
              <Link to="/practice-area#real-estate" className="footerNavLink">Real Estate</Link>
              <Link to="/practice-area#dispute" className="footerNavLink">Dispute Resolution</Link>
              <Link to="/practice-area#competition" className="footerNavLink">Competition Law</Link>
            </div>

            {/* More Practice Areas */}
            <div className="footerNavCol">
              <h4 className="footerNavTitle">Legal Services</h4>
              <Link to="/practice-area#data-privacy" className="footerNavLink">Data Privacy</Link>
              <Link to="/practice-area#corporate" className="footerNavLink">Corporate Law</Link>
              <Link to="/practice-area#employment" className="footerNavLink">Employment</Link>
              <Link to="/practice-area#dispute-resolution" className="footerNavLink">Dispute Resolution</Link>
            </div>

            {/* Contact Info */}
            <div className="footerNavCol">
              <h4 className="footerNavTitle">Get In Touch</h4>
              <a href="tel:+2348186963053" className="footerContactLink">
                <svg className="footerIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (+234) 818 696 3053
              </a>
              <a href="mailto:official@dfasolicitors.com" className="footerContactLink">
                <svg className="footerIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                official@dfasolicitors.com
              </a>
              <div className="footerContactLink">
                <svg className="footerIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mon - Fri: 9AM - 5PM
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="footerBottom">
          <div className="footerBottomLeft">
            <p className="footerCopyright">© {currentYear} DFA Solicitors. All rights reserved.</p>
          </div>
          <div className="footerBottomRight">
            <Link to="/privacy" className="footerBottomLink">Privacy Policy</Link>
            <span className="footerSeparator">|</span>
            <Link to="/terms" className="footerBottomLink">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
