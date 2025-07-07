import { styled } from '@mui/material/styles';
import { useState } from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Paper,
  Typography,
} from '@mui/material';
import Logo from 'ui-component/Logo';
import Step1Length from './form/Step1Length';
import Step2Type from './form/Step2Type';
import Step3Finish from './form/Step3Finish';
import Step4Material from './form/Step4Material';
import Step5Accessories from './form/Step5Accessories';
import Step6GetQuote from './form/Step6GetQuote';
import PropTypes from 'prop-types';

const steps = [
  'LENGTH',
  'TYPE',
  'FINISH',
  'MATERIAL',
  'ACCESSORIES',
  'GET QUOTE',
];

const StepperNavbar = ({ activeStep }) => (
  <Box
    sx={{
      width: '100%',
      bgcolor: '#fff',
      py: 2,
      borderBottom: '1px solid #eee',
      mb: 3,
      boxShadow: 1,
      position: 'relative',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 1200,
        mx: 'auto',
        px: 3,
        position: 'relative',
      }}
    >
      <Logo />
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        sx={{ flex: 1, maxWidth: 900, mx: 'auto' }}
      >
        {steps.map((label, idx) => (
          <Step key={label} completed={activeStep > idx}>
            <StepLabel
              StepIconProps={{
                sx: {
                  color: activeStep === idx ? '#dc4545' : '#bbb',
                  '&.Mui-completed': { color: '#dc4545' },
                  fontSize: 24,
                },
              }}
              sx={{
                '.MuiStepLabel-label': {
                  fontWeight: 600,
                  color: activeStep === idx ? '#222' : '#bbb',
                  fontSize: 12,
                  letterSpacing: 0.5,
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ width: 40 }} /> {/* Spacer to balance the logo */}
      <Typography
        sx={{
          position: 'absolute',
          right: 0,
          top: 0,
          fontWeight: 600,
          color: '#dc4545',
          pr: 3,
          pt: 1,
          fontSize: 18,
        }}
      >
        {activeStep + 1}/{steps.length}
      </Typography>
    </Box>
  </Box>
);

StepperNavbar.propTypes = {
  activeStep: PropTypes.number.isRequired,
};

const CardWrapper = styled(Paper)(() => ({
  border: '1.5px solid #eee',
  borderRadius: 18,
  boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
  background: '#fff',
  padding: 0,
  margin: '0 auto',
  maxWidth: 800,
  width: '100%',
  position: 'relative',
}));

const QuotePage = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Navigation handlers
  const handleNext = () =>
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  const handleBack = () => setActiveStep((prev) => Math.max(prev - 1, 0));

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fafbfc' }}>
      <StepperNavbar activeStep={activeStep} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '80vh',
          px: 2,
        }}
      >
        <CardWrapper>
          <Box sx={{ p: { xs: 3, sm: 5 } }}>
            <Box
              sx={{
                maxWidth: { xs: '100%', sm: '80%', md: '70%' },
                mx: 'auto',
              }}
            >
              {activeStep === 0 && <Step1Length handleNext={handleNext} />}
              {activeStep === 1 && (
                <Step2Type handleNext={handleNext} handleBack={handleBack} />
              )}
              {activeStep === 2 && (
                <Step3Finish handleNext={handleNext} handleBack={handleBack} />
              )}
              {activeStep === 3 && (
                <Step4Material
                  handleNext={handleNext}
                  handleBack={handleBack}
                />
              )}
              {activeStep === 4 && (
                <Step5Accessories
                  handleNext={handleNext}
                  handleBack={handleBack}
                />
              )}
              {activeStep === 5 && <Step6GetQuote handleBack={handleBack} />}
            </Box>
          </Box>
        </CardWrapper>
      </Box>
    </Box>
  );
};

export default QuotePage;
