import React from 'react';
import '../css/HistorySection.css';
import firstImage from '../assets/images/first-image.jpg';
import secondImage from '../assets/images/second-image.jpg';

const HistorySection = () => {
  return (
    <div className="history-section">
      <div className="container">
        <div className="row text-center">
          <p className="history-subtitle">Our Journey</p>
          <h2 className="history-title">
            Exceptional Interior Design Services
          </h2>
        </div>
        <div className="row align-items-center mt-4">
          <div className="col-md-6 d-flex p-2 mt-2">
            <img src={firstImage} alt="First" className="history-image" />
            <img src={secondImage} alt="Second" className="history-image" />
          </div>
          <div className="col-md-6">
            <div className="history-content">
              <p className="history-year">2000 - 2024</p>
              <h3 className="history-highlight">Our Most Innovative Year</h3>
              <p className="history-description">
                From creating stunning living spaces to designing efficient work
                environments, our journey has been marked by creativity and
                innovation. Join us as we explore the art of interior design,
                where every space tells a story.
              </p>
              <button className="btn btn-danger">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
