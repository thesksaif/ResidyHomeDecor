import { Fade, Slide } from '@mui/material';
import PropTypes from 'prop-types';

const SectionHeader = ({
  heading,
  subheading,
  headingColor = '#dc3545',
  subheadingColor = '#6b7280',
  sx = {},
}) => {
  return (
    <div
      style={{
        textAlign: 'center',
        marginBottom: '3.5rem',
        marginTop: '3.5rem',
        padding: '2.5rem 0',
        ...sx,
      }}
    >
      <Fade in timeout={900}>
        <div>
          <Slide in direction="up" timeout={900}>
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                margin: 0,
                color: headingColor,
                letterSpacing: '-1.5px',
                textShadow: '0 2px 16px #ffeaea',
                fontFamily: 'Poppins, sans-serif',
                lineHeight: 0.8,
              }}
            >
              {heading}
            </h2>
          </Slide>
          <Fade in timeout={1400}>
            <p
              style={{
                color: subheadingColor,
                fontSize: '1.1rem',
                marginTop: '1.5rem',
                marginBottom: 0,
                fontWeight: 300,
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              {subheading}
            </p>
          </Fade>
        </div>
      </Fade>
    </div>
  );
};

SectionHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string,
  headingColor: PropTypes.string,
  subheadingColor: PropTypes.string,
  sx: PropTypes.object,
};

export default SectionHeader;
