// material-ui
import { useTheme, styled } from '@mui/material/styles';

// project imports
import AppBar from 'ui-component/extended/AppBar';
import HeaderSection from './HeaderSection';
import CardSection from './CardSection';
import FeatureSection from './FeatureSection';
import FrameworkSection from './FrameworkSection';
import FooterSection from './FooterSection';
import CustomizeSection from './CustomizeSection';
import EstimateSection from './EstimateSection';
import StartupProjectSection from './StartupProjectSection';
import Gallery from './Gallery';
import InspirationSection from './InspirationSection';
import TestimonialSlider from './TestimonialSlider';
import FloatingConsultForm from './FloatingConsultForm';
// import SimpleModal from './SimpleModal';

// custom stlye
const HeaderWrapper = styled('div')(({ theme }) => ({
  overflowX: 'hidden',
  overflowY: 'clip',
  background:
    theme.palette.mode === 'dark'
      ? theme.palette.background.default
      : `linear-gradient(360deg, ${theme.palette.grey[100]} 1.09%, ${theme.palette.background.paper} 100%)`,
  [theme.breakpoints.down('md')]: {},
}));

const SectionWrapper = styled('div')({
  paddingTop: 100,
  paddingBottom: 100,
});

// =============================|| LANDING MAIN ||============================= //

const Landing = () => {
  const theme = useTheme();

  return (
    <>
      {/* 1. header and hero section */}
      <HeaderWrapper id="home">
        <AppBar />
        <HeaderSection />
      </HeaderWrapper>

      {/* 2. card section */}
      <SectionWrapper
        sx={{
          bgcolor:
            theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default',
        }}
      >
        <CardSection />
      </SectionWrapper>

      {/* Inspiration section */}
      <SectionWrapper
        sx={{
          bgcolor:
            theme.palette.mode === 'dark' ? 'background.default' : 'grey.100',
        }}
      >
        <InspirationSection />
      </SectionWrapper>

      {/* 4. developer experience section */}
      <SectionWrapper
        sx={{
          bgcolor:
            theme.palette.mode === 'dark' ? 'background.default' : 'grey.100',
        }}
      >
        <CustomizeSection />
      </SectionWrapper>

      {/* 3. about section */}
      <SectionWrapper
        sx={{
          bgcolor:
            theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default',
        }}
      >
        <Gallery />
      </SectionWrapper>

      {/* 3. about section */}
      <SectionWrapper
        sx={{
          bgcolor:
            theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default',
        }}
      >
        <FeatureSection />
      </SectionWrapper>

      {/* 4. Apps */}
      <SectionWrapper
        sx={{
          bgcolor:
            theme.palette.mode === 'light' ? 'background.default' : 'grey.100',
        }}
      >
        <EstimateSection />
      </SectionWrapper>

      {/* 5. people section */}
      <SectionWrapper
        sx={{
          bgcolor:
            theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default',
        }}
      >
        <TestimonialSlider />
      </SectionWrapper>

      {/* 6. startup section */}
      <SectionWrapper sx={{ py: 0 }}>
        <StartupProjectSection />
      </SectionWrapper>

      {/* 9. framework section */}
      <SectionWrapper
        sx={{
          bgcolor:
            theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default',
        }}
      >
        <FrameworkSection />
      </SectionWrapper>

      {/* <SectionWrapper sx={{ bgcolor: theme.palette.mode === 'dark' ? 'dark.dark' : 'background.default' }}>
                <SimpleModal />
            </SectionWrapper> */}

      {/* 10. footer section */}
      <SectionWrapper
        sx={{
          bgcolor:
            theme.palette.mode === 'dark' ? 'background.default' : 'dark.900',
          pb: 0,
        }}
      >
        <FooterSection />
      </SectionWrapper>

      <FloatingConsultForm />
    </>
  );
};

export default Landing;
