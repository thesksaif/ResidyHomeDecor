import { Container, Grid, Typography, Box, Stack } from '@mui/material';

import main from 'assets/images/about/Residy.jpg';
import craftsmanImage from 'assets/images/about/craftsman.webp';
import team from 'assets/images/about/team.avif';

const AboutUs = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                px: { xs: 2, sm: 3, md: 4, lg: 6 }
            }}
        >
            <Grid container direction="column" alignItems="center" spacing={{ xs: 4, sm: 5, md: 6 }}>
                <Grid item xs={12}>
                    <Typography
                        variant="h2"
                        align="center"
                        sx={{ fontSize: { xs: '1.6rem', sm: '1.9rem', md: '2.5rem', lg: '3rem' }, fontWeight: 700, mb: 2 }}
                    >
                        How it started
                    </Typography>
                    <Typography
                        variant="body1"
                        align="center"
                        sx={{
                            fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
                            color: 'text.secondary',
                            maxWidth: '840px',
                            mx: 'auto',
                            mb: 4
                        }}
                    >
                        Article is the easiest way to create a beautiful modern space. Since launching in 2013, we’ve made it our mission to
                        make great style easy, long-lasting and well-priced. We work directly with our manufacturers to produce unique,
                        durable pieces using high-quality materials. This direct relationship means we can bring you beautiful modern
                        furniture and decor at unrivaled value.
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            maxWidth: '800px',
                            mx: 'auto'
                        }}
                    >
                        <img
                            src={main}
                            alt="Article Experience vs Traditional Retail Flowchart"
                            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                        />
                    </Box>
                </Grid>

                <Grid item xs={12} mt={6} mb={5}>
                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        alignItems="center"
                        spacing={{ xs: 3, sm: 4, md: 6 }}
                        sx={{ maxWidth: '900px', mx: 'auto' }}
                    >
                        <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '1.4rem', sm: '1.6rem', md: '2rem' } }}>
                                We like to do things properly.
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ color: 'text.secondary', fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.2rem' } }}
                            >
                                It’s why we travel around the world looking for beautiful designs crafted by furniture makers who are just
                                as obsessive about style and quality as we are. No gimmicks. No shortcuts. Just great quality furniture at
                                genuinely good prices.
                            </Typography>
                        </Box>
                        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                            <img
                                src={craftsmanImage}
                                alt="Craftsman working on furniture"
                                style={{ width: '100%', maxWidth: '450px', objectFit: 'cover', borderRadius: '8px' }}
                            />
                        </Box>
                    </Stack>
                </Grid>

                <Grid item xs={12} mt={6} mb={5}>
                    <Box sx={{ width: '100%', py: { xs: 3, sm: 5, md: 7 } }}>
                        <Stack
                            direction={{ xs: 'column', md: 'row' }}
                            alignItems="center"
                            spacing={{ xs: 4, sm: 5, md: 6 }}
                            sx={{ maxWidth: '1200px', mx: 'auto' }}
                        >
                            <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, maxWidth: { xs: '500px', md: '400px' } }}>
                                <Typography
                                    variant="h3"
                                    sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '1.4rem', sm: '1.6rem', md: '2rem' } }}
                                >
                                    The team behind our success
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ color: 'text.secondary', fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.15rem' } }}
                                >
                                    Our diverse team of award-winning designers and experts are here to make your home the best it could be.
                                </Typography>
                            </Box>
                            <Box sx={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
                                <img
                                    src={team}
                                    alt="Team behind success"
                                    style={{ width: '100%', maxWidth: '500px', height: 'auto', objectFit: 'contain', borderRadius: '8px' }}
                                />
                            </Box>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutUs;
