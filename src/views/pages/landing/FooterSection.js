// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';

// Import the necessary icons
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FloatingConsultForm from './FloatingConsultForm';

// Link - custom style
const FooterLink = styled(Link)(({ theme }) => ({
  color:
    theme.palette.mode === 'dark'
      ? theme.palette.text.secondary
      : theme.palette.text.hint,
  '&:hover': {
    color: theme.palette.primary.main,
  },
  '&:active': {
    color: theme.palette.primary.main,
  },
}));

const FooterSection = () => {
  const theme = useTheme();
  const textColor =
    theme.palette.mode === 'dark' ? 'text.secondary' : 'text.hint';

  return (
    <>
      <Container sx={{ mb: 15 }}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Grid container spacing={8}>
              {/* About Section */}
              <Grid item xs={12} md={4}>
                <Stack spacing={{ xs: 2, md: 5 }}>
                  <Typography
                    variant="h4"
                    color={textColor}
                    sx={{ fontWeight: 500 }}
                  >
                    About ResidyHomeDecor
                  </Typography>
                  <Typography variant="body2" color={textColor}>
                    ResidyHomeDecor is a leading interior design and home decor
                    company. We offer personalized solutions to transform your
                    home or office into a beautiful, functional space. Our team
                    of expert designers and craftsmen are dedicated to
                    delivering quality and style in every project.
                  </Typography>
                </Stack>
              </Grid>

              {/* Help Section */}
              <Grid item xs={12} md={8}>
                <Grid container spacing={{ xs: 5, md: 2 }}>
                  <Grid item xs={6} sm={4}>
                    <Stack spacing={{ xs: 3, md: 5 }}>
                      <Typography
                        variant="h4"
                        color={textColor}
                        sx={{ fontWeight: 500 }}
                      >
                        Help
                      </Typography>
                      <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                        <FooterLink
                          component={RouterLink}
                          to="/"
                          underline="none"
                        >
                          Home
                        </FooterLink>
                        <FooterLink
                          component={RouterLink}
                          to="/about-us"
                          underline="none"
                        >
                          About Us
                        </FooterLink>
                        <FooterLink
                          component={RouterLink}
                          to="/services"
                          underline="none"
                        >
                          Services
                        </FooterLink>
                        <FooterLink
                          component={RouterLink}
                          to="/contact-us"
                          underline="none"
                        >
                          Contact Us
                        </FooterLink>
                        <FooterLink
                          component={RouterLink}
                          to="/quote"
                          underline="none"
                          target="_blank"
                        >
                          GET QUOTE
                        </FooterLink>
                      </Stack>
                    </Stack>
                  </Grid>

                  {/* Additional Help */}
                  <Grid item xs={6} sm={4}>
                    <Stack spacing={{ xs: 3, md: 5 }}>
                      <Typography
                        variant="h4"
                        color={textColor}
                        sx={{ fontWeight: 500 }}
                      >
                        Additonal Help
                      </Typography>
                      <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                        <FooterLink
                          component={RouterLink}
                          to="/faqs"
                          underline="none"
                        >
                          Faqs
                        </FooterLink>
                        <FooterLink
                          component={RouterLink}
                          to="/privacy-policy"
                          underline="none"
                        >
                          Privacy Policy
                        </FooterLink>
                        <FooterLink
                          component={RouterLink}
                          to="/refund-policy"
                          underline="none"
                        >
                          Refund Policy
                        </FooterLink>
                        <FooterLink
                          component={RouterLink}
                          to="/terms-and-conditions"
                          underline="none"
                        >
                          Terms & Conditions
                        </FooterLink>
                      </Stack>
                    </Stack>
                  </Grid>

                  {/* Get In Touch with Icons */}
                  <Grid item xs={6} sm={4}>
                    <Stack spacing={{ xs: 3, md: 5 }}>
                      <Typography
                        variant="h4"
                        color={textColor}
                        sx={{ fontWeight: 500 }}
                      >
                        Get In Touch
                      </Typography>
                      <Stack spacing={{ xs: 1.5, md: 2.5 }}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <LocationOnIcon sx={{ color: '#fff' }} />
                          <FooterLink
                            href="https://maps.app.goo.gl/dX5tkUhgd6kEBpLA7"
                            target="_blank"
                            underline="none"
                          >
                            221, Patliputra Colony, Near Patliputra Park,
                            Patna-13 (Bihar)
                          </FooterLink>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <CallIcon sx={{ color: '#fff' }} />
                          <FooterLink
                            href="tel:9264484444"
                            target="_blank"
                            underline="none"
                          >
                            9264484444
                          </FooterLink>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <EmailIcon sx={{ color: '#fff' }} />
                          <FooterLink
                            href="mailto:info@residygroup.com"
                            target="_blank"
                            underline="none"
                          >
                            info@residygroup.com
                          </FooterLink>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <FloatingConsultForm />

      {/* Bottom Section */}
      <Box sx={{ bgcolor: 'dark.dark', py: { xs: 3, sm: 1.5 } }}>
        <Container>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            alignItems="center"
            justifyContent="space-between"
            spacing={{ xs: 1.5, sm: 1, md: 3 }}
          >
            <Typography color="text.secondary">
              © ResidyHomeDecor is managed by{' '}
              <Link
                href="https://webspidy.in/"
                target="_blank"
                underline="hover"
              >
                Webspidy
              </Link>
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              spacing={{ xs: 3, sm: 1.5, md: 2 }}
            >
              <IconButton
                size="small"
                component={Link}
                href=""
                target="_blank"
                aria-label="facebook"
              >
                <FacebookIcon
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: 'primary.main' },
                  }}
                />
              </IconButton>
              <IconButton
                size="small"
                component={Link}
                href=""
                target="_blank"
                aria-label="instagram"
              >
                <InstagramIcon
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: 'primary.main' },
                  }}
                />
              </IconButton>
              <IconButton
                size="small"
                component={Link}
                href=""
                target="_blank"
                aria-label="x"
              >
                <TwitterIcon
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: 'primary.main' },
                  }}
                />
              </IconButton>
              <IconButton
                size="small"
                component={Link}
                href=""
                target="_blank"
                aria-label="youtube"
              >
                <YouTubeIcon
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: 'error.main' },
                  }}
                />
              </IconButton>
              <IconButton
                size="small"
                component={Link}
                href=""
                target="_blank"
                aria-label="linkedin"
              >
                <LinkedInIcon
                  sx={{
                    color: 'text.secondary',
                    '&:hover': { color: 'primary.main' },
                  }}
                />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default FooterSection;
