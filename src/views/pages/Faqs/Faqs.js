// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Container, Grid, Typography, CircularProgress, Alert } from '@mui/material';
import { useState, useEffect } from 'react';

// project imports
import AppBar from 'ui-component/extended/AppBar';
import MainCard from 'ui-component/cards/MainCard';
import Accordion from 'ui-component/extended/Accordion';
import { gridSpacing } from 'store/constant';
import axiosServices from 'utils/axios';

// assets
import mailImg from 'assets/images/landing/widget-mail.svg';
import headerBackground from 'assets/images/landing/bg-header.jpg';

const HeaderWrapper = styled('div')(({ theme }) => ({
    backgroundImage: `url(${headerBackground})`,
    backgroundSize: '100% 600px',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    textAlign: 'center',
    paddingTop: 30,
    [theme.breakpoints.down('md')]: {
        paddingTop: 0
    }
}));

// ============================|| SAAS PAGES - FAQs ||============================ //

const Faqs = () => {
    const theme = useTheme();
    const [faqData, setFaqData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchFaqData();
    }, []);

    const fetchFaqData = async () => {
        try {
            const res = await axiosServices.get('/api/faq');
            const questions = res.data.questions || [];

            // Transform API data to match Accordion component format
            const transformedData = questions.map((q, index) => ({
                id: `faq${index + 1}`,
                title: q.question,
                content: q.answer,
                defaultExpand: index === 0 // First question expanded by default
            }));

            setFaqData(transformedData);
        } catch (err) {
            setError('Failed to load FAQ data. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <HeaderWrapper>
            <AppBar />
            <Container>
                <Grid container justifyContent="center" spacing={gridSpacing}>
                    <Grid item sm={10} md={7} sx={{ mt: { md: 12.5, xs: 2.5 }, mb: { md: 12.5, xs: 2.5 } }}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <Typography
                                    variant="h1"
                                    color="white"
                                    component="div"
                                    sx={{
                                        fontSize: '3.5rem',
                                        fontWeight: 900,
                                        lineHeight: 1.4,
                                        [theme.breakpoints.down('md')]: {
                                            fontSize: '1.8125rem',
                                            marginTop: '80px'
                                        }
                                    }}
                                >
                                    FAQs
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    variant="h4"
                                    component="div"
                                    sx={{
                                        fontWeight: 400,
                                        lineHeight: 1.4,
                                        [theme.breakpoints.up('md')]: { my: 0, mx: 12.5 }
                                    }}
                                    color="white"
                                >
                                    Please refer the Frequently ask question for your quick help
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{ position: 'relative', display: { xs: 'none', lg: 'block' } }}>
                        <img
                            src={mailImg}
                            alt="Berry"
                            style={{
                                marginBottom: -0.625,
                                position: 'absolute',
                                bottom: -90,
                                right: '0',
                                width: 400,
                                maxWidth: '100%',
                                animation: '5s wings ease-in-out infinite'
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <MainCard sx={{ textAlign: 'left' }} elevation={4} border={false} boxShadow shadow={4}>
                            {loading ? (
                                <div style={{ textAlign: 'center', padding: '40px' }}>
                                    <CircularProgress />
                                    <Typography variant="body1" sx={{ mt: 2 }}>
                                        Loading FAQ data...
                                    </Typography>
                                </div>
                            ) : error ? (
                                <Alert severity="error" sx={{ m: 2 }}>
                                    {error}
                                </Alert>
                            ) : faqData.length > 0 ? (
                                <Accordion data={faqData} />
                            ) : (
                                <Typography variant="body1" sx={{ textAlign: 'center', p: 4 }}>
                                    No FAQ questions available at the moment.
                                </Typography>
                            )}
                        </MainCard>
                    </Grid>
                </Grid>
            </Container>
        </HeaderWrapper>
    );
};

export default Faqs;
