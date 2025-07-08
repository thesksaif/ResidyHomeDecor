import React, { useState } from 'react';
import {
  Button,
  TextField,
  MenuItem,
  Typography,
  Box,
  Grid,
  Paper,
} from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TermsAndConditionsForm = () => {
  const [form, setForm] = useState({
    banner: null,
    bannerPreview: '',
    content: '',
    status: 'Active',
    updatedDate: new Date().toISOString().slice(0, 10),
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'banner' && files && files[0]) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setForm((prev) => ({
          ...prev,
          banner: files[0],
          bannerPreview: ev.target.result,
        }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleContentChange = (value) => {
    setForm((prev) => ({ ...prev, content: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    alert('Submitted!');
  };

  return (
    <Box
      sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 4 }}
    >
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          maxWidth: 900,
          p: { xs: 2, md: 4 },
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" mb={3} fontWeight={600} color="primary.main">
          Edit Terms and Conditions
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                component="label"
                fullWidth
                sx={{
                  borderColor: 'error.main',
                  color: 'error.main',
                  height: 56,
                  fontWeight: 500,
                  fontSize: 18,
                  mb: 1,
                }}
              >
                Upload Banner
                <input
                  type="file"
                  name="banner"
                  accept="image/*"
                  hidden
                  onChange={handleChange}
                />
              </Button>
              {form.bannerPreview && (
                <Box mt={2} mb={1} display="flex" justifyContent="center">
                  <img
                    src={form.bannerPreview}
                    alt="Banner Preview"
                    style={{
                      maxHeight: 180,
                      borderRadius: 12,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    }}
                  />
                </Box>
              )}
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" mb={1} fontWeight={500}>
                Content
              </Typography>
              <Box
                sx={{
                  border: '1px solid',
                  borderColor: 'grey.300',
                  borderRadius: 2,
                  overflow: 'hidden',
                  '& .ql-toolbar': {
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    bgcolor: 'grey.50',
                  },
                  '& .ql-container': {
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    minHeight: 180,
                  },
                  mb: 2,
                }}
              >
                <ReactQuill
                  theme="snow"
                  value={form.content}
                  onChange={handleContentChange}
                  style={{
                    border: 'none',
                    minHeight: 140,
                    background: 'white',
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                select
                label="Status"
                name="status"
                value={form.status}
                onChange={handleChange}
                fullWidth
                color="error"
                sx={{
                  '& label.Mui-focused': { color: 'error.main' },
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                    { borderColor: 'error.main' },
                }}
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Updated Date"
                name="updatedDate"
                type="date"
                value={form.updatedDate}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
                color="error"
                sx={{
                  '& label.Mui-focused': { color: 'error.main' },
                  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                    { borderColor: 'error.main' },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="error"
                fullWidth
                sx={{
                  height: 56,
                  fontSize: 20,
                  fontWeight: 600,
                  borderRadius: 2,
                  boxShadow: 2,
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default TermsAndConditionsForm;
