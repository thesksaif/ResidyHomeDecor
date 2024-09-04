// material-ui
import { styled } from '@mui/material/styles';

// project imports
import AppBar from 'ui-component/extended/AppBar';

// assets
// import headerBackground from 'assets/images/landing/bg-header.jpg';
import FooterSection from '../landing/FooterSection';
// import RefundPolicy from './RefundPolicy';

import { Grid } from '@mui/material';

// project imports
// import BasicWizard from './BasicWizard';
import ValidationWizard from './form';
import { gridSpacing } from 'store/constant';

const HeaderWrapper = styled('div')(({ theme }) => ({
    overflowX: 'hidden',
    overflowY: 'clip',
    background:
        theme.palette.mode === 'dark'
            ? theme.palette.background.default
            : `linear-gradient(360deg, ${theme.palette.grey[100]} 1.09%, ${theme.palette.background.paper} 100%)`,
    [theme.breakpoints.down('md')]: {}
}));

const SectionWrapper = styled('div')(({ theme }) => ({
    paddingTop: 100,
    marginTop: 365,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.grey[900]
}));

// ============================|| CONTACT US MAIN ||============================ //

const RefundPage = () => {
    return (
        <>
            <HeaderWrapper>
                <AppBar />
                <Grid container spacing={gridSpacing} justifyContent="center">
                    {/* <Grid item xs={12} md={9} lg={7}>
                        <BasicWizard />
                    </Grid> */}
                    <Grid item xs={12} md={9} lg={7}>
                        <ValidationWizard />
                    </Grid>
                </Grid>
                {/* <RefundPolicy /> */}
            </HeaderWrapper>
            <SectionWrapper>
                <FooterSection />
            </SectionWrapper>
        </>
    );
};

export default RefundPage;
