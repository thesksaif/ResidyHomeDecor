import { Box, Typography, Button, TextField, Checkbox, FormControlLabel } from '@mui/material';
import PropTypes from 'prop-types';
import useWardrobeQuote from 'hooks/useWardrobeQuote';
import { useDispatch } from 'store';
import { openSnackbar } from 'store/slices/snackbar';

const Step6GetQuote = ({ handleBack, reviewForm, setReviewForm, height, type, finish, material, accessories }) => {
    const dispatch = useDispatch();
    const { loading, error, submitWardrobeQuote, clearError } = useWardrobeQuote();

    const handleChange = (e) => {
        const { name, value, type: inputType, checked } = e.target;
        setReviewForm((prev) => ({
            ...prev,
            [name]: inputType === 'checkbox' ? checked : value
        }));
        if (error) clearError();
    };

    const validateForm = () => {
        if (!reviewForm.name.trim()) return 'Name is required';
        if (!reviewForm.email.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(reviewForm.email)) return 'Please enter a valid email address';
        if (!reviewForm.phone.trim()) return 'Phone number is required';
        if (!height) return 'Height is required';
        if (!type) return 'Type is required';
        if (!finish) return 'Finish is required';
        if (!material) return 'Material is required';
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

        // Map internal values to API-expected values
        const typeMapping = {
            essentials: 'Essentials',
            premium: 'Premium',
            luxe: 'Luxe',
            custom: 'Custom'
        };

        const finishMapping = {
            laminate: 'Laminate',
            membrane: 'Membrane',
            acrylic: 'Acrylic'
        };

        const materialMapping = {
            mdf: 'MDF',
            hdf: 'HDF/HMR'
        };

        const accessoriesMapping = {
            loft: 'Loft',
            single_full_drawer: 'Single full-size drawer',
            half_drawer_1: '1 half-drawer',
            half_drawer_2: '2 half-drawers',
            wicker_pull_out: 'Wicker pull out'
        };

        // Prepare payload
        const payload = {
            name: reviewForm.name,
            email: reviewForm.email,
            phone: reviewForm.phone,
            propertyName: reviewForm.propertyName,
            height,
            type: typeMapping[type] || type,
            finish: finishMapping[finish] || finish,
            material: materialMapping[material[0]] || material[0], // Take first selected material
            accessories: accessories.map((acc) => accessoriesMapping[acc] || acc),
            sendWhatsapp: reviewForm.sendWhatsapp
        };

        const result = await submitWardrobeQuote(payload);
        console.log('Wardrobe API result:', result);
        // Always show snackbar if message exists
        if (result && result.message) {
            dispatch(
                openSnackbar({
                    open: true,
                    message: result.message || 'Quote request submitted',
                    variant: 'alert',
                    alert: { color: 'success' },
                    close: false
                })
            );
            setReviewForm({
                name: '',
                email: '',
                phone: '',
                propertyName: '',
                sendWhatsapp: true
            });
        } else if (result && result.error) {
            dispatch(
                openSnackbar({
                    open: true,
                    message: result.error || 'Something went wrong',
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
                Your wardrobe estimate is almost ready
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
                    name="phone"
                    value={reviewForm.phone}
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
                    control={<Checkbox checked={reviewForm.sendWhatsapp} onChange={handleChange} name="sendWhatsapp" color="error" />}
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

Step6GetQuote.propTypes = {
    handleBack: PropTypes.func,
    reviewForm: PropTypes.object,
    setReviewForm: PropTypes.func,
    height: PropTypes.string,
    type: PropTypes.string,
    finish: PropTypes.string,
    material: PropTypes.array,
    accessories: PropTypes.array
};

export default Step6GetQuote;
