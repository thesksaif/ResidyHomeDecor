import { useState, useEffect } from 'react';
import { Button, Grid, MenuItem, TextField, CircularProgress } from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import axiosServices from 'utils/axios';
import { useSnackbar } from 'notistack';

const currencies = [
    { value: 'Washington', label: 'Washington' },
    { value: 'India', label: 'India' },
    { value: 'Africa', label: 'Africa' },
    { value: 'New-York', label: 'New York' },
    { value: 'Malaysia', label: 'Malaysia' }
];
const experiences = [
    { value: 'Startup', label: 'Startup' },
    { value: '2-year', label: '2 year' },
    { value: '3-year', label: '3 year' },
    { value: '4-year', label: '4 year' },
    { value: '5-year', label: '5 year' }
];

const PersonalAccount = () => {
    const [form, setForm] = useState({
        name: '',
        location: '',
        bio: '',
        experience: '',
        contactPhone: '',
        email: '',
        portfolioUrl: '',
        address: '',
        facebookUrl: '',
        twitterUrl: '',
        linkedinUrl: ''
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    useEffect(() => {
        setLoading(true);
        axiosServices
            .get('/api/account/me')
            .then((res) => {
                const u = res.data.user;
                setForm({
                    name: u.name || '',
                    location: u.location || '',
                    bio: u.bio || '',
                    experience: u.experience || '',
                    contactPhone: u.contactPhone || '',
                    email: u.email || '',
                    portfolioUrl: u.portfolioUrl || '',
                    address: u.address || '',
                    facebookUrl: u.facebookUrl || '',
                    twitterUrl: u.twitterUrl || '',
                    linkedinUrl: u.linkedinUrl || ''
                });
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            const res = await axiosServices.put('/api/account/profile', form);
            enqueueSnackbar('Profile updated successfully!', {
                variant: 'success',
                anchorOrigin: { vertical: 'top', horizontal: 'right' }
            });
            setForm((prev) => ({ ...prev, ...res.data.user }));
        } catch (err) {
            enqueueSnackbar(err?.response?.data?.message || 'Failed to update profile.', {
                variant: 'error',
                anchorOrigin: { vertical: 'top', horizontal: 'right' }
            });
        }
        setSaving(false);
    };

    if (loading) return <CircularProgress sx={{ display: 'block', mx: 'auto', my: 4 }} />;

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} md={6}>
                    <SubCard title="Personal Information">
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} md={6}>
                                <TextField name="name" fullWidth label="Name" value={form.name} onChange={handleChange} required />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    name="location"
                                    select
                                    fullWidth
                                    label="Location"
                                    value={form.location}
                                    onChange={handleChange}
                                    required
                                >
                                    {currencies.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name="bio" label="Bio" multiline fullWidth rows={3} value={form.bio} onChange={handleChange} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    name="experience"
                                    select
                                    fullWidth
                                    label="Experience"
                                    value={form.experience}
                                    onChange={handleChange}
                                    required
                                >
                                    {experiences.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SubCard title="Contact Information">
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    name="contactPhone"
                                    fullWidth
                                    label="Contact Phone"
                                    value={form.contactPhone}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField name="email" fullWidth label="Email" value={form.email} onChange={handleChange} disabled />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    name="portfolioUrl"
                                    fullWidth
                                    label="Portfolio Url"
                                    value={form.portfolioUrl}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField name="address" fullWidth label="Address" value={form.address} onChange={handleChange} />
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <SubCard title="Social Information">
                        <Grid container alignItems="center" spacing={gridSpacing} sx={{ mb: 1.25 }}>
                            <Grid item>
                                <FacebookIcon />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <TextField
                                    name="facebookUrl"
                                    fullWidth
                                    label="Facebook Profile Url"
                                    value={form.facebookUrl}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <AnimateButton>
                                    <Button variant="contained" size="small" color="secondary" disabled>
                                        Connect
                                    </Button>
                                </AnimateButton>
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" spacing={gridSpacing} sx={{ mb: 1.25 }}>
                            <Grid item>
                                <TwitterIcon />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <TextField
                                    name="twitterUrl"
                                    fullWidth
                                    label="Twitter Profile Url"
                                    value={form.twitterUrl}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <AnimateButton>
                                    <Button variant="contained" size="small" color="secondary" disabled>
                                        Connect
                                    </Button>
                                </AnimateButton>
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" spacing={gridSpacing}>
                            <Grid item>
                                <LinkedInIcon />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <TextField
                                    name="linkedinUrl"
                                    fullWidth
                                    label="LinkedIn Profile Url"
                                    value={form.linkedinUrl}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item>
                                <AnimateButton>
                                    <Button variant="contained" size="small" color="secondary" disabled>
                                        Connect
                                    </Button>
                                </AnimateButton>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <AnimateButton>
                                <Button type="submit" variant="contained" color="primary" disabled={saving}>
                                    {saving ? 'Saving...' : 'Save Changes'}
                                </Button>
                            </AnimateButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    );
};

export default PersonalAccount;
