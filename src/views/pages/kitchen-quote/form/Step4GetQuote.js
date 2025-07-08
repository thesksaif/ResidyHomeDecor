import { useState } from 'react';
import { Box, Typography, Button, TextField, Checkbox, FormControlLabel } from '@mui/material';
import PropTypes from 'prop-types';

const Step4GetQuote = ({ handleBack }) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        whatsapp: true,
        property: ''
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
        <Box sx={{ maxWidth: '100%', mx: 'auto' }}>
            <Typography variant="h5" align="center" sx={{ fontWeight: 600, mb: 2 }}>
                Your kitchen estimate is almost ready!
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    fullWidth
                    sx={{
                        mb: 2,
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                borderColor: '#dc4545'
                            }
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#dc4545'
                        }
                    }}
                />
                <TextField
                    label="Email ID"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    fullWidth
                    sx={{
                        mb: 2,
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                borderColor: '#dc4545'
                            }
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#dc4545'
                        }
                    }}
                />
                <TextField
                    label="Phone number"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    fullWidth
                    sx={{
                        mb: 2,
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                borderColor: '#dc4545'
                            }
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#dc4545'
                        }
                    }}
                />
                <FormControlLabel
                    control={<Checkbox checked={form.whatsapp} onChange={handleChange} name="whatsapp" color="error" />}
                    label="Send me updates on WhatsApp"
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Property Name"
                    name="property"
                    value={form.property}
                    onChange={handleChange}
                    fullWidth
                    sx={{
                        mb: 2,
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused fieldset': {
                                borderColor: '#dc4545'
                            }
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                            color: '#dc4545'
                        }
                    }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Button variant="text" color="error" sx={{ fontWeight: 500 }} onClick={handleBack} disabled={!handleBack}>
                        BACK
                    </Button>
                    <Button variant="contained" color="error" sx={{ fontWeight: 600, borderRadius: 8, px: 5 }} type="submit">
                        SUBMIT
                    </Button>
                </Box>
            </form>
            <Typography sx={{ color: 'text.secondary', fontSize: 13, mt: 3 }}>
                By submitting this form, you agree to the{' '}
                <span
                    style={{
                        color: '#dc4545',
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }}
                >
                    privacy policy & terms and conditions
                </span>
                .<br />
                This site is protected by reCAPTCHA and the Google{' '}
                <span
                    style={{
                        color: '#dc4545',
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }}
                >
                    Privacy Policy
                </span>{' '}
                and{' '}
                <span
                    style={{
                        color: '#dc4545',
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }}
                >
                    Terms of Service
                </span>{' '}
                apply.
            </Typography>
        </Box>
    );
};

Step4GetQuote.propTypes = {
    handleBack: PropTypes.func
};

export default Step4GetQuote;
