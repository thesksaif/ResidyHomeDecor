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
    Avatar
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FloatingConsultForm = () => {
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
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submit logic here
        setOpen(false);
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
                onClose={() => setOpen(false)}
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
                        <Stack spacing={2} sx={{ mt: 1 }}>
                            <TextField
                                label="Name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                fullWidth
                                required
                                size="medium"
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
                            />
                            <TextField
                                label="Property Name"
                                name="property"
                                value={form.property}
                                onChange={handleChange}
                                fullWidth
                                size="medium"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={form.whatsapp} onChange={handleChange} name="whatsapp" color="error" />}
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
                        <Button onClick={() => setOpen(false)} color="inherit" sx={{ fontWeight: 600, borderRadius: 2, px: 3 }}>
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            color="error"
                            sx={{
                                fontWeight: 700,
                                borderRadius: 2,
                                px: 4,
                                boxShadow: 2,
                                fontSize: '1rem'
                            }}
                        >
                            Submit
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
};

export default FloatingConsultForm;
