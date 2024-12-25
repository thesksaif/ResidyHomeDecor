import React from 'react';

import { styled } from '@mui/material/styles';

//project imports
import AppBar from 'ui-component/extended/AppBar';
import FooterSection from '../landing/FooterSection';
import Services from 'views/pages/services/Services.js';
import banner from 'assets/images/services/banner.jpg';

// Section Wrapper
const SectionWrapper = styled('div')(({ theme }) => ({
    paddingTop: 100,
    marginTop: 80,
    marginBottom: -20,
    marginLeft: -40,
    marginRight: -40,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.grey[900]
}));

// Banner Styles
const BannerWrapper = styled('div')(() => ({
    position: 'relative',
    width: '100vw',
    height: '240px',
    margin: '-10px',
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -10,
    marginLeft: -10,
    color: '#fff'
}));

const BannerText = styled('h1')(() => ({
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 1
}));

const ServicesWrapper = styled('div')(() => ({
    marginRight: -20,
    marginLeft: -20
}));

const ServicesPage = () => {
    return (
        <>
            {/* header */}
            <AppBar />

            {/*  Banner */}
            <BannerWrapper sx={{ marginLeft: '-20px' }}>
                <BannerText>Our Services</BannerText>
            </BannerWrapper>

            {/* Service */}
            <ServicesWrapper sx={{ marginLeft: '-18px' }}>
                <Services />
            </ServicesWrapper>

            {/* Footer */}
            <SectionWrapper>
                <FooterSection />
            </SectionWrapper>
        </>
    );
};

export default ServicesPage;
