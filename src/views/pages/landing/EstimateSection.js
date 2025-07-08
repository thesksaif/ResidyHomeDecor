import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const estimateWords = ['Kitchen', 'Full Home Interior', 'Wardrobe'];

const estimateData = [
    {
        title: 'Full Home Interior',
        desc: 'Know the estimate price for your full home interiors',
        icon: (
            <svg width="70" height="70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="70" height="70" rx="35" fill="#F8F8F8" />
                <path d="M23 47h24v-12a12 12 0 0 0-24 0v12Z" stroke="#dc3545" strokeWidth="2.4" />
                <circle cx="47" cy="28" r="3" fill="#dc3545" />
                <rect x="28" y="35" width="12" height="6" rx="3" fill="#dc3545" />
            </svg>
        ),
        link: '/quote'
    },
    {
        title: 'Kitchen',
        desc: 'Get an approximate costing for your kitchen interior.',
        icon: (
            <svg width="70" height="70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="70" height="70" rx="35" fill="#F8F8F8" />
                <rect x="21" y="41" width="28" height="8" rx="3" fill="#dc3545" />
                <rect x="27" y="27" width="16" height="12" rx="3" fill="#fff" stroke="#dc3545" strokeWidth="2.4" />
                <circle cx="49" cy="33" r="3" fill="#dc3545" />
                <rect x="33" y="30" width="6" height="6" rx="3" fill="#dc3545" />
            </svg>
        ),
        link: '/kitchen-quote'
    },
    {
        title: 'Wardrobe',
        desc: 'Our estimate for your dream wardrobe',
        icon: (
            <svg width="70" height="70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="70" height="70" rx="35" fill="#F8F8F8" />
                <rect x="23" y="23" width="24" height="24" rx="3" fill="#fff" stroke="#dc3545" strokeWidth="2.4" />
                <rect x="23" y="23" width="11" height="24" rx="3" fill="#dc3545" />
                <rect x="36" y="23" width="11" height="24" rx="3" fill="#dc3545" fillOpacity="0.5" />
            </svg>
        ),
        link: '/wardrobe-quote'
    }
];

const EstimateSection = () => {
    const [wordIndex, setWordIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % estimateWords.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box sx={{ width: '100%', py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
            <Box sx={{ maxWidth: 1200, mx: 'auto', mb: 4, textAlign: 'center', px: 2 }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: '2rem', md: '2.5rem' },
                        mb: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 1
                    }}
                >
                    Get the estimate for your{' '}
                    <Box
                        component="span"
                        sx={{
                            color: '#dc3545',
                            display: 'inline-block',
                            minWidth: '14.5rem',
                            height: '2.8rem',
                            position: 'relative',
                            overflow: 'hidden',
                            verticalAlign: 'middle'
                        }}
                    >
                        <AnimatePresence initial={false} mode="wait">
                            <motion.span
                                key={estimateWords[wordIndex]}
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -40, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    width: '100%',
                                    textAlign: 'center'
                                }}
                            >
                                {estimateWords[wordIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </Box>
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 4 }}>
                    Calculate the approximate cost of doing up your home interiors
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    {estimateData.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.title}>
                            <Card
                                sx={{
                                    borderRadius: 4,
                                    boxShadow: 2,
                                    p: 2,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    transition: 'box-shadow 0.3s',
                                    '&:hover': { boxShadow: 6 }
                                }}
                            >
                                <Box sx={{ mb: 2 }}>{item.icon}</Box>
                                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 0 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                                        {item.desc}
                                    </Typography>
                                </CardContent>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        textDecoration: 'none',
                                        width: '90%'
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        size="large"
                                        sx={{
                                            bgcolor: '#dc3545',
                                            borderRadius: 8,
                                            fontWeight: 700,
                                            fontSize: '1rem',
                                            width: '100%',
                                            mb: 2,
                                            mt: 'auto',
                                            '&:hover': { bgcolor: '#b71c1c' }
                                        }}
                                    >
                                        CALCULATE&nbsp;&nbsp;&rarr;
                                    </Button>
                                </a>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default EstimateSection;
