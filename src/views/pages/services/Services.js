import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Grid, Paper } from '@mui/material';
import SimpleModal from 'views/pages/landing/SimpleModal.js';

// Project media imports
import KitchenVideo from 'assets/videos/kitchen.mp4';
import StorageVideo from 'assets/videos/wardrobe.mp4';
import ChairVideo from 'assets/videos/armchair.mp4';
import TvVideo from 'assets/videos/tv-stand.mp4';
import BrushVideo from 'assets/videos/brushes.mp4';
import LightbulbVideo from 'assets/videos/lights.mp4';
import WallpaperVideo from 'assets/videos/wallpaper.mp4';
import BathroomVideo from 'assets/videos/bathroom.mp4';
import KidsBedVideo from 'assets/videos/bunk-bed.mp4';
import CeilingVideo from 'assets/videos/ceiling-lamp.mp4';
import MasterBedVideo from 'assets/videos/double-bed.mp4';
import DeskVideo from 'assets/videos/desk.mp4';

// Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importing images
import kitchen from 'assets/images/gallery/kitchen-1.jpg';
import living from 'assets/images/gallery/living-1.jpg';
import living2 from 'assets/images/gallery/living-2.jpg';
import kitchen2 from 'assets/images/gallery/kitchen-2.jpg';
import living3 from 'assets/images/gallery/living-3.jpg';
import kitchen3 from 'assets/images/gallery/kitchen-3.jpg';

// Import icons
import mail from 'assets/images/services/mail.png';
import discount from 'assets/images/services/discount.png';
import price from 'assets/images/services/price-tag.png';
import calendar from 'assets/images/services/calendar.png';

// Stage icons as SVG components
const ConsultationIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
);

const PlanningIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
    </svg>
);

const DesignIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

const DeliveryIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
    </svg>
);

