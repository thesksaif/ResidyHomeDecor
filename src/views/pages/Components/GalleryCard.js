import React from 'react';
import '../GalleryCard.css';

const GalleryCard = ({ image, title }) => {
    return (
        <div className="gallery-card">
            <img src={image} alt={title} className="gallery-image" />
            <h3 className="gallery-title">{title}</h3>
        </div>
    );
};

export default GalleryCard;
