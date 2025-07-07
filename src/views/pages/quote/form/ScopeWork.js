import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box, Typography, Button, IconButton, Paper } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

const roomList = [
  { label: 'Living Room', key: 'living' },
  { label: 'Kitchen', key: 'kitchen' },
  { label: 'Bedroom', key: 'bedroom' },
  { label: 'Bathroom', key: 'bathroom' },
  { label: 'Dining', key: 'dining' },
];

const ScopeWork = ({ handleNext, handleBack }) => {
  const [rooms, setRooms] = useState({
    living: 2,
    kitchen: 2,
    bedroom: 3,
    bathroom: 3,
    dining: 1,
  });

  const handleChange = (key, delta) => {
    setRooms((prev) => {
      const value = Math.max(0, (prev[key] || 0) + delta);
      return { ...prev, [key]: value };
    });
  };

  return (
    <Box sx={{ maxWidth: '100%', mx: 'auto' }}>
      <Typography variant="h5" align="center" sx={{ fontWeight: 600, mb: 2 }}>
        Select the rooms you&apos;d like us to design
      </Typography>
      <Typography align="center" sx={{ color: 'text.secondary', mb: 3 }}>
        To know more about this,{' '}
        <span style={{ color: '#dc4545', cursor: 'pointer' }}>click here</span>
      </Typography>
      <Box>
        {roomList.map((room) => (
          <Paper
            key={room.key}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 2,
              mb: 2,
              borderRadius: 2,
              boxShadow: 'none',
              border: '1px solid #eee',
            }}
          >
            <Typography sx={{ fontWeight: 500 }}>{room.label}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                color="error"
                onClick={() => handleChange(room.key, -1)}
              >
                <Remove />
              </IconButton>
              <Typography
                sx={{
                  mx: 2,
                  minWidth: 24,
                  textAlign: 'center',
                  fontWeight: 600,
                }}
              >
                {rooms[room.key]}
              </Typography>
              <IconButton
                color="error"
                onClick={() => handleChange(room.key, 1)}
              >
                <Add />
              </IconButton>
            </Box>
          </Paper>
        ))}
      </Box>
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
        >
          NEXT
        </Button>
      </Box>
    </Box>
  );
};

ScopeWork.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
};

export default ScopeWork;
