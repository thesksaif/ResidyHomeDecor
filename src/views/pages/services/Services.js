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
import main from 'assets/images/services/main.jpg';

// Import icons
import mail from 'assets/images/services/mail.png';
import discount from 'assets/images/services/discount.png';
import price from 'assets/images/services/price-tag.png';
import calendar from 'assets/images/services/calendar.png';

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

const Item = styled(Paper)(() => ({
    padding: '20px',
    borderRadius: '12px',
    transition: 'transform 0.3s ease',
    boxShadow: 'none',
    '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: 'none'
    }
}));

const StagesWrapper = styled(Box)(() => ({
    padding: '80px 20px',
    textAlign: 'center'
}));

const StageContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'flex-start',
    gap: '80px',
    marginBottom: '-40px',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px'
    }
}));

const StageContent = styled(Box)(({ theme }) => ({
    flex: 1,
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '550px',
    [theme.breakpoints.down('md')]: {
        height: 'auto'
    }
}));

const BigImage = styled(Box)(({ theme }) => ({
    width: '500px',
    height: '525px',
    borderRadius: '4px',
    overflow: 'hidden',
    flexShrink: 0,
    [theme.breakpoints.down('md')]: {
        width: '100%',
        height: '300px'
    }
}));

const Services = () => {
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
            title: "1 - Let's Talk",
            description:
                'In store, by phone, or on a video call, the first exchanges with your decorator mark the starting point of your project. The way you use each room, your constraints, your tastes and your expectations are essential elements for your decorator to fully understand your project.'
        },
        {
            title: '2 - Your Space & Your Future Furniture',
            description:
                'Based on your instructions, we draw very detailed plans of your interior. Precise measurements of existing elements, exact locations of doors and windows; every detail counts to obtain an optimised and realistic final rendering. Depending on your needs, we offer a selection of products accompanied by a layout plan that we develop with you. Once your product selection is final, we will determine the colours, materials and finishes together.'
        },
        {
            title: '3 - Your Interior in 3D',
            description:
                'Using a powerful 3D design software, the image is finalised for optimal rendering of textures, reflections and colours. This rendering allows you to visualise your selection of products in your home and to discover the images of your future interior.'
        },
        {
            title: '4 - And Then?',
            description:
                'We create your furniture in the best European workshops, then organise their delivery, assembly and installation for you by qualified professionals. Your decorator accompanies you every step of the way, taking care of every detail.'
        }
    ];

    return (
        <Wrapper>
            {/* Services Section */}
            <SectionHeader variant="h4" align="center">
                Our Services
            </SectionHeader>
            <SubText variant="subtitle1" align="center">
                Explore the wide range of home decor services we offer at Residy Home Decor.
            </SubText>
            <Grid container spacing={4} justifyContent="center" mb={14}>
                {services.map((service, index) => (
                    <Grid item xs={12} md={4} lg={3} key={index}>
                        <Item>
                            <video
                                autoPlay
                                loop
                                muted
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    margin: '0 auto',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    boxShadow: 'none'
                                }}
                            >
                                <source src={service.video} type="video/mp4" />
                            </video>
                            <Typography variant="h6" gutterBottom>
                                {service.title}
                            </Typography>
                        </Item>
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
            <StagesWrapper>
                <SectionHeader variant="h4" align="center">
                    The Stages of Your Project
                </SectionHeader>
                <SubText variant="subtitle1" align="center">
                    Discover how we bring your dream home to life, step by step.
                </SubText>
                <StageContainer>
                    <StageContent>
                        {stages.map((stage, index) => (
                            <Box key={index} mb={6}>
                                <Typography variant="h5" gutterBottom>
                                    {stage.title}
                                </Typography>
                                <Typography variant="body1">{stage.description}</Typography>
                            </Box>
                        ))}
                    </StageContent>
                    <BigImage component="img" src={main} alt="Stages of Your Project" />
                </StageContainer>
            </StagesWrapper>

            {/* New Section - Promises */}
            <Box sx={{ padding: '60px 20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
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
                                margin: '0 auto 16px', // Center the icon and add margin below
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
                                margin: '0 auto 16px', // Center the icon and add margin below
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
                                margin: '0 auto 16px', // Center the icon and add margin below
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
                                margin: '0 auto 16px', // Center the icon and add margin below
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