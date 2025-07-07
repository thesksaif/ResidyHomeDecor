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

const RefundPolicy = () => {
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
                  Refund Policy
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
                  At ResidyHomeDecor, we value your trust and strive to provide
                  exceptional interior design services. This Refund Policy
                  explains our approach to payments, cancellations, and refunds
                  to ensure transparency and fairness.
                </Typography>
                <Typography variant="h3">Payments</Typography>
                <Typography>
                  Payments for our services are typically structured in stages,
                  as outlined in your project agreement. An initial deposit is
                  required to secure your booking and initiate the design
                  process. Subsequent payments are scheduled based on project
                  milestones, such as design approval, material procurement, and
                  completion of installation. All payment terms are clearly
                  communicated and agreed upon before work begins.
                </Typography>
                <Typography variant="h3">Cancellations</Typography>
                <Typography>
                  If you wish to cancel your project, please notify us in
                  writing as soon as possible. Cancellations made before the
                  commencement of work may be eligible for a partial refund,
                  minus any administrative or design fees incurred. If work has
                  already started, charges may apply for completed work,
                  materials ordered, or services rendered. We will provide a
                  detailed breakdown of any deductions.
                </Typography>
                <Typography variant="h3">Refunds</Typography>
                <Typography>
                  Refunds are processed in accordance with the terms specified
                  in your contract. We are committed to resolving any concerns
                  regarding payments or services. If you are dissatisfied with
                  any aspect of our work, please contact us promptly so we can
                  address the issue. Approved refunds will be processed within
                  14 business days to your original payment method.
                </Typography>
                <Typography variant="h3">Non-Refundable Items</Typography>
                <Typography>
                  Custom-made furniture, special order materials, and services
                  that have already been delivered are generally non-refundable.
                  Any exceptions will be clearly stated in your agreement.
                </Typography>
                <Typography variant="h3">Contact Us</Typography>
                <Typography>
                  If you have questions about our Refund Policy or need
                  assistance with a payment or refund, please contact us at
                  info@residygroup.com.
                </Typography>
                <Typography variant="h3">Policy Updates</Typography>
                <Typography>
                  We reserve the right to update this policy as needed. The
                  latest version will be posted on our website.
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

export default RefundPolicy;
