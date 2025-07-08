import React from 'react';
import AboutThree from './AboutThree';
import AboutUs from './AboutUs';
import './AboutThree.css';

// Material-UI imports
import { styled } from '@mui/material/styles';

// Project imports
import AppBar from 'ui-component/extended/AppBar';
import CardSection from 'views/pages/landing/CardSection';
import FooterSection from '../landing/FooterSection';
import TestimonialSlider from '../landing/TestimonialSlider';
import banner from 'assets/images/about/banner.avif';

// Styled Components
const SectionWrapper = styled('div')(({ theme }) => ({
    paddingTop: 100,
    marginTop: 0,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.grey[900],
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0
}));

const BannerWrapper = styled('div')(() => ({
    position: 'relative',
    width: '100vw',
    height: '280px',
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
    color: '#fff',
    marginTop: '80px'
}));

const BannerText = styled('h1')(() => ({
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 1,
    color: '#fff'
}));

const AboutUsPage = () => {
    return (
        <>
            {/* header */}
            <AppBar />

            {/* BannerWrapper */}
            <BannerWrapper>
                <BannerText>About Us</BannerText>
            </BannerWrapper>

            {/* About Us */}
            <SectionWrapper sx={{ bgcolor: 'white', paddingBottom: '100px' }}>
                <AboutThree />
            </SectionWrapper>

            {/* About Us */}
            <SectionWrapper sx={{ bgcolor: 'white', paddingBottom: '100px' }}>
                <AboutUs />
            </SectionWrapper>

            {/* Testimonials */}
            <SectionWrapper sx={{ bgcolor: '#f8f9fa', paddingBottom: '100px' }}>
                <TestimonialSlider />
            </SectionWrapper>

            {/* CardSection */}
            <CardSection />

            {/* SectionWrapper */}
            <SectionWrapper>
                <FooterSection />
            </SectionWrapper>
        </>
    );
};

export default AboutUsPage;
