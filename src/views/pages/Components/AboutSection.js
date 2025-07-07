import React from 'react';
import Header from './Header';
import SectionComponent from './SectionComponent';
import Footer from './Footer';
import '../css/AboutSection.css';
import max from '../assets/images/man.png';
import HistorySection from './HistorySection';
import ReasonSection from './ReasonSection';
const AboutSection = () => {
  return (
    <div>
      <section className="about-us">
        <Header />
        <SectionComponent title="About Us" />
        <div className="container about-company">
          <div className="row p-4">
            <div className="col-md-12">
              <div className="row ">
                <div className="col-md-6">
                  <div className="about-text">
                    <p className="about-subtitle">About Company</p>
                    <h2 className="about-title">
                      Professional and Expert Interior Contractor
                    </h2>
                    <p className="para">
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus. Praesent sapien massa, convallis a
                      pellentesque nec, egestas non nisi. Nulla porttitor
                      accumsan tincidunt. Donec rutrum congue leo eget
                      malesuada.
                    </p>
                    <button className="btn btn-danger mt-3">READ MORE</button>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-info">
                    <p className="para">
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus. Praesent sapien massa, convallis a
                      pellentesque nec, egestas non nisi. Nulla porttitor
                      accumsan tincidunt. Donec rutrum congue leo eget
                      malesuada.
                    </p>
                    <p className="para">
                      Vivamus magna justo, lacinia eget consectetur sed,
                      convallis at tellus. Praesent sapien massa, convallis a
                      pellentesque nec, egestas non nisi. Nulla porttitor
                      accumsan tincidunt. Donec rutrum congue leo eget
                      malesuada.
                    </p>
                    <div className="founder-info d-flex align-items-center mt-3">
                      <img
                        src={max}
                        alt="Max Stewart"
                        className="founder-image rounded-circle mr-3"
                      />
                      <div className="founder-name">
                        <h6 className="font-weight-bold mb-0">Max Stewart</h6>
                        <p className="text-muted">FOUNDER</p>
                      </div>
                    </div>
                    <div className="info  mt-3">
                      <h6>Need help? Contact me</h6>
                      <p className="text-muted">
                        +1 2345 678 or info@example.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HistorySection />
        <ReasonSection />
        <Footer />
      </section>
    </div>
  );
};

export default AboutSection;
