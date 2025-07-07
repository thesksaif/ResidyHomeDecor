import { useState } from 'react';
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  Alert,
  Link,
  Paper,
} from '@mui/material';
import PropTypes from 'prop-types';

const heightOptions = [
  { label: '4 ft' },
  { label: '6 ft' },
  { label: '7 ft' },
  { label: '9 ft' },
];

const HouseDetail = ({ handleNext }) => {
  const [selectedHeight, setSelectedHeight] = useState('');

  return (
    <Box sx={{ maxWidth: '100%', mx: 'auto' }}>
      <Typography variant="h5" align="center" sx={{ fontWeight: 600, mb: 2 }}>
        What is the height of your wardrobe?
      </Typography>
      <Typography align="center" sx={{ color: 'text.secondary', mb: 2 }}>
        Want to know more.{' '}
        <Link
          href="#"
          underline="hover"
          sx={{ color: '#dc4545', fontWeight: 500 }}
        >
          Check here
        </Link>
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
        Standard size has 7ft height. <b>Choose as per your need.</b>
      </Alert>
      <FormControl component="fieldset" fullWidth>
        <RadioGroup
          value={selectedHeight}
          onChange={(e) => setSelectedHeight(e.target.value)}
        >
          {heightOptions.map((option) => (
            <Paper
              key={option.label}
              variant="outlined"
              sx={{
                borderRadius: 2,
                boxShadow: 'none',
                p: 1,
                mb: 2,
                borderColor:
                  selectedHeight === option.label ? '#dc4545' : '#eee',
              }}
            >
              <FormControlLabel
                value={option.label}
                control={<Radio color="error" />}
                label={
                  <Typography sx={{ fontWeight: 500 }}>
                    {option.label}
                  </Typography>
                }
                sx={{ width: '100%', m: 0 }}
              />
            </Paper>
          ))}
        </RadioGroup>
      </FormControl>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button variant="text" color="error" sx={{ fontWeight: 500 }} disabled>
          BACK
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{ fontWeight: 600, borderRadius: 8, px: 5 }}
          onClick={handleNext}
          disabled={!selectedHeight}
        >
          NEXT
        </Button>
      </Box>
    </Box>
  );
};

HouseDetail.propTypes = {
  handleNext: PropTypes.func,
};

export default HouseDetail;
