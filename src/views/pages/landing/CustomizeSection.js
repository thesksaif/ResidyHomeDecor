// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, CardMedia, Container, Grid, Link, Stack, Typography } from '@mui/material';

// project import
import AnimateButton from 'ui-component/extended/AnimateButton';

// assets
import { IconCircleCheck } from '@tabler/icons';
import LayersTwoToneIcon from '@mui/icons-material/LayersTwoTone';

import LayerLeft from 'assets/images/landing/customization-left.png';
import LayerRight from 'assets/images/landing/customization-right.png';

// ==============================|| LANDING - CUSTOMIZE ||============================== //

const CustomizeSection = () => {
    const theme = useTheme();
    const listSX = {
        display: 'flex',
        alignItems: 'center',
        gap: '0.7rem',
        padding: '10px 0',
        fontSize: '1rem',
        color: theme.palette.grey[900],
        svg: { color: '#dc3545' }
    };

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
                                Effortless Design Experience
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
                                ResidyHomeDecor has made it easy for developers of any skill level to use their product.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography sx={listSX}>
                                <IconCircleCheck size={20} />A straightforward and simple project structure.
                            </Typography>
                            <Typography sx={listSX}>
                                <IconCircleCheck size={20} />
                                Designs that are organized in a clear and logical manner.
                            </Typography>
                            <Typography sx={listSX}>
                                <IconCircleCheck size={20} />
                                Setting up typography and color schemes is easy and effortless.
                            </Typography>
                            <Typography sx={listSX}>
                                <IconCircleCheck size={20} />
                                Multiple layout options that can be easily adjusted.
                            </Typography>
                            <Typography sx={listSX}>
                                <IconCircleCheck size={20} />A theme that can be easily configured on a single page.
                            </Typography>
                            {/* <Stack direction="row">
                                <AnimateButton>
                                    <Button
                                        startIcon={<LayersTwoToneIcon />}
                                        sx={{ boxShadow: 'none', my: 4 }}
                                        variant="contained"
                                        component={RouterLink}
                                        to="/components/autocomplete"
                                        target="_blank"
                                    >
                                        View All Components
                                    </Button>
                                </AnimateButton>
                            </Stack> */}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} marginLeft={5}>
                    <Grid container spacing={2.5} direction={{ xs: 'column-reverse', md: 'row' }}>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={2.5}>
                                <Grid item xs={12}>
                                    <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' }, mb: 2 }}>
                                        Interior Design Toolkit
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
                                        Streamlining the design process and saving you time and effort in the initial planning phase.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography sx={listSX}>
                                        <IconCircleCheck size={20} />
                                        Professional resources for interior designers.
                                    </Typography>
                                    <Typography sx={listSX}>
                                        <IconCircleCheck size={20} />
                                        Properly organized project layouts.
                                    </Typography>
                                    <Typography sx={listSX}>
                                        <IconCircleCheck size={20} />
                                        Dark/Light design options for versatile aesthetics.
                                    </Typography>
                                    <Typography sx={listSX}>
                                        <IconCircleCheck size={20} />
                                        Detailed project plans available only in Premium & Extended Packages.
                                    </Typography>
                                    <Typography sx={listSX}>
                                        <IconCircleCheck size={20} />A theme that can be easily configured on a single page.
                                    </Typography>
                                    <Stack direction="row">
                                        <AnimateButton>
                                            <Button
                                                startIcon={<LayersTwoToneIcon />}
                                                sx={{
                                                    boxShadow: 'none',
                                                    my: 4,
                                                    bgcolor: '#dc3545',
                                                    '&:hover': { bgcolor: '#b71c1c' }
                                                }}
                                                variant="contained"
                                                component={Link}
                                                href="https://www.figma.com/file/2u2TmauA6lanVMYiywzS1o/berry-figma-v3.0?node-id=0%3A1"
                                                target="_blank"
                                            >
                                                Explore Figma
                                            </Button>
                                        </AnimateButton>
                                    </Stack>
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

export default CustomizeSection;
