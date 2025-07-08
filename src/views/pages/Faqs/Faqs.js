// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Container, Grid, Typography } from '@mui/material';

// project imports
import AppBar from 'ui-component/extended/AppBar';
import MainCard from 'ui-component/cards/MainCard';
import Accordion from 'ui-component/extended/Accordion';
import { gridSpacing } from 'store/constant';

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

const basicData = [
    {
        id: 'basic1',
        title: 'What services do you offer?',
        defaultExpand: true,
        content: `ResidyHomeDecor offers a comprehensive suite of interior design services tailored to both residential and commercial clients. Our offerings include full home interior design, modular kitchen and wardrobe solutions, space planning, furniture selection, lighting design, color consultation, and project management. We also provide renovation services, turnkey solutions, and custom furniture design. Our team works closely with you from the initial consultation to the final installation, ensuring every detail aligns with your vision and lifestyle. Whether you are looking to refresh a single room or transform an entire property, our experts are equipped to handle projects of any scale and complexity.`
    },
    {
        id: 'basic2',
        title: 'How does the design process work?',
        content: `Our design process is structured to provide a seamless and enjoyable experience for our clients. It begins with an in-depth consultation where we discuss your needs, preferences, budget, and timeline. We then conduct a site visit to assess the space and take measurements. Based on this information, our designers create mood boards, 2D layouts, and 3D visualizations to help you envision the final outcome. Once the design is approved, we assist with material selection, procurement, and scheduling. Our project managers oversee the execution, coordinating with skilled craftsmen and vendors to ensure quality and timely delivery. We keep you informed at every stage and welcome your feedback to make adjustments as needed.`
    },
    {
        id: 'basic3',
        title: 'Can I customize my interior design?',
        content: `Absolutely! Customization is at the heart of our approach. We believe every space should reflect the personality and lifestyle of its occupants. Our designers work closely with you to understand your tastes, functional requirements, and aspirations. From selecting materials, finishes, and color palettes to designing bespoke furniture and storage solutions, we ensure every element is tailored to your preferences. We also accommodate special requests, such as eco-friendly materials, smart home integrations, and accessibility features. Your satisfaction is our top priority, and we strive to deliver a space that is uniquely yours.`
    },
    {
        id: 'basic4',
        title: 'What is your project timeline?',
        content: `Project timelines vary depending on the scope and complexity of the work. For a single room makeover, the process may take 3-4 weeks, while a full home renovation can range from 8-16 weeks or more. After the initial consultation and site assessment, we provide a detailed project schedule outlining key milestones and deadlines. We are committed to transparency and punctuality, and our project managers ensure that each phase progresses smoothly. In case of unforeseen delays, such as material shortages or external factors, we communicate promptly and work diligently to minimize disruptions.`
    },
    {
        id: 'basic5',
        title: 'Do you offer post-completion support?',
        content: `Yes, we stand by the quality of our work and offer comprehensive post-completion support. After project handover, we provide a warranty on workmanship and materials as specified in your contract. Our team is available to address any issues, perform touch-ups, or offer maintenance advice. We also provide guidance on cleaning, care, and future upgrades. Your long-term satisfaction is important to us, and we encourage you to reach out with any questions or concerns even after the project is complete.`
    }
];

// ============================|| SAAS PAGES - FAQs ||============================ //

const Faqs = () => {
    const theme = useTheme();

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
                            <Accordion data={basicData} />
                        </MainCard>
                    </Grid>
                </Grid>
            </Container>
        </HeaderWrapper>
    );
};

export default Faqs;
