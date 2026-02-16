import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./banner.css";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const slides = [
    {
      image: require("../../../assets/img/carousel-item-2.png"),
      badge: "Excellence in Legal Practice",
      title: "Law, Corporate Governance & Corporate Services",
      subtitle: "Delivering world-class legal solutions for over 30 years",
    },
    {
      image: require("../../../assets/img/carousel-item-1.png"),
      badge: "Your Legal Partner",
      title: "Your Trusted Pillar For Life And Business",
      subtitle: "Protecting your interests with expertise and dedication",
    },
    {
      image: require("../../../assets/img/carousel-item-3.png"),
      badge: "The DFA Promise",
      title: "Diligent, Fast and Ally",
      subtitle: "Committed to excellence in every legal matter",
    },
    {
      image: require("../../../assets/img/carousel-item-4.png"),
      badge: "Our DNA",
      title: "Deft, Formidable & Astute",
      subtitle: "Strategic legal counsel that drives success",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsVisible(true);
      }, 500);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index) => {
    if (index !== currentSlide) {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsVisible(true);
      }, 500);
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="premiumHero">
      {/* Background Image Layer */}
      <div className="heroBackgroundLayer">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="heroBackgroundImage"
            style={{ backgroundImage: `url(${currentSlideData.image})` }}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="heroOverlay" />
        <div className="heroGradientOverlay" />
      </div>

      {/* Decorative Elements */}
      <div className="heroDecorElements">
        <div className="heroDecorCircle heroDecor1"></div>
        <div className="heroDecorCircle heroDecor2"></div>
        <div className="heroDecorGrid"></div>
      </div>

      {/* Main Content */}
      <div className="heroContentWrapper">
        <div className="heroContent">
          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="heroTextContent"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="heroBadge"
                >
                  <span className="badgeDot"></span>
                  {currentSlideData.badge}
                </motion.div>

                {/* Main Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="heroTitle"
                >
                  {currentSlideData.title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="heroSubtitle"
                >
                  {currentSlideData.subtitle}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Quick Action Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="heroQuickActions"
        >
          {/* Book Appointment - Temporarily commented out */}
          {/* <a href="https://paystack.com/buy/dfa-expert-advice-fwgpnu" className="quickActionCard">
            <div className="quickActionIcon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="quickActionText">
              <div className="quickActionTitle">Book Appointment</div>
              <div className="quickActionDesc">Schedule a consultation</div>
            </div>
            <div className="quickActionArrow">→</div>
          </a> */}

          <Link to="/contact" className="quickActionCard">
            <div className="quickActionIcon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="quickActionText">
              <div className="quickActionTitle">Contact Us</div>
              <div className="quickActionDesc">Get in touch today</div>
            </div>
            <div className="quickActionArrow">→</div>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="heroScrollIndicator"
        onClick={handleScrollDown}
      >
        <div className="scrollIcon">
          <div className="scrollWheel"></div>
        </div>
        <span>Scroll to explore</span>
      </motion.div>
    </div>
  );
};

export default Banner;
