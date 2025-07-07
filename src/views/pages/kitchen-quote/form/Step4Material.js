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
  Alert,
} from '@mui/material';

const materialOptions = [
  {
    label: 'MDF',
    value: 'mdf',
    image: 'https://residyhomedecor.webspidy.in/static/mdf-material.jpg',
    price: '₹₹',
    proTip:
      'An ideal choice for the cabinets owing to its smooth surface. Seamless, free of knots, and has high resistance to wear & tear.',
  },
  {
    label: 'HDF/HMR',
    value: 'hdf',
    image: 'https://residyhomedecor.webspidy.in/static/hdf-hmr-material.jpg',
    price: '₹₹₹',
    proTip:
      'Sturdy and highly dense along with a solid screw-holding capacity.',
  },
];

const MaterialStep = ({ handleNext, handleBack }) => {
  const [selected, setSelected] = useState('');

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
          fontWeight: 500,
        }}
      >
        Your core material options will be dependent on the finish you have
        chosen.
      </Alert>
      <Typography sx={{ fontWeight: 500, mb: 1 }}>
        Available core materials options:
      </Typography>
      <RadioGroup
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
        {materialOptions.map((option) => (
          <Paper
            key={option.value}
            variant="outlined"
            sx={{
              borderColor: selected === option.value ? '#dc4545' : '#eee',
              borderRadius: 2,
              p: 2,
              mb: 2,
              background: selected === option.value ? '#fff5f5' : '#fff',
              boxShadow: 'none',
              position: 'relative',
              transition: 'all 0.2s',
            }}
          >
            <FormControlLabel
              value={option.value}
              control={
                <Radio color="error" checked={selected === option.value} />
              }
              label={
                <Typography sx={{ fontWeight: 600 }}>{option.label}</Typography>
              }
              sx={{ flex: 1, m: 0 }}
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
                mb: 1,
              }}
            />
            <Typography sx={{ color: 'text.secondary', mb: 1 }}>
              <b>Price</b> : {option.price}
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>
              <b>Pro Tip</b> : {option.proTip}
            </Typography>
          </Paper>
        ))}
      </RadioGroup>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button
          variant="text"
          color="error"
          sx={{ fontWeight: 500 }}
          onClick={handleBack}
        >
          BACK
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{ fontWeight: 600, borderRadius: 8, px: 5 }}
          onClick={handleNext}
          disabled={!selected}
        >
          NEXT
        </Button>
      </Box>
    </Box>
  );
};

MaterialStep.propTypes = {
  handleNext: PropTypes.func,
  handleBack: PropTypes.func,
};

export default MaterialStep;
