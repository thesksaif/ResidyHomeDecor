import React from 'react';
import PropTypes from 'prop-types';
import './Gallery.css';

const GalleryCard = ({ image, title }) => {
    return (
        <div className="gallery-card">
            <img src={image} alt={title} className="gallery-image" />
            <h3 className="gallery-title">{title}</h3>
        </div>
    );
};

GalleryCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default GalleryCard;

