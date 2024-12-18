import React from 'react';

// Material-UI imports
import { styled } from '@mui/material/styles';

// Project imports
import AppBar from 'ui-component/extended/AppBar';
import CardSection from 'views/pages/landing/CardSection';
import FooterSection from '../landing/FooterSection';
import AboutUs from 'views/pages/about-us/AboutUs.js';
import banner from 'assets/images/about/banner.jpg';

// Styled Components
const SectionWrapper = styled('div')(({ theme }) => ({
    paddingTop: 100,
    marginTop: 80,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.grey[900],
    marginBottom: -20,
    marginLeft: -40,
    marginRight: -40
}));

const BannerWrapper = styled('div')(() => ({
    position: 'relative',
    width: '100vw',
    height: '240px',
    margin: '-10px',
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -20,
    color: '#fff'
}));

const BannerText = styled('h1')(() => ({
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 1
}));

const AboutUsPage = () => {
    return (
        <>
            {/* header */}
            <AppBar />

            {/* BannerWrapper */}
            <BannerWrapper sx={{ marginLeft: '-20px' }}>
                <BannerText>About Us</BannerText>
            </BannerWrapper>

            {/* About Us */}
            <SectionWrapper sx={{ bgcolor: 'white', paddingBottom: '100px' }}>
                <AboutUs />
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
