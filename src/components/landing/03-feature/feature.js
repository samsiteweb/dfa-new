import React from "react";
import "./feature.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Lawyer from "../../../assets/img/abidemi.jpg";

function FeaturedAttorney() {
  return (
    <section className="magazineSection">
      <div className="magazineContainer">
        
        <div className="magazineLayout">
          
          {/* Left - Full Height Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="magazineImageColumn"
          >
            <div className="magazineImageWrapper">
              <img src={Lawyer} alt="Mrs. Abidemi Ademola" className="magazineImage" />
              <div className="magazineOverlay">
                <div className="overlayContent">
                  <span className="overlayBadge">Managing Partner</span>
                  <p className="overlayYears">27+ Years of Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="magazineContent"
          >
            <div className="contentInner">
              <p className="contentLabel">Meet Our Leader</p>
              <h2 className="contentName">Mrs. Abidemi Ademola</h2>
              <div className="contentDivider"></div>
              
              <p className="contentBio">
                A highly skilled and well-experienced Corporate Counsel, Governance Professional, 
                and Executive Business Leader with over 27 years of Commercial Law and Corporate 
                Governance practice in Nigeria and West Africa. Former Executive Director at Unilever Nigeria Plc.
              </p>

              {/* Compact Credentials */}
              <div className="compactCredentials">
                <div className="compactCredRow">
                  <span className="credPill">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    LL.B • LL.M • MBA
                  </span>
                  <span className="credPill">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Fellow - ICSAN
                  </span>
                  <span className="credPill">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    Fellow - WIMBOARD
                  </span>
                </div>
              </div>

              {/* Expertise */}
              <div className="expertiseSection">
                <h4 className="expertiseTitle">Core Expertise</h4>
                <div className="expertiseTags">
                  <span className="expTag">Corporate Law</span>
                  <span className="expTag">Governance & Compliance</span>
                  <span className="expTag">Risk Management</span>
                  <span className="expTag">Executive Leadership</span>
                </div>
              </div>

              <Link to="/about" className="magazineButton">
                <span>View Full Profile</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default FeaturedAttorney;
