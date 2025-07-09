import PropTypes from 'prop-types';
import {
    Box,
    Typography,
    Button,
    Paper,
    Radio,
    FormControlLabel,
    CardMedia,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Grid
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import wardrobeSwing from 'assets/images/quote/wardrobe/wardrobe-swing.jpg';
import wardrobeSliding from 'assets/images/quote/wardrobe/wardrobe-sliding.jpg';
import acrylic from 'assets/images/quote/wardrobe/acrylic.jpg';
import oneDrawerAccessories from 'assets/images/quote/wardrobe/1-drawer-accessories.jpg';

const packages = [
    {
        label: 'Essentials (₹₹)',
        value: 'essentials',
        description: 'A range of basic units and accessories that are necessary for a comfortable wardrobe.',
        image: wardrobeSwing,
        features: ['Affordable pricing', 'Convenient designs', 'Basic accessories']
    },
    {
        label: 'Premium (₹₹₹)',
        value: 'premium',
        description: 'An exquisite offering with sleek fixtures, hardware, cabinets and fittings for an elegant wardrobe design.',
        image: wardrobeSliding,
        features: ['Mid-range pricing', 'Premium designs', 'Wide range of accessories']
    },
    {
        label: 'Luxe (₹₹₹₹)',
        value: 'luxe',
        description:
            "A swanky wardrobe package that's a fine blend of aesthetics and high functionality with chic-looking units and accessories.",
        image: acrylic,
        features: ['Elite pricing', 'Lavish designs', 'Extensive range of accessories']
    },
    {
        label: 'Build your own package',
        value: 'custom',
        description:
            'A flexible, built-to-suit option that lets you pick and choose from a collection of well-crafted finishes and accessories.',
        image: oneDrawerAccessories,
        features: ['Customised pricing', 'Flexible designs', 'Range of accessories to pick from']
    }
];

const Step2Type = ({ handleNext, handleBack, type, setType }) => {
    return (
        <Box sx={{ maxWidth: '100%', mx: 'auto' }}>
            <Typography variant="h5" align="center" sx={{ fontWeight: 600, mb: 2 }}>
                Pick your package
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                {packages.map((pkg) => (
                    <Grid item xs={12} sm={6} md={6} key={pkg.value} display="flex" justifyContent="center">
                        <Paper
                            variant="outlined"
                            sx={{
                                borderColor: type === pkg.value ? '#dc4545' : '#eee',
                                borderRadius: 2,
                                p: 2,
                                mb: 2,
                                background: type === pkg.value ? '#fff5f5' : '#fff',
                                boxShadow: 'none',
                                position: 'relative',
                                transition: 'all 0.2s',
                                maxWidth: 350,
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                            onClick={() => setType(pkg.value)}
                        >
                            <FormControlLabel
                                value={pkg.value}
                                control={<Radio color="error" checked={type === pkg.value} />}
                                label={<Typography sx={{ fontWeight: 600 }}>{pkg.label}</Typography>}
                                sx={{ flex: 1, m: 0 }}
                            />
                            <Typography sx={{ color: 'text.secondary', mb: 1 }}>{pkg.description}</Typography>
                            <CardMedia
                                component="img"
                                image={pkg.image}
                                alt={pkg.label}
                                sx={{
                                    width: 350,
                                    objectFit: 'cover',
                                    borderRadius: 2,
                                    mb: 1,
                                    maxWidth: '100%'
                                }}
                            />
                            <List dense>
                                {pkg.features.map((feature, idx) => (
                                    <ListItem key={idx} sx={{ p: 0, mb: 0.5 }}>
                                        <ListItemIcon sx={{ minWidth: 28 }}>
                                            <CheckIcon sx={{ color: '#43a047', fontSize: 20 }} />
                                        </ListItemIcon>
                                        <ListItemText primary={feature} primaryTypographyProps={{ fontSize: 15 }} />
                                    </ListItem>
                                ))}
                            </List>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                <Button variant="text" color="error" sx={{ fontWeight: 500 }} onClick={handleBack}>
                    BACK
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    sx={{ fontWeight: 600, borderRadius: 8, px: 5 }}
                    onClick={handleNext}
                    disabled={!type}
                >
                    NEXT
                </Button>
            </Box>
        </Box>
    );
};

Step2Type.propTypes = {
    handleNext: PropTypes.func.isRequired,
    handleBack: PropTypes.func.isRequired,
    type: PropTypes.string,
    setType: PropTypes.func
};

export default Step2Type;
