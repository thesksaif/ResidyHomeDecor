// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Container, Grid, Typography, Stack } from '@mui/material';

// project imports
import AppBar from 'ui-component/extended/AppBar';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// assets
import headerBackground from 'assets/images/landing/bg-header.jpg';

const HeaderWrapper = styled('div')(({ theme }) => ({
  backgroundImage: `url(${headerBackground})`,
  backgroundSize: '100% 600px',
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
  textAlign: 'center',
  paddingTop: 30,
  [theme.breakpoints.down('md')]: {
    paddingTop: 0,
  },
}));

// ============================|| SAAS PAGES - PRIVCY POLICY ||============================ //

const PrivacyPolicy = () => {
  const theme = useTheme();

  return (
    <HeaderWrapper>
      <AppBar />
      <Container>
        <Grid container justifyContent="center" spacing={gridSpacing}>
          <Grid
            item
            sm={10}
            md={7}
            sx={{ mt: { md: 12.5, xs: 2.5 }, mb: { md: 8, xs: 2.5 } }}
          >
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
                      marginTop: '80px',
                    },
                  }}
                >
                  Privacy Policy
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  component="div"
                  sx={{
                    fontWeight: 400,
                    lineHeight: 1.4,
                    [theme.breakpoints.up('md')]: { my: 0, mx: 12.5 },
                  }}
                  color="white"
                >
                  Last updated on 18th Feb 2022
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <MainCard
              elevation={4}
              border={false}
              boxShadow
              shadow={4}
              sx={{ mb: 3 }}
            >
              <Stack spacing={2} sx={{ textAlign: 'left' }}>
                <Typography>
                  At ResidyHomeDecor, we are committed to protecting your
                  privacy and ensuring the security of your personal
                  information. This Privacy Policy outlines how we collect, use,
                  store, and safeguard your data when you interact with our
                  website, request a consultation, or use our interior design
                  services.
                </Typography>
                <Typography variant="h3">Information We Collect</Typography>
                <Typography>
                  We collect personal information that you voluntarily provide
                  to us, such as your name, email address, phone number, postal
                  address, and project details. This information is collected
                  when you fill out our contact forms, request a quote,
                  subscribe to our newsletter, or communicate with us via email
                  or phone. We may also collect non-personal information, such
                  as browser type, device information, and usage data, through
                  cookies and analytics tools to improve our website and
                  services.
                </Typography>
                <Typography variant="h3">
                  How We Use Your Information
                </Typography>
                <Typography>
                  Your information is used to respond to your inquiries, provide
                  design consultations, prepare proposals, and deliver our
                  services. We may use your contact details to send you updates,
                  promotional offers, or newsletters, but only if you have opted
                  in. We use non-personal data to analyze website traffic,
                  enhance user experience, and improve our offerings.
                </Typography>
                <Typography variant="h3">
                  Data Sharing and Disclosure
                </Typography>
                <Typography>
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your data with trusted partners,
                  such as contractors, suppliers, or service providers, solely
                  for the purpose of fulfilling your project requirements. All
                  partners are required to maintain the confidentiality and
                  security of your information. We may also disclose your data
                  if required by law or to protect our rights and property.
                </Typography>
                <Typography variant="h3">Data Security</Typography>
                <Typography>
                  We implement industry-standard security measures to protect
                  your data from unauthorized access, alteration, or disclosure.
                  While we strive to use commercially acceptable means to
                  safeguard your information, no method of transmission over the
                  Internet is 100% secure. We encourage you to use strong
                  passwords and be cautious when sharing sensitive information
                  online.
                </Typography>
                <Typography variant="h3">Your Rights</Typography>
                <Typography>
                  You have the right to access, update, or request deletion of
                  your personal information at any time. To exercise these
                  rights or if you have any questions about our privacy
                  practices, please contact us at info@residygroup.com.
                </Typography>
                <Typography variant="h3">Policy Updates</Typography>
                <Typography>
                  We may update this Privacy Policy periodically to reflect
                  changes in our practices or legal requirements. The latest
                  version will always be available on our website. Your
                  continued use of our services constitutes acceptance of any
                  changes.
                </Typography>
                <Typography variant="h3">Contact Us</Typography>
                <Typography>
                  For any privacy-related concerns, please contact us at
                  info@residygroup.com.
                </Typography>
                <Typography variant="h4">
                  Last updated: 18th Feb 2022
                </Typography>
              </Stack>
            </MainCard>
          </Grid>
        </Grid>
      </Container>
    </HeaderWrapper>
  );
};

export default PrivacyPolicy;