// Styled Components
const Wrapper = styled(Box)(({ theme }) => ({
    padding: '60px 20px',
    backgroundColor: theme.palette.background.default,
    textAlign: 'center'
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

// New styled components for the redesigned stages section
const StagesSection = styled(Box)(() => ({
    padding: '100px 20px',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background:
            'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.3
    }
}));

const StageCard = styled(Paper)(({ theme, active }) => ({
    padding: '32px 24px',
    borderRadius: '20px',
    background: active ? 'linear-gradient(135deg, #dc4545 0%, #b91c1c 100%)' : '#ffffff',
    color: active ? '#ffffff' : theme.palette.text.primary,
    boxShadow: active ? '0 20px 40px rgba(220, 69, 69, 0.3)' : '0 8px 32px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover': {
        background: 'linear-gradient(135deg, #dc4545 0%, #b91c1c 100%)',
        color: '#ffffff',
        boxShadow: '0 20px 40px rgba(220, 69, 69, 0.3)',
        transform: 'translateY(-8px)'
    },
    '&:hover::before': {
        background: 'linear-gradient(90deg, #ffd700, #ffed4e)'
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: active ? 'linear-gradient(90deg, #ffd700, #ffed4e)' : 'transparent',
        transition: 'background 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    }
}));

const StageIcon = styled(Box)(({ active }) => ({
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: active ? 'rgba(255, 255, 255, 0.2)' : 'linear-gradient(135deg, #dc4545 0%, #b91c1c 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 20px',
    transition: 'all 0.3s ease',
    '& svg': {
        width: '40px',
        height: '40px',
        filter: active ? 'brightness(0) invert(1)' : 'none'
    },
    '& img': {
        width: '40px',
        height: '40px',
        filter: active ? 'brightness(0) invert(1)' : 'none'
    },
    // On hover of parent StageCard, change background and icon color
    '.MuiPaper-root:hover &': {
        background: 'rgba(255, 255, 255, 0.2)',
        '& svg': {
            filter: 'brightness(0) invert(1)'
        },
        '& img': {
            filter: 'brightness(0) invert(1)'
        }
    }
}));

const StageNumber = styled(Box)(({ active }) => ({
    position: 'absolute',
    top: '16px',
    right: '16px',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: active ? 'rgba(255, 255, 255, 0.3)' : '#dc4545',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 'bold',
    fontFamily: 'Poppins, sans-serif',
    transition: 'background 0.3s',
    '.MuiPaper-root:hover &': {
        background: 'rgba(255, 255, 255, 0.3)',
        color: '#fff'
    }
}));

const StageTitle = styled(Typography)(({ theme, active }) => ({
    fontWeight: 700,
    fontSize: '1.25rem',
    marginBottom: '12px',
    color: active ? '#ffffff' : theme.palette.text.primary,
    fontFamily: 'Poppins, sans-serif',
    transition: 'color 0.3s',
    '.MuiPaper-root:hover &': {
        color: '#fff'
    }
}));

const StageDescription = styled(Typography)(({ theme, active }) => ({
    color: active ? 'rgba(255, 255, 255, 0.9)' : theme.palette.text.secondary,
    lineHeight: 1.6,
    fontSize: '0.95rem',
    transition: 'color 0.3s',
    '.MuiPaper-root:hover &': {
        color: 'rgba(255,255,255,0.9)'
    }
}));

const StagesGrid = styled(Box)(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 0'
}));

const Services = () => {
    const [activeStage, setActiveStage] = React.useState(0);
    const services = [
        { video: KitchenVideo, title: 'Modular Kitchen' },
        { video: StorageVideo, title: 'Storage & Wardrobe' },
        { video: ChairVideo, title: 'Space Saving Furniture' },
        { video: TvVideo, title: 'TV Units' },
        { video: WallpaperVideo, title: 'Wallpaper' },
        { video: BrushVideo, title: 'Wall Paint' },
        { video: LightbulbVideo, title: 'Lighting' },
        { video: BathroomVideo, title: 'Bathroom' },
        { video: KidsBedVideo, title: 'Kids Bedroom' },
        { video: CeilingVideo, title: 'Ceiling Lamp' },
        { video: MasterBedVideo, title: 'Master Bedroom' },
        { video: DeskVideo, title: 'Desk' }
    ];

    const carouselImages = [kitchen, living, living2, kitchen2, living3, kitchen3];

    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 750,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };

    const stages = [
        {
            number: '01',
            title: 'Initial Consultation',
            description:
                'We begin with a comprehensive consultation to understand your vision, lifestyle, and requirements. Our expert designers will discuss your preferences, budget, and timeline to create a personalized approach for your dream space.',
            icon: ConsultationIcon,
            color: '#dc4545'
        },
        {
            number: '02',
            title: 'Space Planning & Design',
            description:
                'Our team creates detailed floor plans and 3D visualizations of your space. We carefully consider every element - from furniture placement to lighting design - ensuring optimal functionality and aesthetic appeal.',
            icon: PlanningIcon,
            color: '#764ba2'
        },
        {
            number: '03',
            title: '3D Visualization & Selection',
            description:
                'Experience your future home through stunning 3D renderings. We present furniture, materials, and color schemes, allowing you to visualize and approve every detail before production begins.',
            icon: DesignIcon,
            color: '#f093fb'
        },
        {
            number: '04',
            title: 'Production & Installation',
            description:
                'Your custom furniture is crafted in premium European workshops. Our professional team handles delivery, assembly, and final installation, ensuring your space is perfectly transformed.',
            icon: DeliveryIcon,
            color: '#4facfe'
        }
    ];

    return (
        <Wrapper>
            {/* Services Section */}
            <SectionHeader
                variant="h3"
                align="center"
                sx={{
                    fontWeight: 800,
                    fontSize: { xs: '1.6rem', md: '2.2rem' },
                    color: '#f44336',
                    mb: 2,
                    letterSpacing: 1
                }}
            >
                Our Services
            </SectionHeader>
            <SubText
                align="center"
                sx={{
                    color: '#5a6c7d',
                    fontSize: { xs: '1.05rem', md: '1.15rem' },
                    mb: 5
                }}
            >
                Explore the wide range of interior design and home decor services we offer at Residy Home Decor.
            </SubText>
            <Grid container spacing={5} justifyContent="center" mb={10}>
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Box
                            className="service-card"
                            sx={{
                                p: 3,
                                borderRadius: 3,
                                boxShadow: '0 2px 12px rgba(244,67,54,0.06)',
                                textAlign: 'center',
                                background: '#fff',
                                transition: 'box-shadow 0.18s, background 0.18s, transform 0.18s',
                                '&:hover': {
                                    boxShadow: '0 6px 18px rgba(244,67,54,0.13)',
                                    background: '#fff7f7',
                                    transform: 'translateY(-3px) scale(1.025)'
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    width: 56,
                                    height: 56,
                                    borderRadius: '12px',
                                    background: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 10px',
                                    boxShadow: '0 2px 8px rgba(44,62,80,0.08)',
                                    border: '1.5px solid #f44336'
                                }}
                            >
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: '8px',
                                        objectFit: 'cover',
                                        background: '#fff',
                                        boxShadow: 'none',
                                        display: 'block'
                                    }}
                                >
                                    <source src={service.video} type="video/mp4" />
                                </video>
                            </Box>
                            <Typography
                                variant="h6"
                                gutterBottom
                                sx={{
                                    mt: 1.5,
                                    fontWeight: 600,
                                    color: '#222',
                                    transition: 'color 0.18s',
                                    '.service-card:hover &': { color: '#f44336' }
                                }}
                            >
                                {service.title}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            {/* Image Carousel */}
            <SectionHeader variant="h4" align="center">
                Transform your Sweet Home
            </SectionHeader>
            <SubText variant="subtitle1" align="center">
                Look no further than Resdiy Home Decor for end-to-end interior design service
            </SubText>
            <Slider {...sliderSettings}>
                {carouselImages.map((image, index) => (
                    <Box
                        key={index}
                        component="img"
                        src={image}
                        alt={`Carousel ${index}`}
                        sx={{
                            maxWidth: '90%',
                            height: '250px',
                            objectFit: 'cover',
                            borderRadius: '15px',
                            p: 1
                        }}
                    />
                ))}
            </Slider>

            {/* Stages of Your Project Section */}
            <StagesSection>
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <SectionHeader variant="h4" align="center" sx={{ color: '#2c3e50', fontSize: '2.5rem', mb: 3 }}>
                        Our Design Process
                    </SectionHeader>
                    <SubText variant="subtitle1" align="center" sx={{ fontSize: '1.1rem', mb: 6, color: '#5a6c7d' }}>
                        From concept to completion, we guide you through every step of creating your perfect space
                    </SubText>

                    <StagesGrid>
                        {stages.map((stage, index) => (
                            <StageCard key={index} active={index === activeStage} onClick={() => setActiveStage(index)}>
                                <StageNumber active={index === activeStage}>{stage.number}</StageNumber>
                                <StageIcon active={index === activeStage}>{React.createElement(stage.icon)}</StageIcon>
                                <StageTitle active={index === activeStage}>{stage.title}</StageTitle>
                                <StageDescription active={index === activeStage}>{stage.description}</StageDescription>
                            </StageCard>
                        ))}
                    </StagesGrid>

                    <Box sx={{ textAlign: 'center', mt: 6 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                color: '#dc4545',
                                fontWeight: 600,
                                mb: 2,
                                fontFamily: 'Poppins, sans-serif'
                            }}
                        >
                            Ready to Start Your Journey?
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: '#5a6c7d',
                                maxWidth: '600px',
                                margin: '0 auto',
                                fontSize: '1rem'
                            }}
                        >
                            Let&apos;s transform your space into something extraordinary. Contact us today for a free consultation.
                        </Typography>
                    </Box>
                </Box>
            </StagesSection>

            {/* New Section - Promises */}
            <Box
                sx={{
                    padding: '60px 20px',
                    backgroundColor: '#f9f9f9',
                    textAlign: 'center'
                }}
            >
                <Grid container spacing={4} justifyContent="center">
                    {/* Promise 1 */}
                    <Grid item xs={12} md={3}>
                        <Box
                            component="img"
                            src={calendar}
                            alt="Calendar Icon"
                            sx={{
                                width: '64px',
                                height: '64px',
                                margin: '0 auto 16px' // Center the icon and add margin below
                            }}
                        />
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                            20 Year Structural Guarantee
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                            We stand by the quality of our products with a 20-year guarantee.
                        </Typography>
                    </Grid>

                    {/* Promise 2 */}
                    <Grid item xs={12} md={3}>
                        <Box
                            component="img"
                            src={price}
                            alt="Price Tag Icon"
                            sx={{
                                width: '64px',
                                height: '64px',
                                margin: '0 auto 16px' // Center the icon and add margin below
                            }}
                        />
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                            Lowest Price Promise
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                            We guarantee the lowest prices on all brands we carry.
                        </Typography>
                    </Grid>

                    {/* Promise 3 */}
                    <Grid item xs={12} md={3}>
                        <Box
                            component="img"
                            src={discount}
                            alt="Discount Icon"
                            sx={{
                                width: '64px',
                                height: '64px',
                                margin: '0 auto 16px' // Center the icon and add margin below
                            }}
                        />
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                            Sign Up for 10% Off
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                            Get an exclusive 10% discount when you sign up for our newsletter.
                        </Typography>
                    </Grid>

                    {/* Promise 4 */}
                    <Grid item xs={12} md={3}>
                        <Box
                            component="img"
                            src={mail}
                            alt="Mail Icon"
                            sx={{
                                width: '64px',
                                height: '64px',
                                margin: '0 auto 16px' // Center the icon and add margin below
                            }}
                        />
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                            Interest-Free Credit
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                            Enjoy interest-free credit options for your purchases.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            {/* Modal */}
            <Box mt={4}>
                <SimpleModal />
            </Box>
        </Wrapper>
    );
};

export default Services;
