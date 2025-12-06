import React from "react";
import "./why-need.css";
import { motion } from "framer-motion";

function WhyNeed() {
  const features = [
    {
      number: "01",
      title: "Policy Compliance",
      description: "Ensuring all decisions align with applicable policies and governance requirements"
    },
    {
      number: "02",
      title: "Legal Expertise",
      description: "Three decades of innovative legal solutions and exceptional service delivery"
    },
    {
      number: "03",
      title: "Business Support",
      description: "Your trusted pillar for sustainable life and business transactions"
    }
  ];

  return (
    <section className="whyNeedSection">
      <div className="whyNeedContainer">
        
        <div className="whyNeedLayout">
          
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="whyNeedContent"
          >
            <h2 className="whyNeedTitle">Why You Need Us</h2>
            <div className="whyNeedDivider"></div>
            
            <p className="whyNeedText">
              When navigating life and business, you need to be dead sure that you are making 
              the right decisions aligned with all applicable policies, governance requirements, 
              laws and regulations.
            </p>

            <p className="whyNeedText">
              With almost three (3) decades of providing innovative legal solutions and delivering 
              exceptional legal services, the DFA team is well-equipped to act as your pillar of 
              support to successfully lock sustainable life and business transactions.
            </p>
          </motion.div>

          {/* Right Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="whyNeedFeatures"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="featureItem"
              >
                <div className="featureNumber">{feature.number}</div>
                <div className="featureContent">
                  <h4 className="featureTitle">{feature.title}</h4>
                  <p className="featureDescription">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default WhyNeed;
