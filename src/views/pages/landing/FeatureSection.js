import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';
import Slider from 'react-slick';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import Avatar from 'ui-component/extended/Avatar';
import SectionHeader from 'ui-component/SectionHeader';

// assets
import Offer1 from 'assets/images/landing/offer/offer-1.png';
import Offer2 from 'assets/images/landing/offer/offer-2.png';
import Offer3 from 'assets/images/landing/offer/offer-3.png';
import Offer4 from 'assets/images/landing/offer/offer-4.png';
import Offer5 from 'assets/images/landing/offer/offer-5.png';
import Offer6 from 'assets/images/landing/offer/offer-6.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OfferCard = ({ title, caption, image }) => {
    const theme = useTheme();
    const AvaterSx = {
        background: 'transparent',
        color: theme.palette.secondary.main,
        width: 56,
        height: 56
    };
    return (
        <FadeInWhenVisible>
            <SubCard
                sx={{
                    bgcolor: theme.palette.mode === 'dark' ? 'dark.800' : 'grey.100',
                    borderColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.divider,
                    '&:hover': { boxShadow: 'none' },
                    height: '100%'
                }}
            >
                <Box spacing={4}>
                    <Avatar variant="rounded" sx={AvaterSx}>
                        <CardMedia component="img" src={image} alt="Beautiful User Interface" />
                    </Avatar>
                    <Box spacing={2}>
                        <Typography variant="h3" sx={{ fontWeight: 500 }}>
                            {title}
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '1rem' }}>
                            {caption}
                        </Typography>
                    </Box>
                </Box>
            </SubCard>
        </FadeInWhenVisible>
    );
};

OfferCard.propTypes = {
    title: PropTypes.string,
    caption: PropTypes.string,
    image: PropTypes.string
};

const offerData = [
    {
        title: 'Beautiful Design Aesthetics',
        caption:
            'Residy Home Decor can enhance your spaces by providing clear and intuitive layouts with a consistent and stylish look and feel.',
        image: Offer1
    },
    {
        title: 'Time and Cost Savings',
        caption:
            'Residy Home Decor saves designers time and effort by providing pre-planned layouts and design elements, allowing them to focus on other aspects of the project.',
        image: Offer2
    },
    {
        title: 'Reduce Design Complexity',
        caption: 'Residy Home Decor simplifies the design process with easy theme setup and well-organized, flexible layout options.',
        image: Offer3
    },
    {
        title: 'Improved Scalability',
        caption:
            'Residy Home Decor uses scalable design strategies to ensure that your spaces remain efficient and stylish as your needs evolve.',
        image: Offer4
    },
    {
        title: 'Well-Documented and Supported',
        caption:
            'With a range of resources including design guides, tutorials, and FAQs to help clients understand and effectively use Residy Home Decor.',
        image: Offer5
    },
    {
        title: 'Performance Centric',
        caption:
            'Residy Home Decor is focused on delivering optimal performance, ensuring that your design projects are both beautiful and functional.',
        image: Offer6
    }
];

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
        { breakpoint: 1200, settings: { slidesToShow: 3 } },
        { breakpoint: 900, settings: { slidesToShow: 2 } },
        { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
};

// =============================|| LANDING - FEATURE PAGE ||============================= //

const FeatureSection = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                width: '100%',
                bgcolor: theme.palette.mode === 'dark' ? 'background.default' : 'grey.100',
                py: 6
            }}
        >
            <Box sx={{ maxWidth: 1300, mx: 'auto', px: { xs: 2, sm: 3, md: 0 }, mb: 4 }}>
                <SectionHeader
                    heading="What Does Residy Home Decor Offer?"
                    subheading="Residy Home Decor is a reliable choice for your interior design needs, offering a wide range of features to easily manage your design projects."
                />
                <Slider {...sliderSettings}>
                    {offerData.map((item) => (
                        <Box key={item.title} px={2}>
                            <Card
                                sx={{
                                    borderRadius: 4,
                                    boxShadow: 3,
                                    overflow: 'hidden',
                                    position: 'relative',
                                    minHeight: 340,
                                    height: 340,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    bgcolor: '#fff',
                                    transition: 'background 0.35s, color 0.35s',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        bgcolor: '#dc3545',
                                        color: '#fff'
                                    }
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={item.image}
                                    alt={item.title}
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        objectFit: 'contain',
                                        mt: 4,
                                        mb: 2,
                                        transition: 'none',
                                        filter: 'none'
                                    }}
                                />
                                <CardContent
                                    sx={{
                                        flexGrow: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        px: 2,
                                        pt: 0,
                                        pb: 2,
                                        color: 'inherit',
                                        transition: 'color 0.35s',
                                        '&:hover': {
                                            color: '#fff'
                                        }
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 700,
                                            mb: 1,
                                            color: 'inherit',
                                            textAlign: 'center'
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'inherit', textAlign: 'center' }}>
                                        {item.caption}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Slider>
            </Box>
        </Box>
    );
};

export default FeatureSection;
