import PropTypes from 'prop-types';
import { Box, Typography, Button, Paper, Checkbox, FormControlLabel, CardMedia, Alert, Stack } from '@mui/material';
import laminate from 'assets/images/quote/wardrobe/laminate.jpg';
import membrane from 'assets/images/quote/wardrobe/membrane.jpg';

const materialOptions = [
    {
        label: 'MDF',
        value: 'mdf',
        image: laminate,
        price: '₹₹',
        proTip: 'An ideal choice for the cabinets owing to its smooth surface. Seamless, free of knots, and has high resistance to wear & tear.'
    },
    {
        label: 'HDF/HMR',
        value: 'hdf',
        image: membrane,
        price: '₹₹₹',
        proTip: 'Sturdy and highly dense along with a solid screw-holding capacity.'
    }
];

const Step4Material = ({ handleNext, handleBack, material, setMaterial }) => {
    const handleToggle = (value) => {
        setMaterial((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));
    };

    return (
        <Box sx={{ maxWidth: '100%', mx: 'auto' }}>
            <Typography variant="h5" align="center" sx={{ fontWeight: 600, mb: 2 }}>
                Select your preferred core material
            </Typography>
            <Alert
                severity="info"
                sx={{
                    mb: 3,
                    bgcolor: '#fff8e1',
                    color: '#b26a00',
                    border: 'none',
                    fontWeight: 500
                }}
            >
                Your core material options will be dependent on the finish you have chosen.
            </Alert>
            <Typography sx={{ fontWeight: 500, mb: 1 }}>Available core materials options:</Typography>
            <Stack direction="row" spacing={3} justifyContent="center">
                {materialOptions.map((option) => (
                    <Paper
                        key={option.value}
                        variant="outlined"
                        sx={{
                            borderColor: material.includes(option.value) ? '#dc4545' : '#eee',
                            borderRadius: 2,
                            p: 2,
                            mb: 2,
                            background: material.includes(option.value) ? '#fff5f5' : '#fff',
                            boxShadow: 'none',
                            position: 'relative',
                            transition: 'all 0.2s',
                            width: 350,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={material.includes(option.value)}
                                    onChange={() => handleToggle(option.value)}
                                    color="error"
                                />
                            }
                            label={<Typography sx={{ fontWeight: 600 }}>{option.label}</Typography>}
                            sx={{ m: 0, mb: 1 }}
                        />
                        <CardMedia
                            component="img"
                            image={option.image}
                            alt={option.label}
                            sx={{ width: 350, objectFit: 'cover', borderRadius: 2, mb: 1 }}
                        />
                        <Typography sx={{ color: 'text.secondary', mb: 1 }}>
                            <b>Price</b> : {option.price}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>
                            <b>Pro Tip</b> : {option.proTip}
                        </Typography>
                    </Paper>
                ))}
            </Stack>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                <Button variant="text" color="error" sx={{ fontWeight: 500 }} onClick={handleBack}>
                    BACK
                </Button>
                <Button
                    variant="contained"
                    color="error"
                    sx={{ fontWeight: 600, borderRadius: 8, px: 5 }}
                    onClick={handleNext}
                    disabled={material.length === 0}
                >
                    NEXT
                </Button>
            </Box>
        </Box>
    );
};

Step4Material.propTypes = {
    handleNext: PropTypes.func,
    handleBack: PropTypes.func,
    material: PropTypes.array,
    setMaterial: PropTypes.func
};

export default Step4Material;
