// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';
import { useDispatch } from 'store';
import { useNavigate } from 'react-router-dom';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
import useScriptRef from 'hooks/useScriptRef';
import { openSnackbar } from 'store/slices/snackbar';
import axiosServices from 'utils/axios';

// ========================|| CUSTOM API - FORGOT PASSWORD ||======================== //

const AuthForgotPassword = ({ ...others }) => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{
                email: '',
                submit: null
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email('Must be a valid email').max(255).required('Email is required')
            })}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                try {
                    // Call the custom forgot password API
                    const response = await axiosServices.post('/api/account/forgot-password', {
                        email: values.email
                    });

                    if (scriptedRef.current) {
                        setStatus({ success: true });
                        setSubmitting(false);

                        // Show success message
                        dispatch(
                            openSnackbar({
                                open: true,
                                message: response.data.message || 'A new password has been sent to your email address.',
                                variant: 'alert',
                                alert: {
                                    color: 'success'
                                },
                                close: false
                            })
                        );

                        // Navigate to login page after a delay
                        setTimeout(() => {
                            navigate('/login', {
                                replace: true
                            });
                        }, 2000);
                    }
                } catch (err) {
                    console.error('Forgot password error:', err);

                    if (scriptedRef.current) {
                        setStatus({ success: false });
                        setSubmitting(false);

                        // Handle different error cases
                        let errorMessage = 'An error occurred while processing your request.';

                        if (err.response) {
                            switch (err.response.status) {
                                case 400:
                                    errorMessage = 'Email is required.';
                                    break;
                                case 404:
                                    errorMessage = 'User not found with this email address.';
                                    break;
                                case 500:
                                    errorMessage = 'Failed to send email. Please try again later.';
                                    break;
                                default:
                                    errorMessage = err.response.data?.message || errorMessage;
                            }
                        } else if (err.request) {
                            errorMessage = 'Network error. Please check your connection.';
                        }

                        setErrors({ submit: errorMessage });

                        // Show error message
                        dispatch(
                            openSnackbar({
                                open: true,
                                message: errorMessage,
                                variant: 'alert',
                                alert: {
                                    color: 'error'
                                },
                                close: false
                            })
                        );
                    }
                }
            }}
        >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                <form noValidate onSubmit={handleSubmit} {...others}>
                    <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                        <InputLabel htmlFor="outlined-adornment-email-forgot">Email Address / Username</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-email-forgot"
                            type="email"
                            value={values.email}
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            label="Email Address / Username"
                            inputProps={{}}
                        />
                        {touched.email && errors.email && (
                            <FormHelperText error id="standard-weight-helper-text-email-forgot">
                                {errors.email}
                            </FormHelperText>
                        )}
                    </FormControl>

                    {errors.submit && (
                        <Box sx={{ mt: 3 }}>
                            <FormHelperText error>{errors.submit}</FormHelperText>
                        </Box>
                    )}

                    <Box sx={{ mt: 2 }}>
                        <AnimateButton>
                            <Button
                                disableElevation
                                disabled={isSubmitting}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                                color="secondary"
                            >
                                {isSubmitting ? 'Sending...' : 'Reset Password'}
                            </Button>
                        </AnimateButton>
                    </Box>
                </form>
            )}
        </Formik>
    );
};

export default AuthForgotPassword;
