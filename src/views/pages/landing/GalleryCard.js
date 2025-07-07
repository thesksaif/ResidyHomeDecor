import React from 'react';
import PropTypes from 'prop-types';
import './Gallery.css';

const GalleryCard = ({ image, title, onClick }) => {
  return (
    <button
      type="button"
      className="gallery-card"
      onClick={onClick}
      aria-label={title}
    >
      <img src={image} alt={title} className="gallery-image" />
      <h3 className="gallery-title">{title}</h3>
    </button>
  );
};

GalleryCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default GalleryCard;
