import React from 'react';
import '../Services.css';

const ServiceCard = ({ icon, title }) => {
    return (
        <div className="service-card">
            <img src={icon} alt={title} className="service-icon" />
            <p>{title}</p>
        </div>
    );
};

export default ServiceCard;
