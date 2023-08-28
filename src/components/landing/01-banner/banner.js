import React, { useState, useEffect } from "react";
import "./banner.css";
import Button from "../../button/button";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: require("../../../assets/img/bg.jpg"),
      header: "Your Trusted Pillar For Life And Business.",
      details: "DFA Solicitors, We are",
    },
    {
      image: require("../../../assets/img/1.jpg"),
      header: "We fight for your justice as like a friend.",
      details: "The Most Talented Law Firm",
    },
    {
      image: require("../../../assets/img/2.jpg"),
      header: "We fight for your justice as like a friend.",
      details: "The Most Required Assets",
    },
    {
      image: require("../../../assets/img/3.jpg"),
      header: "Your Trusted Pillar For Life And Business.",
      details: "DFA Solicitors, We are",
    },
  ];

  let autoplayInterval;

  useEffect(() => {
    autoplayInterval = setInterval(nextSlide, 3000);
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
              <p className="carousel-details-Par">{slide.details}</p>
              <h2 className="carousel-details-H2">{slide.header}</h2>
              <div className="BannerbtnDiv">
                <Button>contact us now</Button>
              </div>
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
