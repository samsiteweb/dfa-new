import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./navbar.css";

import Logo from "../../assets/icons/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close menu on route change
    setMenuOpen(false);
    document.body.style.overflow = "auto";
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/practice-area", label: "Practice Areas" },
    { path: "/esg/all-resources", label: "Resources" },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`premiumNav ${scrolled ? "scrolled" : ""}`}
    >
      <div className="navContainer">
        {/* Logo */}
        <Link to="/" className="navLogo" onClick={closeMenu}>
          <img src={Logo} alt="DFA Solicitors" className="navLogoImg" />
        </Link>

        {/* Desktop Navigation */}
        <div className="navLinksDesktop">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navLink ${isActive(link.path) ? "active" : ""}`}
            >
              {link.label}
              {isActive(link.path) && <span className="navLinkIndicator"></span>}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link to="/contact" className="navCtaBtn">
          <span>Get in Touch</span>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className={`navHamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburgerLine"></span>
          <span className="hamburgerLine"></span>
          <span className="hamburgerLine"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="navOverlay"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="navMobileMenu"
            >
              <div className="mobileMenuHeader">
                <Link to="/" className="mobileMenuLogo" onClick={closeMenu}>
                  <img src={Logo} alt="DFA Solicitors" />
                </Link>
                <button className="mobileMenuClose" onClick={closeMenu}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mobileMenuLinks">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`mobileNavLink ${isActive(link.path) ? "active" : ""}`}
                      onClick={closeMenu}
                    >
                      {link.label}
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mobileMenuCta"
                >
                  <Link to="/contact" className="mobileCtaBtn" onClick={closeMenu}>
                    Get in Touch
                  </Link>
                </motion.div>
              </div>

              <div className="mobileMenuFooter">
                <p>© 2024 DFA Solicitors</p>
                <p>Excellence in Legal Practice</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
