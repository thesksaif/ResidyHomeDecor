import PropTypes from 'prop-types';
import { Box, Typography, Button, Paper, Checkbox, FormControlLabel, CardMedia, Grid } from '@mui/material';
import loft from 'assets/images/quote/wardrobe/loft-accessories.jpeg';
import oneDrawer from 'assets/images/quote/wardrobe/1-drawer-accessories.jpg';
import oneDrawerHalf from 'assets/images/quote/wardrobe/1-drawer-half-accessories.jpg';
import twoDrawerHalf from 'assets/images/quote/wardrobe/2-drawer-half-accessories.jpg';
import wicker from 'assets/images/quote/wardrobe/wicker-pull-out-accessories.jpg';

const accessoriesOptions = [
    {
        label: 'Loft',
        value: 'loft',
        image: loft
    },
    {
        label: 'Single full-size drawer',
        value: 'single_full_drawer',
        image: oneDrawer
    },
    {
        label: '1 half-drawer',
        value: 'half_drawer_1',
        image: oneDrawerHalf
    },
    {
        label: '2 half-drawers',
        value: 'half_drawer_2',
        image: twoDrawerHalf
    },
    {
        label: 'Wicker pull out',
        value: 'wicker_pull_out',
        image: wicker
    }
];

const Step5Accessories = ({ handleNext, handleBack, accessories, setAccessories }) => {
    const handleToggle = (value) => {
        setAccessories((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
    };

    return (
        <Box sx={{ maxWidth: '100%', mx: 'auto' }}>
            <Typography variant="h5" align="center" sx={{ fontWeight: 600, mb: 2 }}>
                Add your preferred accessories (optional)
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {accessoriesOptions.map((option) => (
                    <Grid item xs={12} sm={6} md={4} key={option.value}>
                        <Paper
                            variant="outlined"
                            sx={{
                                borderRadius: 2,
                                boxShadow: 'none',
                                p: 1,
                                borderColor: accessories.includes(option.value) ? '#dc4545' : '#eee',
                                background: accessories.includes(option.value) ? '#fff5f5' : '#fff',
                                position: 'relative',
                                transition: 'all 0.2s',
                                textAlign: 'center'
                            }}
                        >
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={accessories.includes(option.value)}
                                        onChange={() => handleToggle(option.value)}
                                        color="error"
                                    />
                                }
                                label={<Typography sx={{ fontWeight: 500 }}>{option.label}</Typography>}
                                sx={{ display: 'block', mx: 'auto', mb: 1 }}
                            />
                            <CardMedia
                                component="img"
                                image={option.image}
                                alt={option.label}
                                sx={{
                                    width: '100%',
                                    height: 120,
                                    objectFit: 'cover',
                                    borderRadius: 2,
                                    mb: 1
                                }}
                            />
                        </Paper>
                    </Grid>
                ))}
            </Grid>
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

Step5Accessories.propTypes = {
    handleNext: PropTypes.func,
    handleBack: PropTypes.func,
    accessories: PropTypes.array,
    setAccessories: PropTypes.func
};

export default Step5Accessories;
