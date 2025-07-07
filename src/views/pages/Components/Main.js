import React from 'react';
import InteriorCarousel from './InteriorCarousel';
import HeroSection from './HeroSection';
import Footer from './Footer';
// import AboutUs from "./AboutUs";
import ServiceCard from './Services';
import Gallery from './Gallery';
import InteriorSection from './InteriorSection';
import StepCarousel from './StepCarousel';
import AboutCompany from './AboutCompany';
import CompanyServices from './CompanyServices';
import FeedbackSection from './FeedbackSection';
// import ServiceCard from "./ServiceCard";

const Main = () => {
  return (
    <div>
      <HeroSection />
      <AboutCompany />
      <CompanyServices />
      <InteriorCarousel />
      <ServiceCard />
      <Gallery />
      <InteriorSection />
      <StepCarousel />
      <FeedbackSection />
      <Footer />
    </div>
  );
};

export default Main;
