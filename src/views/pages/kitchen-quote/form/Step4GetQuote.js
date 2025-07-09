import { Box, Typography, Button, TextField, Checkbox, FormControlLabel } from '@mui/material';
import PropTypes from 'prop-types';
import useKitchenQuote from 'hooks/useKitchenQuote';
import { useDispatch } from 'store';
import { openSnackbar } from 'store/slices/snackbar';

const Step4GetQuote = ({ handleBack, reviewForm, setReviewForm, layout, measurements, selectedPackage }) => {
    const dispatch = useDispatch();
    const { loading, error, submitKitchenQuote, clearError } = useKitchenQuote();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setReviewForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (error) clearError();
    };

    const validateForm = () => {
        if (!reviewForm.name.trim()) return 'Name is required';
        if (!reviewForm.email.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(reviewForm.email)) return 'Please enter a valid email address';
        if (!reviewForm.phoneNumber.trim()) return 'Phone number is required';
        if (!layout) return 'Kitchen layout is required';
        if (!selectedPackage) return 'Package is required';
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            dispatch(
                openSnackbar({
                    open: true,
                    message: validationError,
                    variant: 'alert',
                    alert: { color: 'error' },
                    close: false
                })
            );
            return;
        }
        // Prepare payload
        const payload = {
            layout,
            measurements,
            package: selectedPackage.charAt(0).toUpperCase() + selectedPackage.slice(1),
            name: reviewForm.name,
            email: reviewForm.email,
            phoneNumber: reviewForm.phoneNumber,
            whatsapp: reviewForm.whatsapp,
            propertyName: reviewForm.propertyName
        };
        const result = await submitKitchenQuote(payload);
        if (result.success) {
            dispatch(
                openSnackbar({
                    open: true,
                    message: result.message,
                    variant: 'alert',
                    alert: { color: 'success' },
                    close: false
                })
            );
            setReviewForm({
                name: '',
                email: '',
                phoneNumber: '',
                whatsapp: true,
                propertyName: ''
            });
        } else {
            dispatch(
                openSnackbar({
                    open: true,
                    message: result.error,
                    variant: 'alert',
                    alert: { color: 'error' },
                    close: false
                })
            );
        }
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
                    value={reviewForm.name}
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
                    value={reviewForm.email}
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
                    name="phoneNumber"
                    value={reviewForm.phoneNumber}
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
                    control={<Checkbox checked={reviewForm.whatsapp} onChange={handleChange} name="whatsapp" color="error" />}
                    label="Send me updates on WhatsApp"
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Property Name"
                    name="propertyName"
                    value={reviewForm.propertyName}
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
                {error && (
                    <Typography color="error" sx={{ mb: 1, textAlign: 'center' }}>
                        {error}
                    </Typography>
                )}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                    <Button variant="text" color="error" sx={{ fontWeight: 500 }} onClick={handleBack} disabled={!handleBack}>
                        BACK
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        sx={{ fontWeight: 600, borderRadius: 8, px: 5 }}
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? 'Submitting...' : 'SUBMIT'}
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
    handleBack: PropTypes.func,
    reviewForm: PropTypes.object,
    setReviewForm: PropTypes.func,
    layout: PropTypes.string,
    measurements: PropTypes.object,
    selectedPackage: PropTypes.string
};

export default Step4GetQuote;
