import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  Button,
  Paper,
  Radio,
  CardMedia,
  Grid,
  Link,
} from '@mui/material';
import lShapedImg from 'assets/images/quote/kitchen/l-shaped.png';
import straightImg from 'assets/images/quote/kitchen/straight.png';
import uShapedImg from 'assets/images/quote/kitchen/u-shaped.png';
import parallelImg from 'assets/images/quote/kitchen/parallel.png';

const layoutOptions = [
  {
    label: 'L-shaped',
    value: 'l-shaped',
    image: lShapedImg,
  },
  {
    label: 'Straight',
    value: 'straight',
    image: straightImg,
  },
  {
    label: 'U-shaped',
    value: 'u-shaped',
    image: uShapedImg,
  },
  {
    label: 'Parallel',
    value: 'parallel',
    image: parallelImg,
  },
];

const Step1Layout = ({ handleNext, layout, setLayout }) => {
  return (
    <Box sx={{ maxWidth: '100%', mx: 'auto' }}>
      <Typography variant="h5" align="center" sx={{ fontWeight: 600, mb: 2 }}>
        Select the layout of your kitchen
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
      <Grid container spacing={3} justifyContent="center">
        {layoutOptions.map((option) => (
          <Grid item xs={12} sm={6} md={6} key={option.value}>
            <Paper
              variant="outlined"
              sx={{
                borderRadius: 2,
                boxShadow: 'none',
                p: 2,
                borderColor: layout === option.value ? '#dc4545' : '#eee',
                background: layout === option.value ? '#fff5f5' : '#fff',
                position: 'relative',
                transition: 'all 0.2s',
                textAlign: 'center',
                cursor: 'pointer',
              }}
              onClick={() => setLayout(option.value)}
            >
              <Radio
                checked={layout === option.value}
                value={option.value}
                color="error"
                sx={{ mb: 1 }}
                onChange={() => setLayout(option.value)}
              />
              <CardMedia
                component="img"
                image={option.image}
                alt={option.label}
                sx={{
                  width: '100%',
                  height: 200,
                  objectFit: 'contain',
                  borderRadius: 2,
                  mb: 1,
                }}
              />
              <Typography sx={{ fontWeight: 500 }}>{option.label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button variant="text" color="error" sx={{ fontWeight: 500 }} disabled>
          BACK
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{ fontWeight: 600, borderRadius: 8, px: 5 }}
          onClick={handleNext}
          disabled={!layout}
        >
          NEXT
        </Button>
      </Box>
    </Box>
  );
};

Step1Layout.propTypes = {
  handleNext: PropTypes.func,
  layout: PropTypes.string,
  setLayout: PropTypes.func,
};

export default Step1Layout;
