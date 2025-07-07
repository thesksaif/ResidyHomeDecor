import React from 'react';
import './AboutThree.css';

const AboutThree = () => {
  return (
    <section className="about-hero">
      <div className="about-hero__container">
        {/* Left Side */}
        <div className="about-hero__left">
          <div className="about-hero__main-img-wrap">
            <img
              className="about-hero__main-img"
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
              alt="Interior design inspiration"
            />
            <div className="about-hero__exp-card">
              <div className="about-hero__exp-number">
                25<span>+</span>
              </div>
              <div className="about-hero__exp-label">Years of experience</div>
            </div>
          </div>
          <div className="about-hero__side-img-wrap">
            <img
              className="about-hero__side-img"
              src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80"
              alt="Modern living room"
            />
          </div>
        </div>
        {/* Right Side */}
        <div className="about-hero__right">
          <div className="about-hero__tagline">
            <span className="about-hero__tagline-line"></span>
            <span className="about-hero__tagline-text">WHO WE ARE</span>
            <span
              className="about-hero__tagline-icon"
              role="img"
              aria-label="plane"
            >
              ✈️
            </span>
          </div>
          <h1 className="about-hero__title">
            Leading Interior Design <br />
            <span>
              And Home Decor{' '}
              <span className="about-hero__title-accent">AGENCY</span>
            </span>
          </h1>
          <p className="about-hero__desc">
            ResidyHomeDecor is your trusted partner for transforming spaces.
            With 25+ years of experience, we blend creativity and functionality
            to deliver beautiful, personalized interiors for every client.
          </p>
          <div className="about-hero__features">
            <div className="about-hero__feature-card">
              <div
                className="about-hero__feature-icon"
                style={{ background: '#dc3545' }}
              >
                <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>
              <div>
                <div className="about-hero__feature-title">Global Service</div>
                <div className="about-hero__feature-desc">
                  We always provide people a complete solution focused on any
                  home or business.
                </div>
              </div>
            </div>
            <div className="about-hero__feature-card">
              <div
                className="about-hero__feature-icon"
                style={{ background: '#dc3545' }}
              >
                <svg width="24" height="24" fill="#fff" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div>
                <div className="about-hero__feature-title">Local Service</div>
                <div className="about-hero__feature-desc">
                  We always provide people a complete solution focused on any
                  home or business.
                </div>
              </div>
            </div>
          </div>
          <a href="#more" className="about-hero__cta">
            More About Us <span className="about-hero__cta-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutThree;
