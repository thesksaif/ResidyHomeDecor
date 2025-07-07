import PropTypes from 'prop-types';
import React from 'react';

// ==============================|| LIVE CUSTOMIZATION ||============================== //

function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number,
  index: PropTypes.number,
};

const Customization = () => {
  return (
    <>
      {/* Removed Live Customize floating button for visitors */}
      {/* The rest of your customization drawer/components can remain here if needed */}
    </>
  );
};

export default Customization;
