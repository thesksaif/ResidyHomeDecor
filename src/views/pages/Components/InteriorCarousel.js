// import React from "react";
// import OwlCarousel from "react-owl-carousel2";
// import "react-owl-carousel2/lib/styles.css";
// import "../intreiorCarousel.css";

import React from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import "../intreiorCarousel.css";

import image1 from "../assets/images/carousel/1.jpg";
import image2 from "../assets/images/carousel/2.jpg";
import image3 from "../assets/images/carousel/3.jpg";
import image4 from "../assets/images/carousel/4.jpg";
import image5 from "../assets/images/carousel/5.jpg";
import image6 from "../assets/images/carousel/6.jpg";
import image7 from "../assets/images/carousel/7.jpg";

const InteriorCarousel = () => {
  const options = {
    items: 3,
    nav: true,
    rewind: true,
    autoplay: true,
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div className="carousel-container">
      <h2>Get a glimpse of Livspace homes</h2>
      <p>Latest dream home interiors delivered the hassle-free way</p>
      <OwlCarousel options={options}>
        <div className="item">
          <img src={image1} alt="Elegant 2 BHK flat, Mumbai" />
          <div className="carousel-caption">Elegant 2 BHK flat, Mumbai</div>
        </div>
        <div className="item">
          <img src={image2} alt="Contemporary 3 BHK house, Gurgaon" />
          <div className="carousel-caption">
            Contemporary 3 BHK house, Gurgaon
          </div>
        </div>
        <div className="item">
          <img src={image3} alt="Contemporary 3 BHK flat, Ahmedabad" />
          <div className="carousel-caption">
            Contemporary 3 BHK flat, Ahmedabad
          </div>
        </div>
        <div className="item">
          <img src={image4} alt="Contemporary 3 BHK flat, Ahmedabad" />
          <div className="carousel-caption">
            Contemporary 3 BHK flat, Ahmedabad
          </div>
        </div>
        <div className="item">
          <img src={image5} alt="Contemporary 3 BHK flat, Ahmedabad" />
          <div className="carousel-caption">
            Contemporary 3 BHK flat, Ahmedabad
          </div>
        </div>
        <div className="item">
          <img src={image6} alt="Contemporary 3 BHK flat, Ahmedabad" />
          <div className="carousel-caption">
            Contemporary 3 BHK flat, Ahmedabad
          </div>
        </div>
        <div className="item">
          <img src={image7} alt="Contemporary 3 BHK flat, Ahmedabad" />
          <div className="carousel-caption">
            Contemporary 3 BHK flat, Ahmedabad
          </div>
        </div>
      </OwlCarousel>
      <a href="#" className="get-quote-btn">
        GET FREE QUOTE
      </a>
    </div>
  );
};

export default InteriorCarousel;
