import React from "react";
import "../AboutCompany.css";

import roofImage from "../assets/images/about/1.jpg"; // Adjust the path as necessary
import workerImage from "../assets/images/about/2.jpeg"; // Adjust the path as necessary

const AboutCompany = () => {
  return (
    <div className="row about-us-container">
      <div className="col-5 about-us-images">
        <img src={roofImage} alt="Roof" className="about-us-image roof" />
        <img src={workerImage} alt="Worker" className="about-us-image worker" />
      </div>
      <div className="col-5 about-us-content">
        <h3>About Company</h3>
        <h2>Professional Roofing Contractors</h2>
        <p>
          Donec rutrum congue leo eget malesuada. Sed porttitor lectus nibh.
          Cras ultricies ligula sed magna dictum porta. Vivamus magna justo,
          lacinia eget consectetur sed, convallis at tellus.
        </p>
        <p>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
          ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia
          in, elementum id enim. Vivamus suscipit tortor eget felis porttitor
          volutpat. Sed porttitor lectus nibh. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae.
        </p>
        <div className="certified-company">
          <i className="fas fa-award text-danger"></i>
          {/* Adjust the path as necessary */}
          <span>Certified Company</span>
        </div>
        <button className="read-more-button">Read More</button>
      </div>
    </div>
  );
};

export default AboutCompany;
