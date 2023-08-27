import React, { useState, useEffect } from "react";
import "./testimonials.css";

import Female from "../../../assets/img/Rectangle 22.jpg";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: require("../../../assets/img/user.jpg"),
      name: "Joke Ojo",
      position: "CEO Aphics Art, Nigeria",
      comment:
        "“Torem ipsum dolor sit amet, consectetur dipiscing elit. Nunc vulputate libero et velit interdum, ac liquet odio mattis.”",
    },
    {
      image: require("../../../assets/img/user.jpg"),
      name: "Joke Ojo",
      position: "CEO Aphics Art, Nigeria",
      comment:
        "“Torem ipsum dolor sit amet, consectetur dipiscing elit. Nunc vulputate libero et velit interdum, ac liquet odio mattis.”",
    },
    {
      image: require("../../../assets/img/user.jpg"),
      name: "Joke Ojo",
      position: "CEO Aphics Art, Nigeria",
      comment:
        "“Torem ipsum dolor sit amet, consectetur dipiscing elit. Nunc vulputate libero et velit interdum, ac liquet odio mattis.”",
    },
  ];

  let autoplayInterval;

  useEffect(() => {
    const autoplayInterval = setInterval(nextSlide, 3000);
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
    <div className="testimonialsContainer">
      <div>
        <img src={Female} alt="" className="testimonialBigImg" />
      </div>
      <div className="carousel-slides">
        <p className="subTesti">What people say</p>
        <h2 className="TestiH2">Client Testimonial</h2>
        <hr className="HRTestimonial" />
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentSlide ? "active" : ""
            }`}
          >
            <p className="slidePar">{slide.comment}</p>
            <div className="slideLower">
              <div className="slideLowerInner">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="slideImg"
                />
                <div>
                  <h2 className="slideName">{slide.name}</h2>
                  <p className="slidePosition">{slide.position}</p>
                </div>
              </div>
              <div className="carousel-dots">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`carousel-dot ${
                      index === currentSlide ? "active" : ""
                    }`}
                    onClick={() => handleDotClick(index)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
