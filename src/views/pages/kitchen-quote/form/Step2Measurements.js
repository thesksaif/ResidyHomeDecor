import PropTypes from 'prop-types';
import {
  Box,
  Typography,
  Button,
  TextField,
  Grid,
  Alert,
  MenuItem,
} from '@mui/material';
import lShapedImg from 'assets/images/quote/kitchen/l-shaped.png';
import straightImg from 'assets/images/quote/kitchen/straight.png';
import uShapedImg from 'assets/images/quote/kitchen/u-shaped.png';
import parallelImg from 'assets/images/quote/kitchen/parallel.png';

const layoutDiagrams = {
  'l-shaped': lShapedImg,
  'u-shaped': uShapedImg,
  straight: straightImg,
  parallel: parallelImg,
};

const layoutFields = {
  'l-shaped': ['A', 'B'],
  'u-shaped': ['A', 'B', 'C'],
  straight: ['A'],
  parallel: ['A', 'B'],
};

const Step2Measurements = ({
  handleNext,
  handleBack,
  layout,
  measurements,
  setMeasurements,
}) => {
  const fields = layoutFields[layout] || [];
  const isComplete = fields.every((f) => measurements[f]);
  const feetOptions = Array.from({ length: 21 }, (_, i) => i + 5); // 5 to 25 ft

  const handleChange = (field, value) => {
    setMeasurements((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Box sx={{ maxWidth: '100%', mx: 'auto' }}>
      <Typography variant="h5" align="center" sx={{ fontWeight: 600, mb: 2 }}>
        Now review the measurements for accuracy
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <img
          src={layoutDiagrams[layout]}
          alt={layout}
          style={{
            width: 5000,
            height: 180,
            objectFit: 'contain',
            marginBottom: 8,
          }}
        />
      </Box>
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
        Standard size has been set for your convenience
      </Alert>
      <Grid container spacing={2} justifyContent="center">
        {fields.map((field) => (
          <Grid item xs={12} sm={6} md={4} key={field}>
            <TextField
              select
              label={field}
              value={measurements[field] || ''}
              onChange={(e) => handleChange(field, e.target.value)}
              fullWidth
              sx={{ mb: 2 }}
            >
              {feetOptions.map((ft) => (
                <MenuItem key={ft} value={ft}>
                  {ft}
                </MenuItem>
              ))}
            </TextField>
            <Typography sx={{ display: 'inline', ml: 1 }}>ft.</Typography>
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
          disabled={!isComplete}
        >
          NEXT
        </Button>
      </Box>
    </Box>
  );
};

Step2Measurements.propTypes = {
  handleNext: PropTypes.func,
  handleBack: PropTypes.func,
  layout: PropTypes.string,
  measurements: PropTypes.object,
  setMeasurements: PropTypes.func,
};

export default Step2Measurements;
