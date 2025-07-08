import React, { useState } from 'react';
import { Container, Grid, Typography, Box, Paper, TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import { LocationOn, Phone, Email } from '@mui/icons-material';
import contactIllustration from 'assets/images/contact/contactIllustration.png';
import './ContactForm.css';

const ContactCard = () => {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
        whatsapp: true
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit logic here
        alert('Submitted!');
    };

    return (
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 12 } }}>
            <Paper elevation={4} sx={{ borderRadius: 4, overflow: 'hidden', p: { xs: 2, md: 0 } }}>
                <Grid container alignItems="stretch">
                    {/* Left: Illustration */}
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            background: '#fafbfc',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            p: { xs: 3, md: 5 },
                            borderRight: { md: '1.5px solid #f0f0f0' },
                            minHeight: { xs: 200, md: 500 }
                        }}
                    >
                        <img
                            src={contactIllustration}
                            alt="Contact Illustration"
                            style={{ width: '100%', maxWidth: 400, height: 'auto' }}
                        />
                    </Grid>
                    {/* Right: Form */}
                    <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', p: { xs: 3, md: 5 } }}>
                        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
                            <Typography variant="h4" fontWeight={700} mb={2} align="center" color="#222">
                                Get In Touch
                            </Typography>
                            <TextField
                                label="Full Name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                required
                                InputLabelProps={{ style: { fontWeight: 500 } }}
                                sx={{
                                    background: '#fafbfc',
                                    borderRadius: 2,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2,
                                        transition: 'box-shadow 0.2s',
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#f44336',
                                            boxShadow: '0 0 0 2px rgba(244,67,54,0.10)'
                                        }
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#f44336'
                                    }
                                }}
                            />
                            <TextField
                                label="Phone Number"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                required
                                InputLabelProps={{ style: { fontWeight: 500 } }}
                                sx={{
                                    background: '#fafbfc',
                                    borderRadius: 2,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2,
                                        transition: 'box-shadow 0.2s',
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#f44336',
                                            boxShadow: '0 0 0 2px rgba(244,67,54,0.10)'
                                        }
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#f44336'
                                    }
                                }}
                            />
                            <TextField
                                label="Email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                required
                                InputLabelProps={{ style: { fontWeight: 500 } }}
                                sx={{
                                    background: '#fafbfc',
                                    borderRadius: 2,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2,
                                        transition: 'box-shadow 0.2s',
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#f44336',
                                            boxShadow: '0 0 0 2px rgba(244,67,54,0.10)'
                                        }
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#f44336'
                                    }
                                }}
                            />
                            <TextField
                                label="Service Description"
                                name="service"
                                value={form.service}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{ style: { fontWeight: 500 } }}
                                sx={{
                                    background: '#fafbfc',
                                    borderRadius: 2,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2,
                                        transition: 'box-shadow 0.2s',
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#f44336',
                                            boxShadow: '0 0 0 2px rgba(244,67,54,0.10)'
                                        }
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#f44336'
                                    }
                                }}
                            />
                            <TextField
                                label="Message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                multiline
                                minRows={4}
                                InputLabelProps={{ style: { fontWeight: 500 } }}
                                sx={{
                                    background: '#fafbfc',
                                    borderRadius: 2,
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2,
                                        transition: 'box-shadow 0.2s',
                                        '&.Mui-focused fieldset': {
                                            borderColor: '#f44336',
                                            boxShadow: '0 0 0 2px rgba(244,67,54,0.10)'
                                        }
                                    },
                                    '& .MuiInputLabel-root.Mui-focused': {
                                        color: '#f44336'
                                    }
                                }}
                            />
                            <FormControlLabel
                                control={<Checkbox checked={form.whatsapp} onChange={handleChange} name="whatsapp" color="error" />}
                                label={
                                    <span>
                                        You can reach me on <span style={{ color: '#25D366', fontWeight: 500 }}>WhatsApp</span>
                                    </span>
                                }
                                sx={{ mb: 2, mt: 1 }}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="error"
                                fullWidth
                                sx={{
                                    fontWeight: 600,
                                    borderRadius: 2,
                                    py: 1.5,
                                    fontSize: '1.1rem',
                                    background: 'linear-gradient(90deg, #f44336 0%, #ff7961 100%)',
                                    boxShadow: '0 4px 16px rgba(244, 67, 54, 0.12)',
                                    transition: 'background 0.2s, box-shadow 0.2s',
                                    '&:hover': {
                                        background: 'linear-gradient(90deg, #ff7961 0%, #f44336 100%)',
                                        boxShadow: '0 6px 24px rgba(244, 67, 54, 0.18)'
                                    },
                                    mt: 1
                                }}
                            >
                                SEND
                            </Button>
                            <Typography className="contact-policy" sx={{ mt: 2 }}>
                                By submitting this form, you agree to the <a href="#">privacy policy</a> and <a href="#">terms of use</a>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Paper>

            {/* Map Section */}
            <div className="contact-map-section">
                <div className="contact-map-title">Map Location</div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.904471472408!2d85.11841077554966!3d25.608090414935212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed583dcb8fdcc1%3A0x7d8b8723cdf39b3a!2sBihar%20Museum!5e0!3m2!1sen!2sin!4v1734398280780!5m2!1sen!2sin"
                    className="contact-map-iframe"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                ></iframe>
            </div>

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
                            icon: <LocationOn sx={{ fontSize: '40px', mb: 1, color: 'inherit' }} />,
                            text1: 'Patna-13 ( Bihar )',
                            text2: '221, Patliputra Colony, Near Patliputra Park'
                        },
                        {
                            title: 'Make a Call',
                            icon: <Phone sx={{ fontSize: '40px', mb: 1, color: 'inherit' }} />,
                            text1: '9264484444',
                            text2: 'Mon - Sat: 09am - 08pm'
                        },
                        {
                            title: 'Send a Mail',
                            icon: <Email sx={{ fontSize: '40px', mb: 1, color: 'inherit' }} />,
                            text1: 'info@residygroup.com',
                            text2: 'info@residygroup.com'
                        }
                    ].map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                className="contact-info-card"
                                sx={{
                                    border: '1px solid #ddd',
                                    borderRadius: '10px',
                                    p: 4,
                                    textAlign: 'center',
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                    transition: 'background 0.3s, color 0.3s, box-shadow 0.3s',
                                    background: '#fff',
                                    color: '#222'
                                }}
                            >
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                    {item.title}
                                </Typography>
                                <Box>{item.icon}</Box>
                                <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                                    {item.text1}
                                </Typography>
                                <Typography variant="body2">{item.text2}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Container>
    );
};

export default ContactCard;
