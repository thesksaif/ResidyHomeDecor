import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import // useTheme
//  styled
'@mui/material/styles';
import { Box, Button, Container, Grid, Link, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import AnimateButton from 'ui-component/extended/AnimateButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import bGVideo from 'assets/videos/heroSectionBG.mp4';
import v2 from 'assets/videos/v2.mp4';
import v3 from 'assets/videos/v3.mp4';
import v4 from 'assets/videos/v4.mp4';
import v5 from 'assets/videos/v5.mp4';
// import dashboard from 'assets/images/landing/hero-dashboard.png';
// import widget1 from 'assets/images/landing/hero-widget-1.png';
// import widget2 from 'assets/images/landing/hero-widget-2.png';
import { DASHBOARD_PATH } from 'config';

const videos = [bGVideo, v2, v3, v4, v5];

// const HeaderImage = styled('img')(({ theme }) => ({
//     maxWidth: '100%',
//     borderRadius: 20,
//     transform: 'scale(1.7)',
//     transformOrigin: theme.direction === 'rtl' ? '100% 50%' : '0 50%',
//     [theme.breakpoints.down('xl')]: {
//         transform: 'scale(1.5)'
//     },
//     [theme.breakpoints.down('lg')]: {
//         transform: 'scale(1.2)'
//     }
// }));

// const HeaderAnimationImage = styled('img')({
//     maxWidth: '100%',
//     filter: 'drop-shadow(0px 0px 50px rgb(33 150 243 / 30%))'
// });

const HeaderSection = () => {
    // const theme = useTheme();
    const headerSX = { fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem', lg: '3.5rem' } };
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleVideoEnd = useCallback(() => {
        const nextVideoIndex = (currentVideoIndex + 1) % videos.length;
        setCurrentVideoIndex(nextVideoIndex);
    }, [currentVideoIndex]);

    useEffect(() => {
        const videoElement = videoRef.current;

        const handleCanPlayThrough = () => {
            console.log('Video can play through');
            if (!isPlaying) {
                videoElement.play();
                setIsPlaying(true);
            }
        };

        const handleEnded = () => {
            console.log('Video ended');
            handleVideoEnd();
            setIsPlaying(false);
        };

        videoElement.addEventListener('canplaythrough', handleCanPlayThrough);
        videoElement.addEventListener('ended', handleEnded);

        return () => {
            videoElement.removeEventListener('canplaythrough', handleCanPlayThrough);
            videoElement.removeEventListener('ended', handleEnded);
        };
    }, [handleVideoEnd, isPlaying]);

    useEffect(() => {
        const videoElement = videoRef.current;
        videoElement.src = videos[currentVideoIndex];
        videoElement.load();
        console.log('Video source set to:', videos[currentVideoIndex]);
    }, [currentVideoIndex]);

    return (
        <Box sx={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            <Box
                component="video"
                ref={videoRef}
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
<<<<<<< HEAD
                    objectFit: 'cover'
=======
                    objectFit: 'cover',
>>>>>>> origin/main
                    // zIndex: -1
                }}
                autoPlay
                loop={false}
                muted
            >
                <source src={videos[currentVideoIndex]} type="video/mp4" />
                Your browser does not support the video tag.
            </Box>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
<<<<<<< HEAD
                    backgroundColor: 'rgba(0, 0, 0, 0.5)' // Adjust the alpha value to change transparency
=======
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value to change transparency
>>>>>>> origin/main
                    // zIndex: -1
                }}
            />
            <Container sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ mt: { xs: 10, sm: 6, md: 18.75 }, mb: { xs: 2.5, md: 10 } }}
                >
                    <Grid item xs={12} md={5}>
                        <Grid container spacing={6}>
                            <Grid item xs={12}>
                                <motion.div
                                    initial={{ opacity: 0, translateY: 550 }}
                                    animate={{ opacity: 1, translateY: 0 }}
                                    transition={{ type: 'spring', stiffness: 150, damping: 30 }}
                                >
                                    <Stack spacing={1}>
<<<<<<< HEAD
                                        <Typography
                                            textAlign={{ xs: 'center', md: 'left' }}
                                            variant="h1"
                                            sx={{ ...headerSX, color: 'white' }}
                                        >
=======
                                        <Typography textAlign={{ xs: 'center', md: 'left' }} variant="h1"  sx={{ ...headerSX, color: 'white' }}>
>>>>>>> origin/main
                                            Design Your Comfort
                                        </Typography>
                                        <Typography
                                            textAlign={{ xs: 'center', md: 'left' }}
                                            variant="h1"
                                            color="danger"
                                            sx={{ headerSX, color: '#dc3545' }}
                                        >
                                            Dream Interior
                                        </Typography>
                                    </Stack>
                                </motion.div>
                            </Grid>
                            <Grid item xs={12} sx={{ mt: -2.5, textAlign: { xs: 'center', md: 'left' } }}>
                                <motion.div
                                    initial={{ opacity: 0, translateY: 550 }}
                                    animate={{ opacity: 1, translateY: 0 }}
                                    transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.2 }}
                                >
                                    <Typography
                                        textAlign={{ xs: 'center', md: 'left' }}
                                        color="text.primary"
                                        variant="body1"
                                        sx={{ fontSize: { xs: '1rem', md: '1.125rem', color: 'white' } }}
                                    >
                                        Berry is React based Dashboard template which helps you to build faster and beautiful web
                                        applications.
                                    </Typography>
                                </motion.div>
                            </Grid>
                            <Grid item xs={12}>
                                <motion.div
                                    initial={{ opacity: 0, translateY: 550 }}
                                    animate={{ opacity: 1, translateY: 0 }}
                                    transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.4 }}
                                >
                                    <Grid container spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                        <Grid item>
                                            <AnimateButton>
                                                <Button
                                                    component={RouterLink}
                                                    to={DASHBOARD_PATH}
                                                    target="_blank"
                                                    size="large"
                                                    variant="contained"
                                                    color="error"
                                                    startIcon={<PlayArrowIcon />}
                                                >
                                                    GET QUOTE
                                                </Button>
                                            </AnimateButton>
                                        </Grid>
                                        <Grid item>
                                            <Button
                                                component={Link}
                                                href="https://links.codedthemes.com/hsqll"
                                                target="_blank"
                                                size="large"
                                                sx={{ color: 'white' }}
                                            >
                                                Contact Now
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </motion.div>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* <Grid item xs={12} md={7} sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Box sx={{ position: 'relative', mt: 8.75, zIndex: 9 }}>
                            <HeaderImage src={dashboard} alt="Berry" />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: { md: -35, lg: -110 },
                                    right: theme.direction === 'rtl' ? 170 : { md: -50, lg: -140, xl: -220 },
                                    width: { md: 220, lg: 290 },
                                    animation: '10s slideY linear infinite'
                                }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.2 }}
                                >
                                    <HeaderAnimationImage src={widget1} alt="Berry" />
                                </motion.div>
                            </Box>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: { md: -20, lg: -90 },
                                    left: { md: 100, lg: 300 },
                                    width: { md: 220, lg: 280 },
                                    animation: '10s slideY linear infinite',
                                    animationDelay: '2s'
                                }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 150, damping: 30, delay: 0.4 }}
                                >
                                    <HeaderAnimationImage src={widget2} alt="Berry" />
                                </motion.div>
                            </Box>
                        </Box>
                    </Grid> */}
                </Grid>
            </Container>
        </Box>
    );
};

export default HeaderSection;
