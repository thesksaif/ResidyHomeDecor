import React from 'react';

// Material-UI imports
import { styled } from '@mui/material/styles';

// Project imports
import AppBar from 'ui-component/extended/AppBar';
import CardSection from 'views/pages/landing/CardSection';
import FooterSection from '../landing/FooterSection';

// Assets
import mission from 'assets/images/about/mission.jpg';
import story from 'assets/images/about/story.webp';

// Styled Components
const SectionWrapper = styled('div')(({ theme }) => ({
    paddingTop: 100,
    marginTop: 80,
    marginBottom: -60,
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.grey[900]
}));

const BannerWrapper = styled('div')(() => ({
    position: 'relative',
    width: '100%',
    height: '300px',
    backgroundImage: `url('https://via.placeholder.com/1920x300.png?text=Your+Banner+Image')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
}));

const BannerText = styled('h1')(() => ({
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 1
}));

const Overlay = styled('div')(() => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
}));

const AboutUs = () => {
    return (
        <>
            {/* Header */}
            <AppBar />

            {/* Full-Width Banner */}
            <BannerWrapper>
                <Overlay />
                <BannerText>About Us</BannerText>
            </BannerWrapper>

            {/* Main Content Wrapper */}
            <div style={{ padding: '40px 0', width: '100%', maxWidth: '1400px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
                {/* About Us Section */}
                <section style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <h1>About Resdiy Home Decor</h1>
                    <p>
                        Welcome to Resdiy Home Decor, your one-stop solution for unique and affordable home decor items. We are committed to
                        enhancing the beauty and comfort of your home with designs that inspire and delight. Whether you are looking to
                        refresh a single room or transform your entire living space, our diverse range of products offers something for
                        every style and budget.
                    </p>
                </section>

                {/* Mission Section */}
                <section
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '50px', flexWrap: 'wrap' }}
                >
                    <div style={{ flex: '1 1 50%', padding: '20px', textAlign: 'center' }}>
                        <img src={mission} alt="Our Mission" style={{ width: '100%', maxWidth: '500px', borderRadius: '10px' }} />
                    </div>
                    <div style={{ flex: '1 1 50%', padding: '20px' }}>
                        <h2>Our Mission: Bringing Unique Style to Every Home</h2>
                        <p>
                            At Resdiy Home Decor, our mission is to provide high-quality, stylish, and affordable home decor that inspires
                            and transforms your space. We believe every home deserves a touch of elegance and personality, and we are
                            dedicated to making that vision accessible to all.
                        </p>
                    </div>
                </section>

                {/* Story Section */}
                <section
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '100px', flexWrap: 'wrap' }}
                >
                    <div style={{ flex: '1 1 50%', padding: '20px' }}>
                        <h2>Our Story</h2>
                        <p>
                            Founded with a passion for design and a commitment to quality, Resdiy Home Decor has grown from a small startup
                            to a trusted name in home decor. We are inspired by the belief that stylish, affordable decor should be
                            accessible to everyone. Over the years, we’ve expanded our range to include products that suit every style.
                        </p>
                    </div>
                    <div style={{ flex: '1 1 50%', padding: '20px', textAlign: 'center' }}>
                        <img src={story} alt="Our Story" style={{ width: '100%', maxWidth: '500px', borderRadius: '10px' }} />
                    </div>
                </section>

                {/* Awards Section */}
                <section style={{ textAlign: 'center', marginBottom: '50px', marginTop: '60px' }}>
                    <h2>Awards & Recognition</h2>
                    <p>Recognized for excellence in customer satisfaction and design innovation.</p>
                </section>

                {/* Card Section */}
                <CardSection />

                {/* Footer */}
                <SectionWrapper>
                    <FooterSection />
                </SectionWrapper>
            </div>
        </>
    );
};

export default AboutUs;
