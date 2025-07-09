import { useState } from 'react';
import {
    Fab,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField,
    Checkbox,
    FormControlLabel,
    Box,
    Stack,
    Grow,
    Avatar,
    CircularProgress,
    Alert
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// project imports
import useQuickConsult from 'hooks/useQuickConsult';
import { useDispatch } from 'store';
import { openSnackbar } from 'store/slices/snackbar';

const FloatingConsultForm = () => {
    const dispatch = useDispatch();
    const { loading, error, submitQuickConsult, clearError } = useQuickConsult();
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({
        name: '',
        mobile: '',
        email: '',
        property: '',
        whatsapp: true
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        // Clear error when user starts typing
        if (error) clearError();
    };

    const validateForm = () => {
        if (!form.name.trim()) {
            return 'Name is required';
        }
        if (!form.mobile.trim()) {
            return 'Mobile number is required';
        }
        if (!form.email.trim()) {
            return 'Email is required';
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            return 'Please enter a valid email address';
        }
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
                    alert: {
                        color: 'error'
                    },
                    close: false
                })
            );
            return;
        }

        const result = await submitQuickConsult(form);

        if (result.success) {
            // Show success message
            dispatch(
                openSnackbar({
                    open: true,
                    message: result.message,
                    variant: 'alert',
                    alert: {
                        color: 'success'
                    },
                    close: false
                })
            );

            // Reset form and close dialog
            setForm({
                name: '',
                mobile: '',
                email: '',
                property: '',
                whatsapp: true
            });
            setOpen(false);
        } else {
            // Show error snackbar
            dispatch(
                openSnackbar({
                    open: true,
                    message: result.error,
                    variant: 'alert',
                    alert: {
                        color: 'error'
                    },
                    close: false
                })
            );
        }
    };

    const handleClose = () => {
        setOpen(false);
        clearError();
        setForm({
            name: '',
            mobile: '',
            email: '',
            property: '',
            whatsapp: true
        });
    };

    return (
        <>
            <Fab
                color="error"
                aria-label="consult"
                sx={{
                    position: 'fixed',
                    bottom: 32,
                    right: 32,
                    zIndex: 2000,
                    boxShadow: 4,
                    transition: 'box-shadow 0.3s',
                    '&:hover': { boxShadow: 8 }
                }}
                onClick={() => setOpen(true)}
            >
                <ChatIcon />
            </Fab>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="xs"
                fullWidth
                TransitionComponent={Grow}
                PaperProps={{
                    sx: {
                        borderRadius: 4,
                        boxShadow: 8,
                        p: 0,
                        overflow: 'visible',
                        background: 'linear-gradient(135deg, #fff 80%, #ffeaea 100%)'
                    }
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mt: -5
                    }}
                >
                    <Avatar sx={{ bgcolor: 'error.main', width: 64, height: 64, boxShadow: 2 }}>
                        <SupportAgentIcon sx={{ fontSize: 36, color: '#fff' }} />
                    </Avatar>
                </Box>
                <DialogTitle
                    sx={{
                        fontWeight: 700,
                        textAlign: 'center',
                        color: 'error.main',
                        mt: 1
                    }}
                >
                    Book a Free Consultation
                </DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent sx={{ pt: 0 }}>
                        {error && (
                            <Alert severity="error" sx={{ mb: 2 }}>
                                {error}
                            </Alert>
                        )}
                        <Stack spacing={2} sx={{ mt: 1 }}>
                            <TextField
                                label="Name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                fullWidth
                                required
                                size="medium"
                                disabled={loading}
                                sx={{
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
                                label="Mobile Number"
                                name="mobile"
                                value={form.mobile}
                                onChange={handleChange}
                                fullWidth
                                required
                                type="tel"
                                inputProps={{ maxLength: 15 }}
                                size="medium"
                                disabled={loading}
                                sx={{
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
                                label="Email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                fullWidth
                                required
                                type="email"
                                size="medium"
                                disabled={loading}
                                sx={{
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
                                label="Property Name"
                                name="property"
                                value={form.property}
                                onChange={handleChange}
                                fullWidth
                                size="medium"
                                disabled={loading}
                                sx={{
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
                                control={
                                    <Checkbox
                                        checked={form.whatsapp}
                                        onChange={handleChange}
                                        name="whatsapp"
                                        color="error"
                                        disabled={loading}
                                    />
                                }
                                label={
                                    <span style={{ display: 'flex', alignItems: 'center' }}>
                                        Consult on WhatsApp too <WhatsAppIcon sx={{ ml: 0.5, fontSize: 20, color: '#25D366' }} />
                                    </span>
                                }
                                sx={{ mt: 1 }}
                            />
                        </Stack>
                    </DialogContent>
                    <DialogActions sx={{ justifyContent: 'center', pb: 2, pt: 1 }}>
                        <Button onClick={handleClose} color="inherit" sx={{ fontWeight: 600, borderRadius: 2, px: 3 }} disabled={loading}>
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            color="error"
                            disabled={loading}
                            sx={{
                                fontWeight: 700,
                                borderRadius: 2,
                                px: 4,
                                boxShadow: 2,
                                fontSize: '1rem',
                                minWidth: 120
                            }}
                        >
                            {loading ? <CircularProgress size={20} color="inherit" /> : 'Submit'}
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
};

export default FloatingConsultForm;
