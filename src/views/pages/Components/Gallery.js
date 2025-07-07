import React, { useState } from 'react';
import TabNavigation from './TabNavigation';
import GalleryCard from './GalleryCard';
import '../Gallery.css';

// Import your images here
import livingRoom1 from '../assets/images/gallery/living-room-1.jpg';
import livingRoom2 from '../assets/images/gallery/living-room-2.jpg';
import livingRoom3 from '../assets/images/gallery/living-room-3.jpg';
import livingRoom4 from '../assets/images/gallery/living-4.jpg';
import livingRoom5 from '../assets/images/gallery/living-5.jpg';
import livingRoom6 from '../assets/images/gallery/living-6.jpg';
import kitchen1 from '../assets/images/gallery/kitchen-1.jpg';
import kitchen2 from '../assets/images/gallery/kitchen-2.jpg';
import kitchen3 from '../assets/images/gallery/kitchen-3.jpg';
import kitchen4 from '../assets/images/gallery/kitchen-4.jpg';
import kitchen5 from '../assets/images/gallery/kitchen-5.jpg';
import kitchen6 from '../assets/images/gallery/kitchen-6.jpg';
import kitchen7 from '../assets/images/gallery/kitchen-7.jpg';
import wardrobe1 from '../assets/images/gallery/wardrobe-1.jpg';
import wardrobe2 from '../assets/images/gallery/wardrobe-2.jpg';
import wardrobe3 from '../assets/images/gallery/wardrobe03.jpg';
import wardrobe4 from '../assets/images/gallery/wardrobe-4.jpg';
import wardrobe5 from '../assets/images/gallery/wardrobe-5.jpg';
import wardrobe6 from '../assets/images/gallery/wardrobe-6.jpg';
import wardrobe7 from '../assets/images/gallery/wardrobe-7.jpg';
import masterBedroom1 from '../assets/images/gallery/master-bedroom-1.jpg';
import masterBedroom2 from '../assets/images/gallery/master-bedroom-2.jpg';
import masterBedroom3 from '../assets/images/gallery/master-bedroom-3.jpg';
import masterBedroom4 from '../assets/images/gallery/master-bedroom-4.jpg';
import masterBedroom5 from '../assets/images/gallery/master-bedroom-5.jpg';
import masterBedroom6 from '../assets/images/gallery/master-bedroom-6.jpg';
import masterBedroom7 from '../assets/images/gallery/master-bedroom-7.jpg';
import kidsRoom1 from '../assets/images/gallery/kids-room-1.jpg';
import kidsRoom2 from '../assets/images/gallery/kids-room-2.jpg';
import kidsRoom3 from '../assets/images/gallery/kids-room-3.jpg';
import kidsRoom4 from '../assets/images/gallery/kids-room-4.jpg';
import kidsRoom5 from '../assets/images/gallery/kids-room-5.jpg';
import kidsRoom6 from '../assets/images/gallery/kids-room-6.jpg';
import kidsRoom7 from '../assets/images/gallery/kids-room-7.jpg';
import kitchenWallTiles1 from '../assets/images/gallery/kitchen-wall-tiles-1.jpg';
import kitchenWallTiles2 from '../assets/images/gallery/kitchen-wall-tiles-2.jpg';
import kitchenFalseCeiling1 from '../assets/images/gallery/kitchen-false-ceiling-1.jpg';
import kitchenFalseCeiling2 from '../assets/images/gallery/kitchen-false-ceiling-2.jpg';
import balcony1 from '../assets/images/gallery/balcony-1.jpg';
import balcony2 from '../assets/images/gallery/balcony-2.jpg';

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
    { image: kitchen7, title: 'Opulent Kitchen' },
  ],
  Wardrobe: [
    { image: wardrobe1, title: 'Spacious Wardrobe' },
    { image: wardrobe2, title: 'Elegant Wardrobe' },
    { image: wardrobe3, title: 'Elegant Wardrobe' },
    { image: wardrobe4, title: 'Elegant Wardrobe' },
    { image: wardrobe5, title: 'Elegant Wardrobe' },
    { image: wardrobe6, title: 'Elegant Wardrobe' },
    { image: wardrobe7, title: 'Elegant Wardrobe' },
  ],
  'Master Bedroom': [
    { image: masterBedroom1, title: 'Luxurious Master Bedroom' },
    { image: masterBedroom2, title: 'Comfortable Master Bedroom' },
    { image: masterBedroom3, title: 'Comfortable Master Bedroom' },
    { image: masterBedroom4, title: 'Comfortable Master Bedroom' },
    { image: masterBedroom5, title: 'Comfortable Master Bedroom' },
    { image: masterBedroom6, title: 'Comfortable Master Bedroom' },
    { image: masterBedroom7, title: 'Comfortable Master Bedroom' },
  ],
  'Kids Room': [
    { image: kidsRoom1, title: 'Fun Kids Room' },
    { image: kidsRoom2, title: 'Colorful Kids Room' },
    { image: kidsRoom3, title: 'Fun Kids Room' },
    { image: kidsRoom4, title: 'Fun Kids Room' },
    { image: kidsRoom5, title: 'Fun Kids Room' },
    { image: kidsRoom6, title: 'Fun Kids Room' },
    { image: kidsRoom7, title: 'Fun Kids Room' },
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

  return (
    <div className="services-container">
      <h2>Design Ideas for Every Space</h2>
      <p>Because every corner holds a unique design potential.</p>
      <TabNavigation
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="services-grid">
        {services[selectedCategory].map((service, index) => (
          <GalleryCard
            key={index}
            image={service.image}
            title={service.title}
          />
        ))}
      </div>
      <button className="consultation-button">Explore More Designs</button>
    </div>
  );
};

export default Gallery;
