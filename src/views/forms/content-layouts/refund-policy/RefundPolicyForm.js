import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography, Box, Grid, Paper, CircularProgress, Alert } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axiosServices, { staticPagesApi } from 'utils/axios';

const RefundPolicyForm = () => {
    const [form, setForm] = useState({
        title: '',
        bannerImage: '',
        content: ''
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState('');

    useEffect(() => {
        setLoading(true);
        staticPagesApi
            .getPageByType('refund_policy')
            .then((res) => {
                const { title, bannerImage, content } = res.data;
                setForm({ title, bannerImage: bannerImage || '', content: content || '' });
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleContentChange = (value) => {
        setForm((prev) => ({ ...prev, content: value }));
    };

    // Image upload handler
    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setUploading(true);
        setUploadError('');
        const formData = new FormData();
        formData.append('image', file);
        try {
            const res = await axiosServices.post('/api/upload/images/static-pages', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setForm((prev) => ({ ...prev, bannerImage: res.data.url }));
        } catch (err) {
            setUploadError('Image upload failed.');
        }
        setUploading(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);
        try {
            await staticPagesApi.getPageByType('refund_policy');
            // If found, update
            await staticPagesApi.updatePageByType('refund_policy', {
                title: form.title,
                bannerImage: form.bannerImage,
                content: form.content
            });
            setSuccess('Refund Policy updated successfully!');
        } catch (err) {
            // If not found, create
            if (err && err.message && err.message.includes('not found')) {
                try {
                    await axiosServices.post('/api/pages', {
                        type: 'refund_policy',
                        title: form.title,
                        bannerImage: form.bannerImage,
                        content: form.content
                    });
                    setSuccess('Refund Policy created successfully!');
                } catch (createErr) {
                    setError('Failed to create Refund Policy.');
                }
            } else {
                setError('Failed to update Refund Policy.');
            }
        }
        setLoading(false);
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Paper elevation={3} sx={{ width: '100%', maxWidth: 900, p: { xs: 2, md: 4 }, borderRadius: 3 }}>
                <Typography variant="h4" mb={3} fontWeight={600} color="primary.main">
                    Edit Refund Policy
                </Typography>
                {loading && <CircularProgress sx={{ display: 'block', mx: 'auto', my: 4 }} />}
                {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {error}
                    </Alert>
                )}
                {success && (
                    <Alert severity="success" sx={{ mb: 2 }}>
                        {success}
                    </Alert>
                )}
                {!loading && (
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Title"
                                    name="title"
                                    value={form.title}
                                    onChange={handleChange}
                                    fullWidth
                                    color="error"
                                    sx={{
                                        '& label.Mui-focused': { color: 'error.main' },
                                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'error.main'
                                        }
                                    }}
                                />
                            </Grid>
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
                                        mb: 1
                                    }}
                                    disabled={uploading}
                                >
                                    {uploading ? 'Uploading...' : 'Upload Banner Image'}
                                    <input type="file" accept="image/*" hidden onChange={handleImageChange} />
                                </Button>
                                {uploadError && (
                                    <Alert severity="error" sx={{ mt: 1 }}>
                                        {uploadError}
                                    </Alert>
                                )}
                                <TextField
                                    label="Banner Image URL"
                                    name="bannerImage"
                                    value={form.bannerImage}
                                    onChange={handleChange}
                                    fullWidth
                                    color="error"
                                    sx={{
                                        mt: 2,
                                        '& label.Mui-focused': { color: 'error.main' },
                                        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                            borderColor: 'error.main'
                                        }
                                    }}
                                />
                                {form.bannerImage && (
                                    <Box mt={2} mb={1} display="flex" justifyContent="center">
                                        <img
                                            src={form.bannerImage}
                                            alt="Banner Preview"
                                            style={{
                                                maxHeight: 180,
                                                borderRadius: 12,
                                                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
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
                                            bgcolor: 'grey.50'
                                        },
                                        '& .ql-container': {
                                            borderBottomLeftRadius: 8,
                                            borderBottomRightRadius: 8,
                                            minHeight: 180
                                        },
                                        mb: 2
                                    }}
                                >
                                    <ReactQuill
                                        theme="snow"
                                        value={form.content}
                                        onChange={handleContentChange}
                                        style={{ border: 'none', minHeight: 140, background: 'white' }}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="error"
                                    fullWidth
                                    sx={{ height: 56, fontSize: 20, fontWeight: 600, borderRadius: 2, boxShadow: 2 }}
                                    disabled={loading}
                                >
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Paper>
        </Box>
    );
};

export default RefundPolicyForm;
