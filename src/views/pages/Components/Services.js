import React from "react";
import ServiceCard from "./ServiceCard";
import "../Services.css";

// Import your icons here
import kitchenIcon from "../assets/icons/modular-Kitchen.svg";
import wardrobeIcon from "../assets/icons/wardrobes.svg";
import masterBedRoom from "../assets/icons/master-bedroom.svg";
import tvUnit from "../assets/icons/tv-units.svg";
import livingRoom from "../assets/icons/living-room.svg";
import kitchenFalseCeiling from "../assets/icons/kitchen-false-ceiling.svg";
import bathroom from "../assets/icons/bathroom.svg";
import kidsRoom from "../assets/icons/kids-room.svg";
import kitchenWall from "../assets/icons/kitchen-wall-tiles.svg";
import balCony from "../assets/icons/balcony.svg";
import poojaMandir from "../assets/icons/pooja-mandir.svg";
import diningRoom from "../assets/icons/dining-room.svg";
// ... import other icons

const services = [
  { icon: kitchenIcon, title: "Modular Kitchen" },
  { icon: wardrobeIcon, title: "Wardrobes" },
  { icon: masterBedRoom, title: "Master Bed Room" },
  { icon: tvUnit, title: "TV Units" },
  { icon: livingRoom, title: "Living Room" },
  { icon: kitchenFalseCeiling, title: "kitchen False Ceiling" },
  { icon: bathroom, title: "Bathroom" },
  { icon: kidsRoom, title: "Kids Room" },
  { icon: kitchenWall, title: "kitchen Wall" },
  { icon: balCony, title: "Balcony" },
  { icon: poojaMandir, title: "Pooja Mandir" },
  { icon: diningRoom, title: "Dining Room" },
];

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="mt-5">Interior Design Services Under One Roof</h2>
      <p className="mb-5">
        From ideation to execution, we offer functional design solutions for
        your home.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} />
        ))}
      </div>
      <button className="consultation-button">Book Free Consultation</button>
    </div>
  );
};

export default Services;
