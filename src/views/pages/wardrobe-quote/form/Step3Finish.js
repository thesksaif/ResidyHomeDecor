import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  Radio,
  FormControlLabel,
  CardMedia,
  Grid,
} from '@mui/material';
import laminate from 'assets/images/quote/wardrobe/laminate.jpg';
import membrane from 'assets/images/quote/wardrobe/membrane.jpg';
import acrylic from 'assets/images/quote/wardrobe/acrylic.jpg';

const finishOptions = [
  {
    label: 'Standard - Laminate',
    value: 'laminate',
    image: laminate,
    price: '₹₹',
    proTip:
      "Looking for a seamless finish that sits well with every interior? This one's for you.",
  },
  {
    label: 'Premium - Membrane',
    value: 'membrane',
    image: membrane,
    price: '₹₹₹',
    proTip: 'A premium finish for a more luxurious look and feel.',
  },
  {
    label: 'Acrylic',
    value: 'acrylic',
    image: acrylic,
    price: '₹₹₹₹',
    proTip:
      'Acrylic finish for a high-gloss, ultra-modern look and superior durability.',
  },
];

const PaymentForm = ({ handleNext, handleBack }) => {
  const [selected, setSelected] = useState('');

  return (
    <Box sx={{ maxWidth: '100%', mx: 'auto' }}>
      <Typography variant="h5" align="center" sx={{ fontWeight: 600, mb: 2 }}>
        Select your preferred finish
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {finishOptions.map((option) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            key={option.value}
            display="flex"
            justifyContent="center"
          >
            <Paper
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
                maxWidth: 350,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              onClick={() => setSelected(option.value)}
            >
              <FormControlLabel
                value={option.value}
                control={
                  <Radio
                    color="error"
                    checked={selected === option.value}
                    onChange={() => setSelected(option.value)}
                  />
                }
                label={
                  <Typography sx={{ fontWeight: 600 }}>
                    {option.label}
                  </Typography>
                }
                sx={{ flex: 1, m: 0 }}
              />
              <CardMedia
                component="img"
                image={option.image}
                alt={option.label}
                sx={{
                  width: 350,
                  objectFit: 'cover',
                  borderRadius: 2,
                  mb: 1,
                  maxWidth: '100%',
                }}
              />
              <Typography sx={{ color: 'text.secondary', mb: 1 }}>
                <b>Price</b> : {option.price}
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: 14 }}>
                <b>Pro Tip</b> : {option.proTip}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
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

PaymentForm.propTypes = {
  handleNext: PropTypes.func,
  handleBack: PropTypes.func,
};

export default PaymentForm;
