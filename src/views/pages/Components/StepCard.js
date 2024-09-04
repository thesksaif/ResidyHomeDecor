// src/Components/StepCard.js
import React from "react";
import "../Step.css";

const StepCard = ({ image, title, description }) => {
  return (
    <div className="step-card">
      <img src={image} alt={title} className="step-card-image" />
      <h3 className="step-card-title">{title}</h3>
      <p className="step-card-description">{description}</p>
    </div>
  );
};

export default StepCard;
