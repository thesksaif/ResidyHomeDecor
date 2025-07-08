// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Badge, CardMedia, Container, Link, Stack } from '@mui/material';

// third-party
import Slider from 'react-slick';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import SectionHeader from 'ui-component/SectionHeader';

// assets
import Philips from 'assets/images/partner/philips.png';
import Jaguar from 'assets/images/partner/Jaquar.png';
import AsianPaint from 'assets/images/partner/asian_paint.png';
import SyskaLed from 'assets/images/partner/syska.png';
import Wipro from 'assets/images/partner/wipro.png';
import Fevicol from 'assets/images/partner/fevicol.png';
import Crompton from 'assets/images/partner/Crompton.png';
import urbanLeader from 'assets/images/partner/urbanLeader.png';
import Hettich from 'assets/images/partner/Hettich.png';

export const frameworks = [
    {
        title: 'Jaguar',
        logo: Jaguar,
        link: 'https://jaquar.com/'
    },
    {
        title: 'Philips',
        logo: Philips,
        link: 'https://lighting.philips.co.in/'
    },
    {
        title: 'Asian Paint',
        logo: AsianPaint,
        link: 'https://asianpaints.com/'
    },
    {
        title: 'Syska Led',
        logo: SyskaLed,
        link: 'https://syska.co.in/'
    },
    {
        title: 'Wipro',
        logo: Wipro,
        link: 'https://wiproconsumercare.com/brands-india/'
    },
    {
        title: 'Fevicol',
        logo: Fevicol,
        link: 'https://fevicol.in/'
    },
    {
        title: 'Crompton',
        logo: Crompton,
        link: 'https://crompton.co.in/',
        isUpcoming: true
    },
    {
        title: 'Urban Leader',
        logo: urbanLeader,
        link: 'https://urbanladder.com/'
    },
    {
        title: 'Hettich',
        logo: Hettich,
        link: 'https://web.hettich.com/en-de/home'
    }
];

// =============================|| LANDING - FRAMWORK SECTION ||============================= //

const FrameworkSection = () => {
    const theme = useTheme();

    const settings = {
        dots: true,
        className: 'center',
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 7,
        slidesToScroll: 7,
        speed: 500,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1534,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    dots: true
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true
                }
            }
        ]
    };

    return (
        <>
            <Container sx={{ mb: 6 }}>
                <SectionHeader heading="Our Trusted Partners" subheading="Best in World Wide" />
            </Container>
            <Box
                sx={{
                    overflow: 'hidden',
                    div: {
                        textAlign: 'center'
                    },
                    '.slick-track': {
                        display: { xs: 'flex', xl: 'inherit' }
                    },
                    '& .slick-dots': {
                        position: 'initial',
                        mt: 4,
                        '& li button:before': {
                            fontSize: '0.75rem'
                        },
                        '& li.slick-active button:before': {
                            opacity: 1,
                            color: 'primary.main'
                        }
                    }
                }}
            >
                <Slider {...settings}>
                    {frameworks.map((item, index) => (
                        <Badge
                            key={index}
                            color="primary"
                            badgeContent={item.isUpcoming ? 'Coming Soon' : 0}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left'
                            }}
                            sx={{
                                '& .MuiBadge-badge': {
                                    left: '50%',
                                    transform: 'scale(1) translate(-50%, 0)',
                                    ...(item.isUpcoming && {
                                        bgcolor: 'background.paper',
                                        color: 'primary.main',
                                        border: '1px solid',
                                        borderColor: theme.palette.primary.main
                                    })
                                }
                            }}
                        >
                            <SubCard
                                content={false}
                                sx={{
                                    width: '180px !important',
                                    height: 140,
                                    // boxShadow: '0px 4px 15px 0px rgba(3, 99, 242, 0.15)',
                                    border: 'none',
                                    display: 'inline-flex !important',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    my: 1,
                                    borderRadius: 2,
                                    cursor: 'pointer',
                                    bgcolor: theme.palette.mode === 'dark' ? 'dark.800' : 'grey.100',
                                    '&:hover': {
                                        bgcolor: theme.palette.mode === 'dark' ? 'primary.main' : 'primary.light'
                                    }
                                }}
                            >
                                <Box
                                    component={Link}
                                    href={item.link}
                                    target="_blank"
                                    underline="none"
                                    sx={{
                                        display: 'flex',
                                        flex: 1,
                                        height: '100%',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Stack spacing={2} alignItems="center">
                                        <Stack sx={{ width: 'auto', height: 48 }} alignItems="center" justifyContent="center">
                                            <CardMedia alt={item.title} src={item.logo} component="img" />
                                        </Stack>
                                        {/* <Typography variant="h4" sx={{ width: 'max-content' }}>
                                            {item.title}
                                        </Typography> */}
                                    </Stack>
                                </Box>
                            </SubCard>
                        </Badge>
                    ))}
                </Slider>
            </Box>
        </>
    );
};

export default FrameworkSection;
