import React from 'react';
import {
    Button,
    Container,
    FormControl,
    Grid,
    OutlinedInput,
    TextField,
    Typography,
    Box
} from '@mui/material';
import { LocationOn, Phone, Email } from '@mui/icons-material';
import contactIllustration from 'assets/images/contact/contactIllustration.png';

const ContactCard = () => {
    return (
        <>
            {/* Main Form Section */}
            <Container maxWidth="lg" sx={{ py: 16, mb: -12 }} >
                <Grid container spacing={8} alignItems="center">
                    {/* Left Section - Image */}
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <img
                            src={contactIllustration}
                            alt="ContactIllustration"
                            style={{
                                width: '100%',
                                maxWidth: '600px',
                                height: 'auto'
                            }}
                        />
                    </Grid>

                    {/* Right Section - Form */}
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="h2"
                            component="div"
                            sx={{
                                color: '#E8474E',
                                fontWeight: 'bold',
                                mb: 3,
                                textAlign: 'center'
                            }}
                        >
                            Get In Touch
                        </Typography>

                        {/* Form */}
                        <Grid container spacing={2}>
                            {['Enter your full name', 'Phone number', 'Your email', 'Service Description'].map(
                                (placeholder, index) => (
                                    <Grid item xs={12} key={index}>
                                        <FormControl fullWidth>
                                            <OutlinedInput placeholder={placeholder} />
                                        </FormControl>
                                    </Grid>
                                )
                            )}

                            <Grid item xs={12}>
                                <TextField
                                    placeholder="Message"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>

                            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                                <input type="checkbox" defaultChecked style={{ marginRight: 8 }} />
                                <Typography variant="body2">
                                    You can reach me on{' '}
                                    <Typography
                                        component="span"
                                        sx={{ color: 'green', ml: 0.5 }}
                                    >
                                        WhatsApp
                                    </Typography>
                                </Typography>
                            </Grid>

                            {/* Submit Button */}
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        backgroundColor: '#D8212E',
                                        color: '#FFF',
                                        py: 1.5,
                                        '&:hover': { backgroundColor: '#B71C24' },
                                        fontWeight: 'bold'
                                    }}
                                >
                                    SEND
                                </Button>
                            </Grid>

                            <Grid item xs={12}>
                                <Typography
                                    variant="body2"
                                    align="center"
                                    sx={{ color: '#888' }}
                                >
                                    By submitting this form, you agree to the{' '}
                                    <Typography
                                        component="span"
                                        sx={{
                                            color: '#F85063',
                                            textDecoration: 'underline'
                                        }}
                                    >
                                        privacy policy
                                    </Typography>{' '}
                                    and{' '}
                                    <Typography
                                        component="span"
                                        sx={{
                                            color: '#F85063',
                                            textDecoration: 'underline'
                                        }}
                                    >
                                        terms of use
                                    </Typography>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

            {/* Map Section */}
            <Container
                maxWidth="lg"
                sx={{
                    my: 6,
                    py: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: '#F9F9F9',
                    borderRadius: '8px',
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        color: '#000',
                        fontWeight: 'bold',
                        mb: 4,
                        textAlign: 'center'
                    }}
                >
                    Map Location
                </Typography>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.904471472408!2d85.11841077554966!3d25.608090414935212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed583dcb8fdcc1%3A0x7d8b8723cdf39b3a!2sBihar%20Museum!5e0!3m2!1sen!2sin!4v1734398280780!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{
                        border: '0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                ></iframe>
            </Container>

            {/* Info Cards Section */}
            <Container maxWidth="lg" sx={{ my: 8 }}>
                <Typography
                    variant="h2"
                    sx={{
                        color: '#000',
                        fontWeight: 'bold',
                        mb: 5,
                        textAlign: 'center'
                    }}
                >
                    Contact Us
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {/* Reusable Card Component */}
                    {[
                        {
                            title: 'Main Office',
                            icon: <LocationOn sx={{ fontSize: '40px', mb: 1 }} />,
                            text1: 'Patna-13 ( Bihar )',
                            text2: '221, Patliputra Colony, Near Patliputra Park'
                        },
                        {
                            title: 'Make a Call',
                            icon: <Phone sx={{ fontSize: '40px', mb: 1 }} />,
                            text1: '9264484444',
                            text2: 'Mon - Sat: 09am - 08pm'
                        },
                        {
                            title: 'Send a Mail',
                            icon: <Email sx={{ fontSize: '40px', mb: 1 }} />,
                            text1: 'info@residygroup.com',
                            text2: 'info@residygroup.com'
                        }
                    ].map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                sx={{
                                    border: '1px solid #ddd',
                                    borderRadius: '10px',
                                    p: 4,
                                    textAlign: 'center',
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                    '&:hover': { boxShadow: '0 8px 16px rgba(0,0,0,0.2)' }
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 'bold', mb: 1 }}
                                >
                                    {item.title}
                                </Typography>
                                <Box sx={{ color: '#E8474E' }}>{item.icon}</Box>
                                <Typography
                                    variant="body1"
                                    sx={{ fontWeight: 'bold', mb: 1 }}
                                >
                                    {item.text1}
                                </Typography>
                                <Typography variant="body2">{item.text2}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default ContactCard;
