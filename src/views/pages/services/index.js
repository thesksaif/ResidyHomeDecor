import React from 'react';

import { styled } from '@mui/material/styles';

//project imports
import AppBar from 'ui-component/extended/AppBar';
import FooterSection from '../landing/FooterSection';
import Services from 'views/pages/services/Services.js';
import banner from 'assets/images/gallery/living-6.jpg';
import EstimateSection from '../landing/EstimateSection';

// Section Wrapper
const SectionWrapper = styled('div')(({ theme }) => ({
    paddingTop: 100,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.grey[900]
}));

// Banner Styles
const BannerWrapper = styled('div')(() => ({
    position: 'relative',
    width: '100vw',
    height: '240px',
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    marginTop: '80px'
}));

const BannerText = styled('h1')(() => ({
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
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
            <BannerWrapper>
                <BannerText>Our Services</BannerText>
            </BannerWrapper>

            {/* Service */}
            <ServicesWrapper sx={{ marginLeft: '-18px' }}>
                <Services />
            </ServicesWrapper>

            <SectionWrapper sx={{ bgcolor: 'grey.100' }}>
                <EstimateSection />
            </SectionWrapper>

            {/* Footer */}
            <SectionWrapper>
                <FooterSection />
            </SectionWrapper>
        </>
    );
};

export default ServicesPage;
