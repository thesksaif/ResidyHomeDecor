import React from 'react';
import './AboutThree.css';
import SectionHeader from 'ui-component/SectionHeader';

const AboutThree = () => {
  return (
    <section className="about-three">
      <div className="container">
        <div className="row">
          {/* Left Column - Images */}
          <div className="col-xl-6">
            <div className="about-three__img">
              <div className="shape1 float-bob-x">
                <img
                  src="https://logistiq.vercel.app/assets/images/shapes/about-v2-shape2.png"
                  alt=""
                />
              </div>
              <div className="about-three__img-box">
                <ul>
                  <li>
                    <div className="img-box reveal">
                      <img
                        src="https://logistiq.vercel.app/assets/images/about/about-v3-img1.jpg"
                        alt="Interior design inspiration"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="about-three__experience-box">
                      <div className="count-text-box count-box">
                        <div className="count-number">
                          <h3>25</h3>
                          <span className="plus">+</span>
                        </div>
                        <h4>Years of transforming spaces</h4>
                      </div>
                    </div>
                    <div className="img-box reveal">
                      <img
                        src="https://logistiq.vercel.app/assets/images/about/about-v3-img2.jpg"
                        alt="Modern living room"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Right Column - Content */}
          <div className="col-xl-6">
            <div className="about-three__content">
              <SectionHeader
                heading="About Us"
                subheading="ResidyHomeDecor – Crafting Beautiful Interiors"
              />
              <div className="about-three__content-text">
                <p>
                  At ResidyHomeDecor, we believe every home tells a story. With
                  over 25 years of experience, our team of passionate designers
                  and craftsmen have been transforming ordinary spaces into
                  extraordinary living experiences. We blend creativity,
                  functionality, and your unique style to create interiors that
                  inspire.
                </p>
              </div>
              <div className="about-three__content-list">
                <ul>
                  <li>
                    <div className="icon">
                      <span className="icon-global-services"></span>
                    </div>
                    <div className="content-box">
                      <h2>Personalized Design Solutions</h2>
                      <p>
                        We tailor every project to reflect your personality,
                        needs, and lifestyle, ensuring a truly bespoke interior.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-man"></span>
                    </div>
                    <div className="content-box">
                      <h2>Expert Team</h2>
                      <p>
                        Our experienced designers and skilled artisans work
                        together to deliver quality and excellence in every
                        detail.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-global-services"></span>
                    </div>
                    <div className="content-box">
                      <h2>End-to-End Service</h2>
                      <p>
                        From concept to completion, we manage every aspect of
                        your interior design journey for a seamless experience.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="about-three__content-btn">
                <a href="#contact" className="thm-btn">
                  Get in Touch <i className="icon-right-arrow21"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutThree;
