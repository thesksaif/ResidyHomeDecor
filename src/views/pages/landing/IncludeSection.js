// material-ui
import { useTheme } from '@mui/material/styles';
import { Container, Typography, Stack, Box } from '@mui/material';

// third-party
import Marquee from 'react-fast-marquee';
import SectionHeader from 'ui-component/SectionHeader';

// =============================|| LANDING - INCLUDE SECTION ||============================= //

const IncludeSection = () => {
    const theme = useTheme();
    const marqueeSX = {
        display: 'flex',
        width: '100%',
        gap: 6,
        justifyContent: 'space-around',
        '.MuiTypography-root': {
            fontWeight: 600,
            color: theme.palette.mode === 'dark' ? 'text.primary' : 'text.secondary',
            '&:hover': {
                color: theme.palette.mode === 'dark' ? 'text.secondary' : 'grey.900',
                cursor: 'pointer'
            }
        }
    };

    const margueeFirst = [
        'Live Customizer',
        '7+ Conceptual Apps',
        'Highly Flexible',
        'Always Updated',
        'Beautiful Design',
        'TypeScript Support',
        'Figma Design System',
        'Dark/Light Layouts',
        'RTL',
        'Prettier Code Standard',
        'i18n Multi Language Support',
        'Auth Methods'
    ];
    const margueeSecond = [
        'Auth Methods',
        'i18n Multi Language Support',
        'Prettier Code Standard',
        'RTL',
        'Dark/Light Layouts',
        'Figma Design System',
        'TypeScript Support',
        'Beautiful Design',
        'Highly Flexible',
        '7+ Conceptual Apps',
        'Live Customizer',
        'Always Updated'
    ];

    return (
        <Box sx={{ '.overlay': { display: 'none' } }}>
            <Container>
                <SectionHeader heading="Features that are well-liked" subheading="Multiple categories with app concepts and demo content" />
            </Container>
            <Stack spacing={4} sx={{ mt: 9, direction: 'initial' }}>
                <Marquee className="marquee-section">
                    <Box sx={marqueeSX}>
                        {margueeFirst.map((item, index) => (
                            <Typography key={index} variant="h2" {...(index === 0 && { sx: { ml: 1 } })}>
                                {item}
                            </Typography>
                        ))}
                    </Box>
                </Marquee>
                <Marquee className="marquee-section" direction="right">
                    <Box sx={marqueeSX}>
                        {margueeSecond.map((item, index) => (
                            <Typography key={index} variant="h2" {...(index === 0 && { sx: { ml: 5 } })}>
                                {item}
                            </Typography>
                        ))}
                    </Box>
                </Marquee>
            </Stack>
        </Box>
    );
};

export default IncludeSection;
