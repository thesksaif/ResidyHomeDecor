import React from 'react';
import '../css/ReasonSection.css';
import { FaCheckCircle, FaShieldAlt, FaHardHat } from 'react-icons/fa'; // Importing icons

const ReasonSection = () => {
  return (
    <div className="reasons-section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-subtitle">Why Choose Us</h2>
          <h1 className="section-title">Reason For Choosing Us</h1>
        </div>
        <div className="row box-container">
          <div className="col-md-4  text-center">
            <div className="box-element">
              <FaCheckCircle className="reason-icon" />
              <h3 className="reason-title">Accredited Company</h3>
              <p className="reason-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a href="#" className="reason-link">
                KNOW MORE
              </a>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="box-element text-center">
              <FaShieldAlt className="reason-icon" />
              <h3 className="reason-title">100% Guarantee</h3>
              <p className="reason-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a href="#" className="reason-link">
                KNOW MORE
              </a>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="box-element text-center">
              <FaHardHat className="reason-icon" />
              <h3 className="reason-title">Quality Material</h3>
              <p className="reason-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a href="#" className="reason-link">
                KNOW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReasonSection;
