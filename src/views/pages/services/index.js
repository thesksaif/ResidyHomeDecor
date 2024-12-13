import React from 'react';

import { styled } from '@mui/material/styles';

//project imports
import AppBar from 'ui-component/extended/AppBar';
import FooterSection from '../landing/FooterSection';
import Services from 'views/pages/services/Services.js';

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
    width: '100%',
    height: '300px',
    backgroundImage: `url('https://via.placeholder.com/1920x300.png?text=Services+Banner')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
}));

const BannerText = styled('h1')(() => ({
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 1
}));

const Overlay = styled('div')(() => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
}));

const ServicesPage = () => {
    return (
        <>
            {/* header */}
            <AppBar />

            {/* // Banner */}
            <BannerWrapper>
                <Overlay />
                <BannerText>Our Services</BannerText>
            </BannerWrapper>

            {/* Service */}
            <Services />

            {/* Footer */}
            <SectionWrapper>
                <FooterSection />
            </SectionWrapper>
        </>
    );
};

export default ServicesPage;
