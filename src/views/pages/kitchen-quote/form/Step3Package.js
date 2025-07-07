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
  ListItemText,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import package1 from 'assets/images/quote/kitchen/package1.png';
import package2 from 'assets/images/quote/kitchen/package2.png';
import package3 from 'assets/images/quote/kitchen/package3.png';

const packages = [
  {
    label: 'Essentials (₹₹)',
    value: 'essentials',
    description:
      'A range of basic units and accessories that are necessary for a comfortable modular kitchen.',
    image: package1,
    features: ['Affordable pricing', 'Convenient designs', 'Basic accessories'],
  },
  {
    label: 'Premium (₹₹₹)',
    value: 'premium',
    description:
      'An exquisite offering with sleek fixtures, hardware, cabinets and fittings for an elegant kitchen design.',
    image: package2,
    features: [
      'Mid-range pricing',
      'Premium designs',
      'Wide range of accessories',
    ],
  },
  {
    label: 'Luxe (₹₹₹₹)',
    value: 'luxe',
    description:
      "A swanky kitchen package that's a fine blend of aesthetics and high functionality with chic-looking units and accessories.",
    image: package3,
    features: [
      'Elite pricing',
      'Lavish designs',
      'Extensive range of accessories',
    ],
  },
  {
    label: 'Build your own package',
    value: 'custom',
    description:
      'A flexible, built-to-suit option that lets you pick and choose from a collection of well-crafted finishes and accessories.',
    image: package1,
    features: [
      'Customised pricing',
      'Flexible designs',
      'Range of accessories to pick from',
    ],
  },
];

const Step3Package = ({ handleNext, handleBack }) => {
  const [selected, setSelected] = useState('');

  return (
    <Box sx={{ maxWidth: '100%', mx: 'auto' }}>
      <Typography variant="h5" align="center" sx={{ fontWeight: 600, mb: 2 }}>
        Pick your package
      </Typography>
      <RadioGroup
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
      >
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
              transition: 'all 0.2s',
            }}
            onClick={() => setSelected(pkg.value)}
          >
            <FormControlLabel
              value={pkg.value}
              control={<Radio color="error" checked={selected === pkg.value} />}
              label={
                <Typography sx={{ fontWeight: 600 }}>{pkg.label}</Typography>
              }
              sx={{ flex: 1, m: 0 }}
            />
            <Typography sx={{ color: 'text.secondary', mb: 1 }}>
              {pkg.description}
            </Typography>
            <CardMedia
              component="img"
              image={pkg.image}
              alt={pkg.label}
              sx={{ width: '100%', objectFit: 'cover', borderRadius: 2, mb: 1 }}
            />
            <List dense>
              {pkg.features.map((feature, idx) => (
                <ListItem key={idx} sx={{ p: 0, mb: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 28 }}>
                    <CheckIcon sx={{ color: '#43a047', fontSize: 20 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={feature}
                    primaryTypographyProps={{ fontSize: 15 }}
                  />
                </ListItem>
              ))}
            </List>
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

Step3Package.propTypes = {
  handleNext: PropTypes.func,
  handleBack: PropTypes.func,
};

export default Step3Package;
