import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Grid, Paper, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ColorLensIcon from '@mui/icons-material/ColorLens';

// Styled Components
const ServicesWrapper = styled(Box)(({ theme }) => ({
    padding: '60px 20px',
    backgroundColor: theme.palette.background.default
}));

const SectionHeader = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    marginBottom: '20px',
    textTransform: 'uppercase',
    color: theme.palette.primary.main
}));

const SubText = styled(Typography)(({ theme }) => ({
    marginBottom: '40px',
    color: theme.palette.text.secondary
}));

const ServiceItem = styled(Paper)(({ theme }) => ({
    padding: '20px',
    textAlign: 'center',
    borderRadius: '12px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: theme.shadows[3],
    '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: theme.shadows[8]
    }
}));

const IconWrapper = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#e74c3c',
    color: '#fff',
    margin: '0 auto 20px'
}));

const TestimonialsWrapper = styled(Box)(({ theme }) => ({
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
    boxShadow: `0px 4px 10px ${theme.palette.grey[300]}`
}));

const FAQWrapper = styled(Box)(({ theme }) => ({
    padding: '60px 20px',
    backgroundColor: theme.palette.grey[100]
}));

const AccordionStyled = styled(Accordion)(({ theme }) => ({
    marginBottom: '10px',
    boxShadow: 'none',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '8px',
    '&:before': {
        display: 'none'
    }
}));

const AccordionSummaryStyled = styled(AccordionSummary)(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    '& .MuiAccordionSummary-expandIcon': {
        color: theme.palette.primary.main
    }
}));

const AccordionDetailsStyled = styled(AccordionDetails)(({ theme }) => ({
    padding: '20px',
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary
}));

const Services = () => {
    return (
        <>
            {/* Services Section */}
            <ServicesWrapper>
                <SectionHeader variant="h4" align="center">
                    Our Services
                </SectionHeader>
                <SubText variant="subtitle1" align="center">
                    Explore the wide range of home decor services we offer at Resdiy Home Decor.
                </SubText>

                <Grid container spacing={4} style={{ padding: '0 40px' }}>
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

            {/* Testimonials Section */}
            <TestimonialsWrapper>
                <SectionHeader variant="h4">What Our Clients Say</SectionHeader>
                <SubText variant="subtitle1" align="center">
                    Hear from our satisfied clients.
                </SubText>
                <Grid container spacing={4} style={{ marginTop: '20px', padding: '0 40px' }}>
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ padding: '20px', borderRadius: '12px', boxShadow: 3 }}>
                            <Typography variant="body1" gutterBottom>
                                Resdiy Home Decor transformed my living room into a space I love spending time in. Their attention to detail
                                is unmatched!
                            </Typography>
                            <Typography variant="subtitle2" align="right">
                                - Jane Doe
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ padding: '20px', borderRadius: '12px', boxShadow: 3 }}>
                            <Typography variant="body1" gutterBottom>
                                The team was professional, affordable, and creative. I highly recommend their services!
                            </Typography>
                            <Typography variant="subtitle2" align="right">
                                - John Smith
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </TestimonialsWrapper>

            {/* FAQ Section */}
            <FAQWrapper>
                <SectionHeader variant="h4" align="center">
                    Frequently Asked Questions
                </SectionHeader>
                <AccordionStyled>
                    <AccordionSummaryStyled expandIcon={<ExpandMoreIcon />}>
                        <Typography>What services do you offer?</Typography>
                    </AccordionSummaryStyled>
                    <AccordionDetailsStyled>
                        <Typography>
                            We offer a range of services including custom home decor, interior design consultations, and home renovation
                            support.
                        </Typography>
                    </AccordionDetailsStyled>
                </AccordionStyled>
                <AccordionStyled>
                    <AccordionSummaryStyled expandIcon={<ExpandMoreIcon />}>
                        <Typography>How can I book your services?</Typography>
                    </AccordionSummaryStyled>
                    <AccordionDetailsStyled>
                        <Typography>You can contact us directly through our website or by calling our customer service line.</Typography>
                    </AccordionDetailsStyled>
                </AccordionStyled>
            </FAQWrapper>
        </>
    );
};

export default Services;
