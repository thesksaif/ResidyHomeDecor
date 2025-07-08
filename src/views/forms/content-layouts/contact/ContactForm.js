import React, { useState } from 'react';
import { Button, TextField, Typography, Box, Grid, Paper } from '@mui/material';

const ContactForm = () => {
    const [form, setForm] = useState({
        banner: null,
        bannerPreview: '',
        mapUrl: '',
        email: '',
        mobile: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'banner' && files && files[0]) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                setForm((prev) => ({
                    ...prev,
                    banner: files[0],
                    bannerPreview: ev.target.result
                }));
            };
            reader.readAsDataURL(files[0]);
        } else {
            setForm((prev) => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit logic here
        alert('Contact details updated!');
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Paper
                elevation={3}
                sx={{
                    width: '100%',
                    maxWidth: 900,
                    p: { xs: 2, md: 4 },
                    borderRadius: 3
                }}
            >
                <Typography variant="h4" mb={3} fontWeight={600} color="primary.main">
                    Edit Contact Page Details
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Button
                                variant="outlined"
                                component="label"
                                fullWidth
                                sx={{
                                    borderColor: 'error.main',
                                    color: 'error.main',
                                    height: 56,
                                    fontWeight: 500,
                                    fontSize: 18,
                                    mb: 1
                                }}
                            >
                                Upload Banner
                                <input type="file" name="banner" accept="image/*" hidden onChange={handleChange} />
                            </Button>
                            {form.bannerPreview && (
                                <Box mt={2} mb={1} display="flex" justifyContent="center">
                                    <img
                                        src={form.bannerPreview}
                                        alt="Banner Preview"
                                        style={{
                                            maxHeight: 180,
                                            borderRadius: 12,
                                            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                                        }}
                                    />
                                </Box>
                            )}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Map URL"
                                name="mapUrl"
                                value={form.mapUrl}
                                onChange={handleChange}
                                fullWidth
                                required
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                fullWidth
                                required
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                label="Mobile"
                                name="mobile"
                                value={form.mobile}
                                onChange={handleChange}
                                fullWidth
                                required
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Address"
                                name="address"
                                value={form.address}
                                onChange={handleChange}
                                fullWidth
                                multiline
                                minRows={2}
                                required
                                sx={{ mb: 2 }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="error"
                                fullWidth
                                sx={{
                                    height: 56,
                                    fontSize: 20,
                                    fontWeight: 600,
                                    borderRadius: 2,
                                    boxShadow: 2
                                }}
                            >
                                Update
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Box>
    );
};

export default ContactForm;
