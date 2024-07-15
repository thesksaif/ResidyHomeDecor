// src/Components/StepCarousel.js
import React, { useEffect, useState } from "react";
import StepCard from "./StepCard";
import "../Step.css";
import "../StepCarousel.css";

import step1Image from "../assets/images/step1.jpg";
import step2Image from "../assets/images/step2.jpg";
import step3Image from "../assets/images/step3.jpg";
import step4Image from "../assets/images/step4.jpg";
import step5Image from "../assets/images/step5.jpg";

const steps = [
  {
    image: step1Image,
    title: "Meet Designer",
    description: "Description for meet designer step",
  },
  {
    image: step2Image,
    title: "Seal the Deal",
    description: "Description for seal the deal step",
  },
  {
    image: step3Image,
    title: "Place the Order",
    description: "Description for place the order step",
  },
  {
    image: step4Image,
    title: "Installation Begins",
    description: "Description for installation begins step",
  },
  {
    image: step5Image,
    title: "Move in!",
    description: "Description for move in step",
  },
];

const StepCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % steps.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + steps.length) % steps.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % steps.length);
  };

  return (
    <div className="step-carousel">
      <h2>Home interiors in 5 easy steps</h2>
      <div className="step-indicators">
        <div className="dotted-line"></div>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`step-indicator ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <span className="step-number">{index + 1}</span>
            <span className="step-title">{step.title}</span>
          </div>
        ))}
      </div>
      <div className="carousel-content">
        <button onClick={goToPrevious} className="carousel-button prev">
          {"<"}
        </button>
        <StepCard {...steps[currentIndex]} />
        <button onClick={goToNext} className="carousel-button next">
          {">"}
        </button>
      </div>
      <button className="get-started-button">GET STARTED NOW</button>
    </div>
  );
};

export default StepCarousel;
