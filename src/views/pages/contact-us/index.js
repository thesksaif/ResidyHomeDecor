// Material-UI imports
import { styled } from '@mui/material/styles';

// Project imports
import ContactCard from './ContactCard';
import AppBar from 'ui-component/extended/AppBar';
import FooterSection from '../landing/FooterSection';
import banner from 'assets/images/contact/banner2.jpg';

// Styled Components
const BannerWrapper = styled('div')(() => ({
    position: 'relative',
    width: '100%',
    height: '330px', // Match "Our Services" banner height
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center'
}));

const BannerText = styled('h1')(() => ({
    fontSize: '3rem', // Match "Our Services" font size
    fontWeight: 'bold',
    zIndex: 1,
    marginTop: '108px'
}));

// const Overlay = styled('div')(() => ({
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.4)' // Consistent overlay effect
// }));

const SectionWrapper = styled('div')(({ theme }) => ({
    paddingTop: 50,
    marginTop: 0, // Remove unnecessary large margin
    backgroundColor: theme.palette.mode === 'dark' 
        ? theme.palette.background.default 
        : theme.palette.grey[900]
}));

// ============================|| CONTACT US MAIN ||============================ //

const ContactUsPage = () => {
    return (
        <>
            {/* Header */}
            <AppBar />

            {/* Banner Section */}
            <BannerWrapper>
                {/* <Overlay /> */}
                <BannerText>Contact Us</BannerText>
            </BannerWrapper>

            {/* Contact Card */}
            <ContactCard />

            {/* Footer Section */}
            <SectionWrapper>
                <FooterSection />
            </SectionWrapper>
        </>
    );
};

export default ContactUsPage;

