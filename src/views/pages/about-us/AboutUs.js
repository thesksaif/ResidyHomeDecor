import { Container, Grid, Typography, Box, Stack } from '@mui/material';
import { keyframes } from '@mui/system';

import main from 'assets/images/about/Residy.png';
import craftsmanImage from 'assets/images/about/craftsman.webp';
import team from 'assets/images/about/team.avif';
import ResidyVsRetailSVG from './ResidyVsRetailSVG';

// Add floating animation for SVGs
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-18px); }
  100% { transform: translateY(0px); }
`;

const AboutUs = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                px: { xs: 2, sm: 3, md: 4, lg: 6 }
            }}
        >
            <Grid container direction="column" alignItems="center" spacing={{ xs: 4, sm: 5, md: 6 }}>
                <Grid item xs={12}>
                    <Typography
                        variant="h2"
                        align="center"
                        sx={{
                            fontSize: {
                                xs: '1.6rem',
                                sm: '1.9rem',
                                md: '2.5rem',
                                lg: '3rem'
                            },
                            fontWeight: 700,
                            mb: 2
                        }}
                    >
                        How it started
                    </Typography>
                    <Typography
                        variant="body1"
                        align="center"
                        sx={{
                            fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                            color: 'text.secondary',
                            maxWidth: '840px',
                            mx: 'auto',
                            mb: 4
                        }}
                    >
                        At ResidyHomeDecor, we specialize in creating inspiring interiors that reflect your personality and needs. Our
                        experienced team combines creativity and technical expertise to deliver exceptional results for every client. From
                        concept to completion, we are dedicated to making your dream space a reality.
                    </Typography>
                </Grid>

                {/* SVG Comparison Section */}
                <Grid item xs={12}>
                    <Typography
                        variant="h3"
                        align="center"
                        sx={{
                            fontWeight: 700,
                            mb: 3,
                            mt: 2,
                            color: '#dc4545',
                            fontSize: { xs: '1.3rem', sm: '1.6rem', md: '2rem' }
                        }}
                    >
                        How Residy is Different
                    </Typography>
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: 1100,
                            mx: 'auto',
                            mb: 6,
                            boxShadow: '0 4px 32px rgba(220,69,69,0.07)',
                            borderRadius: '32px',
                            overflow: 'hidden',
                            background: '#fff'
                        }}
                    >
                        <ResidyVsRetailSVG />
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            maxWidth: '800px',
                            mx: 'auto'
                        }}
                    >
                        <img
                            src={main}
                            alt="Article Experience vs Traditional Retail Flowchart"
                            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} mt={6} mb={5}>
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '900px',
                            mx: 'auto',
                            minHeight: 320
                        }}
                    >
                        {/* SVG background left */}
                        <Box
                            sx={{
                                position: 'absolute',
                                left: { xs: -30, md: -80 },
                                top: { xs: 40, md: 0 },
                                width: { xs: 120, md: 220 },
                                height: { xs: 120, md: 220 },
                                zIndex: 0,
                                opacity: 0.18,
                                animation: `${float} 7s ease-in-out infinite`
                            }}
                        >
                            <svg width="100%" height="100%" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="110" cy="110" rx="110" ry="110" fill="#dc4545" />
                                <ellipse cx="70" cy="70" rx="40" ry="40" fill="#f8d7da" />
                            </svg>
                        </Box>
                        <Stack
                            direction={{ xs: 'column', md: 'row' }}
                            alignItems="center"
                            spacing={{ xs: 3, sm: 4, md: 6 }}
                            sx={{
                                maxWidth: '900px',
                                mx: 'auto',
                                position: 'relative',
                                zIndex: 1
                            }}
                        >
                            <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontWeight: 700,
                                        mb: 2,
                                        fontSize: { xs: '1.4rem', sm: '1.6rem', md: '2rem' }
                                    }}
                                >
                                    We like to do things properly.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'text.secondary',
                                        fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.2rem' }
                                    }}
                                >
                                    We collaborate with skilled designers and craftsmen to deliver beautiful, functional interiors. Our
                                    focus is on quality, attention to detail, and customer satisfaction in every project.
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    flex: 1,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    position: 'relative'
                                }}
                            >
                                {/* SVG blob behind image */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        right: { xs: -20, md: -40 },
                                        top: { xs: 30, md: 40 },
                                        width: { xs: 120, md: 180 },
                                        height: { xs: 120, md: 180 },
                                        zIndex: 0,
                                        opacity: 0.22,
                                        animation: `${float} 9s ease-in-out infinite`
                                    }}
                                >
                                    <svg width="100%" height="100%" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M90 0C140 0 180 40 180 90C180 140 140 180 90 180C40 180 0 140 0 90C0 40 40 0 90 0Z"
                                            fill="#dc4545"
                                        />
                                        <ellipse cx="120" cy="60" rx="30" ry="30" fill="#f8d7da" />
                                    </svg>
                                </Box>
                                <img
                                    src={craftsmanImage}
                                    alt="Craftsman working on furniture"
                                    style={{
                                        width: '100%',
                                        maxWidth: '450px',
                                        objectFit: 'cover',
                                        borderRadius: '18px',
                                        position: 'relative',
                                        zIndex: 1,
                                        boxShadow: '0 8px 32px rgba(220,69,69,0.10)'
                                    }}
                                />
                            </Box>
                        </Stack>
                    </Box>
                </Grid>

                <Grid item xs={12} mt={6} mb={5}>
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            py: { xs: 3, sm: 5, md: 7 },
                            minHeight: 320
                        }}
                    >
                        {/* SVG background right */}
                        <Box
                            sx={{
                                position: 'absolute',
                                right: { xs: -30, md: -80 },
                                bottom: { xs: 40, md: 0 },
                                width: { xs: 120, md: 220 },
                                height: { xs: 120, md: 220 },
                                zIndex: 0,
                                opacity: 0.18,
                                animation: `${float} 8s ease-in-out infinite`
                            }}
                        >
                            <svg width="100%" height="100%" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="110" cy="110" rx="110" ry="110" fill="#dc4545" />
                                <ellipse cx="150" cy="150" rx="40" ry="40" fill="#f8d7da" />
                            </svg>
                        </Box>
                        <Stack
                            direction={{ xs: 'column', md: 'row' }}
                            alignItems="center"
                            spacing={{ xs: 4, sm: 5, md: 6 }}
                            sx={{
                                maxWidth: '1200px',
                                mx: 'auto',
                                position: 'relative',
                                zIndex: 1
                            }}
                        >
                            <Box
                                sx={{
                                    flex: 1,
                                    textAlign: { xs: 'center', md: 'left' },
                                    maxWidth: { xs: '500px', md: '400px' }
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontWeight: 700,
                                        mb: 2,
                                        fontSize: { xs: '1.4rem', sm: '1.6rem', md: '2rem' }
                                    }}
                                >
                                    The team behind our success
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: 'text.secondary',
                                        fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' }
                                    }}
                                >
                                    Our diverse team of award-winning designers and experts are here to make your home the best it could be.
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    flex: 2,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    position: 'relative'
                                }}
                            >
                                {/* SVG blob behind image */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        left: { xs: -20, md: -40 },
                                        bottom: { xs: 30, md: 40 },
                                        width: { xs: 120, md: 180 },
                                        height: { xs: 120, md: 180 },
                                        zIndex: 0,
                                        opacity: 0.22,
                                        animation: `${float} 10s ease-in-out infinite`
                                    }}
                                >
                                    <svg width="100%" height="100%" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M90 0C140 0 180 40 180 90C180 140 140 180 90 180C40 180 0 140 0 90C0 40 40 0 90 0Z"
                                            fill="#dc4545"
                                        />
                                        <ellipse cx="60" cy="120" rx="30" ry="30" fill="#f8d7da" />
                                    </svg>
                                </Box>
                                <img
                                    src={team}
                                    alt="Team behind success"
                                    style={{
                                        width: '100%',
                                        maxWidth: '500px',
                                        height: 'auto',
                                        objectFit: 'contain',
                                        borderRadius: '18px',
                                        position: 'relative',
                                        zIndex: 1,
                                        boxShadow: '0 8px 32px rgba(220,69,69,0.10)'
                                    }}
                                />
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutUs;
