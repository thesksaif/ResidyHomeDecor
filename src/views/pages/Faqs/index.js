// material-ui
import { styled } from '@mui/material/styles';

// project imports
import AppBar from 'ui-component/extended/AppBar';

// assets
import headerBackground from 'assets/images/landing/bg-header.jpg';
import FooterSection from '../landing/FooterSection';
import Faqs from './Faqs';

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

const SectionWrapper = styled('div')(({ theme }) => ({
  paddingTop: 100,
  marginTop: 365,
  backgroundColor:
    theme.palette.mode === 'dark'
      ? theme.palette.background.default
      : theme.palette.grey[900],
}));

// ============================|| CONTACT US MAIN ||============================ //

const FaqsPage = () => {
  return (
    <>
      <HeaderWrapper>
        <AppBar />
        <Faqs />
      </HeaderWrapper>
      <SectionWrapper>
        <FooterSection />
      </SectionWrapper>
    </>
  );
};

export default FaqsPage;
