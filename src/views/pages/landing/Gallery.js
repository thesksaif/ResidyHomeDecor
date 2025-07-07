import React, { useState } from 'react';
import TabNavigation from './TabNavigation';
import GalleryCard from './GalleryCard';
import './Gallery.css';
import SectionHeader from 'ui-component/SectionHeader';

// Import images...
import livingRoom1 from '../../../assets/images/gallery/living-1.jpg';
import livingRoom2 from '../../../assets/images/gallery/living-2.jpg';
import livingRoom3 from '../../../assets/images/gallery/living-3.jpg';
import livingRoom4 from '../../../assets/images/gallery/living-4.jpg';
import livingRoom5 from '../../../assets/images/gallery/living-5.jpg';
import livingRoom6 from '../../../assets/images/gallery/living-6.jpg';

import kitchen1 from '../../../assets/images/gallery/kitchen-1.jpg';
import kitchen2 from '../../../assets/images/gallery/kitchen-2.jpg';
import kitchen3 from '../../../assets/images/gallery/kitchen-3.jpg';
import kitchen4 from '../../../assets/images/gallery/kitchen-4.jpg';
import kitchen5 from '../../../assets/images/gallery/kitchen-5.jpg';
import kitchen6 from '../../../assets/images/gallery/kitchen-6.jpg';

import wardrobe1 from '../../../assets/images/gallery/wardrobe-1.jpg';
import wardrobe2 from '../../../assets/images/gallery/wardrobe-2.jpg';
import wardrobe3 from '../../../assets/images/gallery/wardrobe03.jpg';
import wardrobe4 from '../../../assets/images/gallery/wardrobe-4.jpg';
import wardrobe5 from '../../../assets/images/gallery/wardrobe-5.jpg';
import wardrobe6 from '../../../assets/images/gallery/wardrobe-6.jpg';

import masterBedroom1 from '../../../assets/images/gallery/master-bedroom-1.jpg';
import masterBedroom2 from '../../../assets/images/gallery/master-bedroom-2.jpg';
import masterBedroom3 from '../../../assets/images/gallery/master-bedroom-3.jpg';
import masterBedroom4 from '../../../assets/images/gallery/master-bedroom-4.jpg';
import masterBedroom5 from '../../../assets/images/gallery/master-bedroom-5.jpg';
import masterBedroom6 from '../../../assets/images/gallery/master-bedroom-6.jpg';

import kidsRoom1 from '../../../assets/images/gallery/kids-room-1.jpg';
import kidsRoom2 from '../../../assets/images/gallery/kids-room-2.jpg';
import kidsRoom3 from '../../../assets/images/gallery/kids-room-3.jpg';
import kidsRoom4 from '../../../assets/images/gallery/kids-room-4.jpg';
import kidsRoom5 from '../../../assets/images/gallery/kids-room-5.jpg';
import kidsRoom6 from '../../../assets/images/gallery/kids-room-6.jpg';

import kitchenWallTiles1 from '../../../assets/images/gallery/kitchen-wall-tiles-1.jpg';
import kitchenWallTiles2 from '../../../assets/images/gallery/kitchen-wall-tiles-2.jpg';

import kitchenFalseCeiling1 from '../../../assets/images/gallery/kitchen-false-ceiling-1.jpg';
import kitchenFalseCeiling2 from '../../../assets/images/gallery/kitchen-false-ceiling-2.jpg';

import balcony1 from '../../../assets/images/gallery/balcony-1.jpg';
import balcony2 from '../../../assets/images/gallery/balcony-2.jpg';

const categories = [
  'Living Room',
  'Modular Kitchen',
  'Wardrobe',
  'Master Bedroom',
  'Kids Room',
  'Kitchen Wall Tiles',
  'Kitchen False Ceiling',
  'Balcony',
];

