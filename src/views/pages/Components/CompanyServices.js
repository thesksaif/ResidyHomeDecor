import React from "react";
import "../CompanyServices.css"; // Updated CSS file

import servicesImage1 from "../assets/images/services/1.jpg";
import servicesImage2 from "../assets/images/services/2.png";
import servicesImage3 from "../assets/images/services/3.png";
import servicesImage11 from "../assets/images/services/4.jpg";

const CompanyServices = () => {
  return (
    <div>
      <div className="statistics-section">
        <div className="stat-item statistics-1">
          <h3>15+</h3>
          <p>Years In Business</p>
        </div>
        <div className="stat-item statistics-2 ">
          <h3>1.5k</h3>
          <p>Happy Clients</p>
        </div>
        <div className="stat-item statistics-3">
          <h3>2.5k</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat-item statistics-4">
          <h3>150+</h3>
          <p>Trained Staff</p>
        </div>
      </div>
      <div className="company-services-container">
        <div className="mt-5 services-section mb-5">
          <div className="heading-area">
            <h6>Our Services</h6>
            <h2>We Provide Superior Roofing Services</h2>
          </div>
          <div className="mt-5 row d-flex justify-content-around">
            <div className="col-3 service-item">
              <img src={servicesImage1} alt="Service 1" />
              <div className="service-content">
                <h6>Roof Installations</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="col-3 service-item">
              <img src={servicesImage2} alt="Service 2" />
              <div className="service-content">
                <h6>Roof Repair</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="col-3 service-item">
              <img src={servicesImage3} alt="Service 3" />
              <div className="service-content">
                <h6>Leak Repair</h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>

        <div className="additional-services-section">
          <div className="row d-flex justify-content-center">
            <div className="col-5 add-content">
              <h6>Additional Services</h6>
              <h2>We Also Offer</h2>
              <p>
                Cras ultricies ligula sed magna dictum porta. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                Curae; Donec velit neque, auctor sit amet aliquam vel,
                ullamcorper sit amet ligula. Pellentesque in ipsum id orci porta
                dapibus.
              </p>
              <ul>
                <li>
                  <i className="fas fa-arrow-alt-circle-right"></i> Stucco
                </li>
                <li>
                  <i className="fas fa-arrow-alt-circle-right"></i> Window
                  Replacement
                </li>
                <li>
                  <i className="fas fa-arrow-alt-circle-right"></i> Skylights &
                  Sun Tunnels
                </li>
                <li>
                  <i className="fas fa-arrow-alt-circle-right"></i> Chimney
                  Spark Arrestor
                </li>
                <li>
                  <i className="fas fa-arrow-alt-circle-right"></i> Interior
                  Sheetrock Repair
                </li>
              </ul>
              <a className="button" href="#">
                Know More
              </a>
            </div>
            <div className="col-5">
              <img src={servicesImage11} alt="Additional Service" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyServices;
