// src/Components/InteriorCard.js
import React from 'react';
import '../InteriorCard.css';

const InteriorCard = ({ image, title, description }) => {
    return (
        <div className="interior-card">
            <img src={image} alt={title} className="interior-card-image" />
            <div className="interior-card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <button className="interior-card-button">➔</button>
            </div>
        </div>
    );
};

export default InteriorCard;
