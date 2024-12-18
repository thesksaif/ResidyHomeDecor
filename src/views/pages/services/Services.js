import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Grid, Paper } from '@mui/material';

// import AppBar from 'ui-component/extended/AppBar';
// import FooterSection from '../landing/FooterSection';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ColorLensIcon from '@mui/icons-material/ColorLens';

// Styled Components
const ServicesWrapper = styled(Box)(({ theme }) => ({
    padding: '40px 20px',
    width: '100%',
    margin: '0 auto',
    backgroundColor: theme.palette.background.default
}));

const ServiceItem = styled(Paper)(({ theme }) => ({
    padding: '20px',
    textAlign: 'left',
    borderRadius: '8px',
    boxShadow: theme.shadows[3],
    '&:hover': {
        boxShadow: theme.shadows[6]
    }
}));

const IconWrapper = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#e74c3c',
    color: '#fff',
    marginBottom: '10px'
}));

// const SectionWrapper = styled('div')(({ theme }) => ({
//     paddingTop: 100,
//     marginTop: 80,
//     marginBottom: -20,
//     backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.grey[900]
// }));

// // Banner Styles
// const BannerWrapper = styled('div')(() => ({
//     position: 'relative',
//     width: '100%',
//     height: '300px',
//     backgroundImage: `url('https://via.placeholder.com/1920x300.png?text=Services+Banner')`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: '#fff'
// }));

// const BannerText = styled('h1')(() => ({
//     fontSize: '3rem',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     zIndex: 1
// }));

// const Overlay = styled('div')(() => ({
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.4)'
// }));

const Services = () => {
    return (
        <>
            {/* <AppBar /> */}

            {/* Full-Width Banner */}
            {/* <BannerWrapper>
                <Overlay />
                <BannerText>Our Services</BannerText>
            </BannerWrapper> */}

            <ServicesWrapper>
                {/* Header Section */}
                <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', marginBottom: '30px' }}>
                    Our Services
                </Typography>
                <Typography variant="subtitle1" align="center" gutterBottom>
                    Explore the wide range of home decor services we offer at Resdiy Home Decor.
                </Typography>

                {/* Services Grid */}
                <Grid container spacing={4} style={{ marginTop: '20px', padding: '0 40px' }}>
                    <Grid item xs={12} md={6} lg={3}>
                        <ServiceItem>
                            <IconWrapper>
                                <DesignServicesIcon fontSize="large" />
                            </IconWrapper>
                            <Typography variant="h6" gutterBottom>
                                Custom Home Decor
                            </Typography>
                            <Typography variant="body2">
                                We provide tailored home decor services, from custom furniture to personalized artwork, to match your unique
                                style.
                            </Typography>
                        </ServiceItem>
                    </Grid>

                    {/* Service 2: Interior Design Consultation */}
                    <Grid item xs={12} md={6} lg={3}>
                        <ServiceItem>
                            <IconWrapper>
                                <ColorLensIcon fontSize="large" />
                            </IconWrapper>
                            <Typography variant="h6" gutterBottom>
                                Interior Design Consultation
                            </Typography>
                            <Typography variant="body2">
                                Our expert designers offer consultations to help you choose the perfect colors, textures, and decor elements
                                for your space.
                            </Typography>
                        </ServiceItem>
                    </Grid>

                    {/* Service 3: Home Renovation Support */}
                    <Grid item xs={12} md={6} lg={3}>
                        <ServiceItem>
                            <IconWrapper>
                                <HomeRepairServiceIcon fontSize="large" />
                            </IconWrapper>
                            <Typography variant="h6" gutterBottom>
                                Home Renovation Support
                            </Typography>
                            <Typography variant="body2">
                                From planning to execution, we assist with home renovations, ensuring a smooth process and stunning results.
                            </Typography>
                        </ServiceItem>
                    </Grid>

                    {/* Service 4: Fast Delivery and Setup */}
                    <Grid item xs={12} md={6} lg={3}>
                        <ServiceItem>
                            <IconWrapper>
                                <LocalShippingIcon fontSize="large" />
                            </IconWrapper>
                            <Typography variant="h6" gutterBottom>
                                Fast Delivery and Setup
                            </Typography>
                            <Typography variant="body2">
                                Enjoy fast and reliable delivery services with professional setup for your new home decor items.
                            </Typography>
                        </ServiceItem>
                    </Grid>
                </Grid>
            </ServicesWrapper>

            {/* Footer Section
            <SectionWrapper>
                <FooterSection />
            </SectionWrapper> */}
        </>
    );
};

export default Services;
