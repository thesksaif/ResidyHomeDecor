// src/Components/InteriorSection.js
import React from "react";
import InteriorCard from "./InteriorCard";
import "../InteriorSection.css";

// Import your images here
import kitchenImage from "../assets/images/interiorType/kitchen.jpg";
import livingRoomImage from "../assets/images/interiorType/living-room.jpg";
import bedroomImage from "../assets/images/interiorType/bedroom.jpg";
import renovationImage from "../assets/images/interiorType/renovation.jpg";

const services = [
  {
    image: kitchenImage,
    title: "Modular Interiors",
    description: "Functional kitchen, wardrobe and storage",
  },
  {
    image: livingRoomImage,
    title: "Full Home Interiors",
    description: "Turnkey interior solutions for your home",
  },
  {
    image: bedroomImage,
    title: "Luxury Interiors",
    description: "Tailored interiors that redefine elegance",
  },
  {
    image: renovationImage,
    title: "Renovations",
    description: "Expert solutions to upgrade your home",
  },
];

const InteriorSection = () => {
  return (
    <div className="interior-section">
      <h1>One-stop shop for all things interiors</h1>
      <p>
        Be it end-to-end interiors, renovation or modular solutions, we have it
        all for your home or office. With a wide range of furniture & decor, we
        have your back from start to finish.
      </p>
      <div className="interior-cards">
        {services.map((service, index) => (
          <InteriorCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default InteriorSection;
