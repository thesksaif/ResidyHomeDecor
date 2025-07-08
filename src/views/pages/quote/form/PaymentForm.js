import PropTypes from 'prop-types';
import { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Paper,
    Radio,
    RadioGroup,
    FormControlLabel,
    CardMedia,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import CheckCircle from '@mui/icons-material/CheckCircle';
import CheckIcon from '@mui/icons-material/Check';

const packages = [
    {
        label: 'Essentials (₹₹)',
        value: 'essentials',
        description: "A range of essential home interior solutions that's perfect for all your needs.",
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        features: ['Affordable pricing', 'Convenient designs', 'Basic accessories']
    },
    {
        label: 'Premium (₹₹₹)',
        value: 'premium',
        description: 'Superior home interior solutions that will take your interiors to the next level.',
        image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
        features: ['Premium materials', 'Custom designs', 'Luxury accessories']
    }
];

// ==============================|| FORM WIZARD - VALIDATION ||============================== //

const PaymentForm = ({ handleNext, handleBack }) => {
    const [selected, setSelected] = useState('essentials');

    return (
        <Box sx={{ maxWidth: '100%', mx: 'auto' }}>
            <Typography variant="h5" align="center" sx={{ fontWeight: 600, mb: 2 }}>
                Pick your package
            </Typography>
            <RadioGroup value={selected} onChange={(e) => setSelected(e.target.value)}>
                {packages.map((pkg) => (
                    <Paper
                        key={pkg.value}
                        variant="outlined"
                        sx={{
                            borderColor: selected === pkg.value ? '#dc4545' : '#eee',
                            borderRadius: 2,
                            p: 2,
                            mb: 2,
                            background: selected === pkg.value ? '#fff5f5' : '#fff',
                            boxShadow: 'none',
                            position: 'relative',
                            transition: 'all 0.2s'
                        }}
                        onClick={() => setSelected(pkg.value)}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <FormControlLabel
                                value={pkg.value}
                                control={<Radio color="error" checked={selected === pkg.value} />}
                                label={<Typography sx={{ fontWeight: 600 }}>{pkg.label}</Typography>}
                                sx={{ flex: 1, m: 0 }}
                            />
                            {selected === pkg.value && <CheckCircle sx={{ color: '#dc4545', fontSize: 32, ml: 1 }} />}
                        </Box>
                        <Typography sx={{ color: 'text.secondary', mb: 1 }}>{pkg.description}</Typography>
                        <CardMedia
                            component="img"
                            image={pkg.image}
                            alt={pkg.label}
                            sx={{
                                width: '100%',
                                height: 120,
                                objectFit: 'cover',
                                borderRadius: 2,
                                mb: 1
                            }}
                        />
                        <List dense>
                            {pkg.features.map((feature, idx) => (
                                <ListItem key={idx} sx={{ p: 0, mb: 0.5 }}>
                                    <ListItemIcon sx={{ minWidth: 28 }}>
                                        <CheckIcon sx={{ color: '#dc4545', fontSize: 20 }} />
                                    </ListItemIcon>
                                    <ListItemText primary={feature} primaryTypographyProps={{ fontSize: 15 }} />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                ))}
            </RadioGroup>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                <Button variant="text" color="error" sx={{ fontWeight: 500 }} onClick={handleBack}>
                    BACK
                </Button>
                <Button variant="contained" color="error" sx={{ fontWeight: 600, borderRadius: 8, px: 5 }} onClick={handleNext}>
                    NEXT
                </Button>
            </Box>
        </Box>
    );
};

PaymentForm.propTypes = {
    handleNext: PropTypes.func,
    handleBack: PropTypes.func
};

export default PaymentForm;
