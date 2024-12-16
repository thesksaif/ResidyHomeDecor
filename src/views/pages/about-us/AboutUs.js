// material-ui
// import { useTheme } from '@mui/material/styles';
import { CardMedia, Container, Grid, Stack, Typography } from '@mui/material';

import LayerLeft from 'assets/images/landing/customization-left.png';
import LayerRight from 'assets/images/landing/customization-right.png';

// ==============================|| LANDING - CUSTOMIZE ||============================== //

const AboutUs = () => {
    // const theme = useTheme();
    // const listSX = {
    //     display: 'flex',
    //     alignItems: 'center',
    //     gap: '0.7rem',
    //     padding: '10px 0',
    //     fontSize: '1rem',
    //     color: theme.palette.grey[900],
    //     svg: { color: theme.palette.secondary.main }
    // };

    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Grid container justifyContent="space-between" alignItems="center" spacing={{ xs: 1.5, sm: 2.5, md: 3, lg: 5 }}>
                <Grid item xs={12} md={6} sx={{ img: { width: '100%', borderRadius: '5px' } }}>
                    <Stack sx={{ width: '85%', marginTop: '6%', mb: 5, mx: 'auto' }}>
                        <CardMedia component="img" image={LayerLeft} alt="Layer" />
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={2.5}>
                        <Grid item xs={12}>
                            <Typography variant="h5" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' }, mb: 2 }}>
                                Our Mission: Bringing Unique Style to Every Home
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                color="text.primary"
                                sx={{
                                    fontSize: '1rem',
                                    zIndex: '99',
                                    width: { xs: '100%', sm: '100%', md: 'calc(100% - 20%)' }
                                }}
                            >
                                At Resdiy Home Decor, our mission is to provide high-quality, stylish, and affordable home decor that
                                inspires and transforms your space. We believe every home deserves a touch of elegance and personality, and
                                we are dedicated to making that vision accessible to all.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} marginLeft={5}>
                    <Grid container spacing={2.5} direction={{ xs: 'column-reverse', md: 'row' }}>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={2.5}>
                                <Grid item xs={12}>
                                    <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' }, mb: 2 }}>
                                        Our Story
                                    </Typography>
                                    <Typography
                                        variant="subtitle2"
                                        color="text.primary"
                                        sx={{
                                            fontSize: '1rem',
                                            zIndex: '99',
                                            width: { xs: '100%', md: 'calc(100% - 20%)' }
                                        }}
                                    >
                                        Founded with a passion for design and a commitment to quality, Resdiy Home Decor has grown from a
                                        small startup to a trusted name in home decor. We are inspired by the belief that stylish,
                                        affordable decor should be accessible to everyone. Over the years, we’ve expanded our range to
                                        include products that suit every style.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ img: { width: '100%', borderRadius: '5px' } }}>
                            <Stack sx={{ width: '88%', mx: 'auto', marginRight: '13%' }}>
                                <CardMedia component="img" image={LayerRight} alt="Layer" />
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutUs;
