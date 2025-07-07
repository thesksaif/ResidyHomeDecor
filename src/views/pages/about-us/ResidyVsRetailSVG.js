import React from 'react';
import PropTypes from 'prop-types';

const ResidyVsRetailSVG = ({ style }) => (
  <svg
    viewBox="0 0 1100 420"
    width="100%"
    height="auto"
    style={style}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background separation */}
    <rect x="0" y="0" width="1100" height="420" rx="36" fill="#fff" />
    <line x1="550" y1="30" x2="550" y2="390" stroke="#f0f0f0" strokeWidth="4" />

    {/* Residy Experience Title */}
    <text
      x="120"
      y="50"
      fontSize="28"
      fontWeight="bold"
      fill="#dc4545"
      fontFamily="Poppins, sans-serif"
    >
      RESIDY EXPERIENCE
    </text>
    {/* Traditional Retail Title */}
    <text
      x="700"
      y="50"
      fontSize="28"
      fontWeight="bold"
      fill="#b0b0b0"
      fontFamily="Poppins, sans-serif"
    >
      TRADITIONAL RETAIL
    </text>

    {/* Residy Flow (curved) */}
    <path
      d="M180 120 Q 220 200 180 320"
      stroke="#dc4545"
      strokeWidth="5"
      fill="none"
      markerEnd="url(#arrowRed)"
    />
    {/* Residy Store Icon */}
    <rect
      x="120"
      y="100"
      width="60"
      height="50"
      rx="8"
      fill="#fff"
      stroke="#dc4545"
      strokeWidth="3"
    />
    <rect x="135" y="120" width="30" height="15" rx="3" fill="#f8d7da" />
    <rect x="130" y="110" width="10" height="10" rx="2" fill="#dc4545" />
    <rect x="160" y="110" width="10" height="10" rx="2" fill="#dc4545" />
    {/* Residy Price */}
    <rect x="170" y="200" width="30" height="18" rx="4" fill="#dc4545" />
    <text
      x="185"
      y="214"
      fontSize="15"
      fontWeight="bold"
      fill="#fff"
      textAnchor="middle"
      fontFamily="Poppins, sans-serif"
    >
      $
    </text>
    <text
      x="220"
      y="210"
      fontSize="18"
      fill="#dc4545"
      fontWeight="bold"
      fontFamily="Poppins, sans-serif"
    >
      Residy Price
    </text>
    {/* Happy Customer Icon */}
    <circle
      cx="180"
      cy="340"
      r="28"
      fill="#fff"
      stroke="#dc4545"
      strokeWidth="3"
    />
    <ellipse cx="180" cy="340" rx="18" ry="12" fill="#f8d7da" />
    <path
      d="M170 335 Q180 350 190 335"
      stroke="#dc4545"
      strokeWidth="2.5"
      fill="none"
    />
    <circle cx="172" cy="338" r="2.5" fill="#dc4545" />
    <circle cx="188" cy="338" r="2.5" fill="#dc4545" />
    <text
      x="180"
      y="380"
      fontSize="16"
      fill="#dc4545"
      fontWeight="bold"
      textAnchor="middle"
      fontFamily="Poppins, sans-serif"
    >
      You
    </text>

    {/* Traditional Retail Flow (zig-zag) */}
    <polyline
      points="650,120 720,160 670,200 740,240 690,280 760,320"
      fill="none"
      stroke="#b0b0b0"
      strokeWidth="4"
      markerEnd="url(#arrowGray)"
    />
    {/* Manufacturer Icon */}
    <rect
      x="630"
      y="100"
      width="40"
      height="30"
      rx="6"
      fill="#fff"
      stroke="#b0b0b0"
      strokeWidth="2"
    />
    <rect x="640" y="110" width="20" height="10" rx="2" fill="#b0b0b0" />
    <text
      x="650"
      y="105"
      fontSize="12"
      fill="#b0b0b0"
      fontFamily="Poppins, sans-serif"
    >
      M
    </text>
    <text
      x="630"
      y="95"
      fontSize="15"
      fill="#b0b0b0"
      fontWeight="bold"
      fontFamily="Poppins, sans-serif"
    >
      Manufacturer
    </text>
    {/* Export Agent Icon (ship) */}
    <rect
      x="710"
      y="150"
      width="40"
      height="18"
      rx="5"
      fill="#fff"
      stroke="#b0b0b0"
      strokeWidth="2"
    />
    <rect x="720" y="160" width="20" height="6" rx="2" fill="#b0b0b0" />
    <polygon points="750,168 755,168 752,160" fill="#b0b0b0" />
    <text
      x="720"
      y="145"
      fontSize="13"
      fill="#b0b0b0"
      fontFamily="Poppins, sans-serif"
    >
      Export
    </text>
    {/* Wholesale Showroom Icon */}
    <rect
      x="650"
      y="190"
      width="40"
      height="30"
      rx="6"
      fill="#fff"
      stroke="#b0b0b0"
      strokeWidth="2"
    />
    <circle cx="670" cy="205" r="7" fill="#b0b0b0" />
    <text
      x="660"
      y="185"
      fontSize="12"
      fill="#b0b0b0"
      fontFamily="Poppins, sans-serif"
    >
      Showroom
    </text>
    {/* Wholesale Warehouse Icon */}
    <rect
      x="730"
      y="230"
      width="40"
      height="30"
      rx="6"
      fill="#fff"
      stroke="#b0b0b0"
      strokeWidth="2"
    />
    <rect x="740" y="245" width="20" height="10" rx="2" fill="#b0b0b0" />
    <text
      x="735"
      y="225"
      fontSize="12"
      fill="#b0b0b0"
      fontFamily="Poppins, sans-serif"
    >
      Warehouse
    </text>
    {/* Retail Store Icon */}
    <rect
      x="680"
      y="270"
      width="40"
      height="30"
      rx="6"
      fill="#fff"
      stroke="#b0b0b0"
      strokeWidth="2"
    />
    <rect x="690" y="285" width="20" height="10" rx="2" fill="#b0b0b0" />
    <text
      x="685"
      y="265"
      fontSize="12"
      fill="#b0b0b0"
      fontFamily="Poppins, sans-serif"
    >
      Retail
    </text>
    {/* Retail Warehouse Icon */}
    <rect
      x="750"
      y="310"
      width="40"
      height="30"
      rx="6"
      fill="#fff"
      stroke="#b0b0b0"
      strokeWidth="2"
    />
    <rect x="760" y="325" width="20" height="10" rx="2" fill="#b0b0b0" />
    <text
      x="755"
      y="305"
      fontSize="12"
      fill="#b0b0b0"
      fontFamily="Poppins, sans-serif"
    >
      Warehouse
    </text>
    {/* Confused Customer Icon */}
    <circle
      cx="800"
      cy="370"
      r="22"
      fill="#fff"
      stroke="#b0b0b0"
      strokeWidth="2"
    />
    <ellipse cx="800" cy="370" rx="14" ry="8" fill="#e0e0e0" />
    <path
      d="M790 368 Q800 380 810 368"
      stroke="#b0b0b0"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="793" cy="372" r="2" fill="#b0b0b0" />
    <circle cx="807" cy="372" r="2" fill="#b0b0b0" />
    <text
      x="800"
      y="400"
      fontSize="16"
      fill="#b0b0b0"
      fontWeight="bold"
      textAnchor="middle"
      fontFamily="Poppins, sans-serif"
    >
      You?
    </text>

    {/* Price Comparison */}
    <rect x="320" y="220" width="60" height="22" rx="6" fill="#dc4545" />
    <text
      x="350"
      y="237"
      fontSize="16"
      fill="#fff"
      fontWeight="bold"
      textAnchor="middle"
      fontFamily="Poppins, sans-serif"
    >
      Residy Price
    </text>
    <rect x="900" y="220" width="60" height="22" rx="6" fill="#b0b0b0" />
    <text
      x="930"
      y="237"
      fontSize="16"
      fill="#fff"
      fontWeight="bold"
      textAnchor="middle"
      fontFamily="Poppins, sans-serif"
    >
      Retail Price
    </text>

    {/* Arrow Markers */}
    <defs>
      <marker
        id="arrowRed"
        markerWidth="10"
        markerHeight="10"
        refX="5"
        refY="5"
        orient="auto"
        markerUnits="strokeWidth"
      >
        <path d="M0,0 L10,5 L0,10 Z" fill="#dc4545" />
      </marker>
      <marker
        id="arrowGray"
        markerWidth="10"
        markerHeight="10"
        refX="5"
        refY="5"
        orient="auto"
        markerUnits="strokeWidth"
      >
        <path d="M0,0 L10,5 L0,10 Z" fill="#b0b0b0" />
      </marker>
    </defs>
  </svg>
);

ResidyVsRetailSVG.propTypes = {
  style: PropTypes.object,
};

export default ResidyVsRetailSVG;
