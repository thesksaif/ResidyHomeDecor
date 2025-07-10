// material-ui
import { useTheme } from '@mui/material/styles';
import { Alert, AlertTitle, Button, Grid, TextField } from '@mui/material';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import useAuth from 'hooks/useAuth';
import axiosServices from 'utils/axios';
import { useState } from 'react';
import { useSnackbar } from 'notistack';

// ==============================|| PROFILE 1 - CHANGE PASSWORD ||============================== //

const ChangePassword = () => {
    const theme = useTheme();
    const { user } = useAuth();
    const [form, setForm] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.newPassword !== form.confirmPassword) {
            enqueueSnackbar('New password and confirm password do not match.', {
                variant: 'error',
                anchorOrigin: { vertical: 'top', horizontal: 'right' }
            });
            return;
        }
        setLoading(true);
        try {
            await axiosServices.post('/api/account/change-password', {
                email: user?.email,
                oldPassword: form.oldPassword,
                newPassword: form.newPassword
            });
            enqueueSnackbar('Password changed successfully.', {
                variant: 'success',
                anchorOrigin: { vertical: 'top', horizontal: 'right' }
            });
            setForm({ oldPassword: '', newPassword: '', confirmPassword: '' });
        } catch (err) {
            enqueueSnackbar(err?.response?.data?.message || 'Failed to change password.', {
                variant: 'error',
                anchorOrigin: { vertical: 'top', horizontal: 'right' }
            });
        }
        setLoading(false);
    };

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Alert severity="warning" variant="outlined" sx={{ borderColor: 'warning.dark' }}>
                    <AlertTitle>Alert!</AlertTitle>
                    Your Password will expire in every 3 months. So change it periodically.
                    <strong> Do not share your password</strong>
                </Alert>
            </Grid>
            <Grid item xs={12}>
                <SubCard title="Change Password">
                    {/* Snackbar will show success/error, so remove Alert display */}
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <Grid container spacing={gridSpacing} sx={{ mb: 1.75 }}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    type="password"
                                    id="outlined-basic7"
                                    fullWidth
                                    label="Current Password"
                                    name="oldPassword"
                                    value={form.oldPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={gridSpacing} sx={{ mb: 1.75 }}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    type="password"
                                    id="outlined-basic8"
                                    fullWidth
                                    label="New Password"
                                    name="newPassword"
                                    value={form.newPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    type="password"
                                    id="outlined-basic9"
                                    fullWidth
                                    label="Confirm Password"
                                    name="confirmPassword"
                                    value={form.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                        </Grid>
                        <Grid spacing={2} container justifyContent="flex-end" sx={{ mt: 3 }}>
                            <Grid item>
                                <AnimateButton>
                                    <Button type="submit" variant="contained" disabled={loading}>
                                        {loading ? 'Changing...' : 'Change Password'}
                                    </Button>
                                </AnimateButton>
                            </Grid>
                            <Grid item>
                                <Button
                                    sx={{ color: theme.palette.error.main }}
                                    onClick={() => setForm({ oldPassword: '', newPassword: '', confirmPassword: '' })}
                                    disabled={loading}
                                >
                                    Clear
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </SubCard>
            </Grid>
        </Grid>
    );
};

export default ChangePassword;
