import PropTypes from 'prop-types';
import React from 'react';

// Material-UI imports
import {
  Button,
  CardContent,
  // CardActions,
  // Divider,
  Grid,
  IconButton,
  Modal,
  // Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  TextField,
  // MenuItem
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Project imports
import MainCard from 'ui-component/cards/MainCard';

// Generate random modal position
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const Body = React.forwardRef(({ handleClose }, ref) => {
  return (
    <div ref={ref} tabIndex={-1}>
      <MainCard
        sx={{
          position: 'absolute',
          width: { xs: 280, lg: 450 },
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: 24,
          p: 1, // Adjusted padding
        }}
        title="Get In Touch"
        content={false}
        secondary={
          <IconButton onClick={handleClose} size="large">
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        {/* Modal Content */}
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Name</InputLabel>
                <OutlinedInput
                  type="text"
                  label="Name"
                  placeholder="Enter Your Name"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Mobile Number</InputLabel>
                <OutlinedInput
                  type="number"
                  label="Mobile Number"
                  placeholder="Enter Your Mobile Number"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Email Address</InputLabel>
                <OutlinedInput
                  type="email"
                  label="Email Address"
                  placeholder="Enter Your Email Address"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField placeholder="Message" multiline rows={4} />
              </FormControl>
            </Grid>
            <Grid item xs={12} textAlign="right">
              <Button variant="contained" color="error">
                Submit
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </MainCard>
    </div>
  );
});

Body.propTypes = {
  modalStyle: PropTypes.object,
  handleClose: PropTypes.func,
};

// Simple Modal Component
export default function SimpleModal() {
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid container justifyContent="center">
      {/* <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}> */}
      <Button
        variant="contained"
        color="error"
        sx={{
          padding: '10px 30px',
          backgroundColor: '#e74c3c',
          '&:hover': { backgroundColor: '#c0392b' },
          borderRadius: '50px',
          fontSize: '16px',
        }}
        onClick={handleOpen}
      >
        Book Free Consultation
      </Button>
      {/* </Box> */}
      {/* <Button variant="contained" color="primary" onClick={handleOpen}>
                Open Form
            </Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Body modalStyle={modalStyle} handleClose={handleClose} />
      </Modal>
    </Grid>
  );
}
