import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography, Grid, Paper} from '@mui/material';
import SimpleModal from 'views/pages/landing/SimpleModal.js';

// Project  media imports
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

// slider
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
        { video: KidsBedVideo, title: 'kids Bedroom' },
        { video: CeilingVideo, title: 'Ceiling Lamp' },
        { video: MasterBedVideo, title: 'Master Bedroom' },
        { video: DeskVideo, title: 'Desk' }
    ];

    // Carousel Images
    const carouselImages = [kitchen, living, living2, kitchen2, living3, kitchen3];

    // Slick Slider Settings
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

    return (
        <Wrapper>
            {/* Services Section */}
            <SectionHeader variant="h4" align="center">
                Our Services
            </SectionHeader>
            <SubText variant="subtitle1" align="center">
                Explore the wide range of home decor services we offer at Residy Home Decor.
            </SubText>
            <Grid container spacing={4} justifyContent="center" mb={14} >
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

            <Box mt={4}>
                <SimpleModal />
            </Box>
        </Wrapper>
    );
};

export default Services;
