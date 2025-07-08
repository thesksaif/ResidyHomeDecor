import React from 'react';
import '../css/SectionComponent.css';

const SectionComponent = ({ title }) => {
    return (
        <div className="section-head">
            <div className="section-overlay">
                <div className="section-title">{title}</div>
            </div>
        </div>
    );
};

export default SectionComponent;