const services = {
  // Your services object with categories and images...
  'Living Room': [
    { image: livingRoom1, title: 'Modern Cosy Living Room' },
    { image: livingRoom2, title: 'Opulent Art-deco Living Room' },
    { image: livingRoom3, title: 'Opulent Art-deco Living Room' },
    { image: livingRoom4, title: 'Opulent Art-deco Living Room' },
    { image: livingRoom5, title: 'Opulent Art-deco Living Room' },
    { image: livingRoom6, title: 'Opulent Art-deco Living Room' },
  ],
  'Modular Kitchen': [
    { image: kitchen1, title: 'Modern Kitchen' },
    { image: kitchen2, title: 'Opulent Kitchen' },
    { image: kitchen3, title: 'Opulent Kitchen' },
    { image: kitchen4, title: 'Opulent Kitchen' },
    { image: kitchen5, title: 'Opulent Kitchen' },
    { image: kitchen6, title: 'Opulent Kitchen' },
  ],
  Wardrobe: [
    { image: wardrobe1, title: 'Spacious Wardrobe' },
    { image: wardrobe2, title: 'Elegant Wardrobe' },
    { image: wardrobe3, title: 'Elegant Wardrobe' },
    { image: wardrobe4, title: 'Elegant Wardrobe' },
    { image: wardrobe5, title: 'Elegant Wardrobe' },
    { image: wardrobe6, title: 'Elegant Wardrobe' },
  ],
  'Master Bedroom': [
    { image: masterBedroom1, title: 'Luxurious Master Bedroom' },
    { image: masterBedroom2, title: 'Comfortable Master Bedroom' },
    { image: masterBedroom3, title: 'Comfortable Master Bedroom' },
    { image: masterBedroom4, title: 'Comfortable Master Bedroom' },
    { image: masterBedroom5, title: 'Comfortable Master Bedroom' },
    { image: masterBedroom6, title: 'Comfortable Master Bedroom' },
  ],

  'Kids Room': [
    { image: kidsRoom1, title: 'Fun Kids Room' },
    { image: kidsRoom2, title: 'Colorful Kids Room' },
    { image: kidsRoom3, title: 'Fun Kids Room' },
    { image: kidsRoom4, title: 'Fun Kids Room' },
    { image: kidsRoom5, title: 'Fun Kids Room' },
    { image: kidsRoom6, title: 'Fun Kids Room' },
  ],
  'Kitchen Wall Tiles': [
    { image: kitchenWallTiles1, title: 'Stylish Kitchen Wall Tiles' },
    { image: kitchenWallTiles2, title: 'Modern Kitchen Wall Tiles' },
  ],
  'Kitchen False Ceiling': [
    { image: kitchenFalseCeiling1, title: 'Elegant Kitchen False Ceiling' },
    { image: kitchenFalseCeiling2, title: 'Modern Kitchen False Ceiling' },
  ],
  Balcony: [
    { image: balcony1, title: 'Cozy Balcony' },
    { image: balcony2, title: 'Spacious Balcony' },
  ],
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('Living Room');
  const [lightbox, setLightbox] = useState({
    open: false,
    image: '',
    title: '',
  });
  const categoryServices = services[selectedCategory] || [];

  const openLightbox = (image, title) =>
    setLightbox({ open: true, image, title });
  const closeLightbox = () =>
    setLightbox({ open: false, image: '', title: '' });

  return (
    <div className="services-container">
      <SectionHeader
        heading="Design Ideas for Every Space"
        subheading="Because every corner holds a unique design potential."
      />
      <TabNavigation
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="services-grid">
        {categoryServices.length > 0 ? (
          categoryServices.map((service, index) => (
            <GalleryCard
              key={index}
              image={service.image}
              title={service.title}
              onClick={() => openLightbox(service.image, service.title)}
            />
          ))
        ) : (
          <p>No designs available for this category.</p>
        )}
      </div>
      <button className="consultation-button themed-button">
        Explore More Designs
      </button>

      {/* Lightbox Modal */}
      {lightbox.open && (
        <div className="gallery-lightbox" role="dialog" aria-modal="true">
          <button
            type="button"
            aria-label="Close lightbox"
            className="gallery-lightbox-backdrop"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'transparent',
              border: 'none',
              padding: 0,
              margin: 0,
              zIndex: 1,
              cursor: 'pointer',
            }}
            onClick={closeLightbox}
            tabIndex={-1}
          />
          <div
            className="gallery-lightbox-content"
            style={{ position: 'relative', zIndex: 2 }}
          >
            <button
              className="gallery-lightbox-close themed-button"
              onClick={closeLightbox}
              aria-label="Close image preview"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
                  e.preventDefault();
                  closeLightbox();
                }
              }}
            >
              &times;
            </button>
            <img
              src={lightbox.image}
              alt={lightbox.title}
              className="gallery-lightbox-image"
            />
            <div className="gallery-lightbox-title">{lightbox.title}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
