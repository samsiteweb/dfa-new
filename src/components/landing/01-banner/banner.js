import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./banner.css";

// import Button from "../../button/button";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: require("../../../assets/img/carousel-item-2.png"),
      header: "Law, Corporate Governance & Corporate Services",
      details: "DFA Solicitors",
    },
    {
      image: require("../../../assets/img/carousel-item-1.png"),
      header: "Your Trusted Pillar For Life And Business",
      details: "DFA Solicitors",
    },
    {
      image: require("../../../assets/img/carousel-item-3.png"),
      header: " Diligent, Fast and Ally",
      details: "The DFA promise:",
    },
    {
      image: require("../../../assets/img/carousel-item-4.png"),
      header: "The DFA DNA - Deft, Formidable & Astute",
      details: "DFA Solicitors",
    },
  ];

  let autoplayInterval;

  useEffect(() => {
    autoplayInterval = setInterval(nextSlide, 8000);
    return () => clearInterval(autoplayInterval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const handleDotClick = (index) => {
    clearInterval(autoplayInterval);
    setCurrentSlide(index);
  };

  return (
    <div className="image-carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        >
          <div className="overlay">
            <div className="carousel-details">
              <h4 className="carousel-details-Par">{slide.details}</h4>
              <h2 className="carousel-details-H2">{slide.header}</h2>
              {/* <div className="BannerbtnDiv">
                <Button>
                  <Link to="/contact">contact us now</Link>
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      ))}
      <div className="carousel-dots-banner">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`carousel-dot-banner ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
