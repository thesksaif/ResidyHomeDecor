import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Button, Container, Grid, Link, Stack, Typography } from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import bGVideo from 'assets/videos/heroSectionBG.mp4';
import v2 from 'assets/videos/v2.mp4';
import v3 from 'assets/videos/v3.mp4';
import v4 from 'assets/videos/v4.mp4';
import v5 from 'assets/videos/v5.mp4';
import { DASHBOARD_PATH } from 'config';

const videos = [bGVideo, v2, v3, v4, v5];

const HeaderSection = () => {
    const headerSX = { fontSize: { xs: '2rem', sm: '3rem', md: '3.5rem', lg: '3.5rem' } };
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoRef = useRef(null);

    const handleVideoEnd = useCallback(() => {
        const nextVideoIndex = (currentVideoIndex + 1) % videos.length;
        setCurrentVideoIndex(nextVideoIndex);
    }, [currentVideoIndex]);

    useEffect(() => {
        const videoElement = videoRef.current;

        const handleEnded = () => {
            handleVideoEnd();
        };

        videoElement.addEventListener('ended', handleEnded);

        return () => {
            videoElement.removeEventListener('ended', handleEnded);
        };
    }, [handleVideoEnd]);

    useEffect(() => {
        const videoElement = videoRef.current;
        videoElement.src = videos[currentVideoIndex];
        videoElement.load();
    }, [currentVideoIndex]);

    return (
        <Box sx={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
            {/* Background Video */}
            <Box
                component="video"
                ref={videoRef}
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }}
                autoPlay
                loop={false}
                muted
            >
                <source src={videos[currentVideoIndex]} type="video/mp4" />
                Your browser does not support the video tag.
            </Box>

            {/* Dark Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1
                }}
            />

            {/* Content Section */}
            <Container
                sx={{
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 2
                }}
            >
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item xs={12} md={5}>
                        <Grid container spacing={6}>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <Typography textAlign={{ xs: 'center', md: 'left' }} variant="h1" sx={{ ...headerSX, color: 'white' }}>
                                        Design Your Comfort
                                    </Typography>
                                    <Typography
                                        textAlign={{ xs: 'center', md: 'left' }}
                                        variant="h1"
                                        sx={{ ...headerSX, color: '#dc3545' }}
                                    >
                                        Dream Interior
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} sx={{ mt: -2.5, textAlign: { xs: 'center', md: 'left' } }}>
                                <Typography
                                    textAlign={{ xs: 'center', md: 'left' }}
                                    color="white"
                                    variant="body1"
                                    sx={{ fontSize: { xs: '1rem', md: '1.125rem' } }}
                                >
                                    Resdiy Home Decor is a home decor company that helps you design your dream home.
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
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
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default HeaderSection;
