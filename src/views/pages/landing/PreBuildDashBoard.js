import { Grid, Typography, Box, Stack, Button } from '@mui/material';

const FeatureComparison = () => {
    // const theme = useTheme();

    const features = [
        {
            title: 'Solutions',
            companyFeature: 'All Under One Roof',
            companyDescription: 'A one-stop destination to resolve all your queries',
            competitorFeature: 'Multiple Contractors & Market Trips',
            competitorDescription: 'Coordination with several intermediaries'
        },
        {
            title: 'Dedicated Team',
            companyFeature: 'Dedicated Team of Designers',
            companyDescription: 'Experts who chalk out innovative solutions',
            competitorFeature: 'In-efficient Support',
            competitorDescription: 'No team to provide feasible results'
        },
        {
            title: 'VR Experience',
            companyFeature: '3D Visual Walkthroughs',
            companyDescription: 'Home Interior Designs in tandem with interactive 3D Visual Walkthroughs',
            competitorFeature: 'No VR Walkthroughs',
            competitorDescription: 'Absence of Advanced Technology support'
        },
        {
            title: 'Quality Assurance',
            companyFeature: 'Periodic Inspections',
            companyDescription: 'Well-timed quality reviews at various stages of the project',
            competitorFeature: 'No Periodic Quality Checks',
            competitorDescription: 'Usage of low-grade material to save costs'
        },
        {
            title: 'Price',
            companyFeature: 'No False Claims',
            companyDescription: 'Lowest price guaranteed!',
            competitorFeature: 'Over Promising & Under Delivery',
            competitorDescription: 'No price match guarantee'
        },
        {
            title: 'Hidden Charges',
            companyFeature: 'You Get What You See',
            companyDescription: 'No hidden charges',
            competitorFeature: 'Overhead Charges',
            competitorDescription: 'Unidentified costs lead to higher prices'
        }
        // {
        //   title: "Support",
        //   companyFeature: "We’re Right by Your Side",
        //   companyDescription: "Dedicated after-sales support",
        //   competitorFeature: "No After-Sales Support",
        //   competitorDescription: "Customer service ends after project completion"
        // }
    ];

    return (
        <Box sx={{ py: 6, backgroundColor: '#f8f8f8' }}>
            {' '}
            {/* Light background color */}
            <Grid container justifyContent="center">
                <Grid item xs={12} md={10}>
                    {/* Header Section */}
                    <Typography variant="h2" align="center" sx={{ mb: 6, fontWeight: 'bold', color: '#333' }}>
                        What Sets Us Apart?
                    </Typography>
                    <Grid container spacing={6}>
                        {' '}
                        {/* Increased spacing for a modern layout */}
                        {features.map((feature, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                {' '}
                                {/* Updated grid layout for three-column design */}
                                {/* Card container */}
                                <Stack
                                    spacing={2}
                                    sx={{
                                        backgroundColor: '#fff',
                                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                        borderRadius: '10px',
                                        p: 3,
                                        transition: 'transform 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'scale(1.05)' /* Subtle hover effect */
                                        }
                                    }}
                                >
                                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#2c3e50' }}>
                                        {feature.title}
                                    </Typography>
                                    <Box>
                                        <Typography variant="body1" sx={{ fontWeight: 500, color: '#e74c3c' }}>
                                            {' '}
                                            {/* Company Feature Highlighted */}
                                            {feature.companyFeature}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {feature.companyDescription}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant="body1" sx={{ fontWeight: 500, color: '#3498db' }}>
                                            {' '}
                                            {/* Competitor Feature */}
                                            {feature.competitorFeature}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {feature.competitorDescription}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            {/* Call to Action Button */}
            <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}>
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                        padding: '10px 30px',
                        backgroundColor: '#e74c3c',
                        '&:hover': { backgroundColor: '#c0392b' },
                        borderRadius: '50px',
                        fontSize: '16px'
                    }}
                >
                    Book Free Consultation
                </Button>
            </Box>
        </Box>
    );
};

export default FeatureComparison;
