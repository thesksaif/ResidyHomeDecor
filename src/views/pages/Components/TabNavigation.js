import React from "react";
import "../TabNavigation.css"; // You will need to style this accordingly

const TabNavigation = ({ categories, selectedCategory, onSelectCategory }) => {
  const scrollContainer = (direction) => {
    const container = document.querySelector(".tabs");
    const scrollAmount = 200;
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="tab-navigation">
      <div className="tabs-wrapper">
        <button
          className="scroll-button"
          onClick={() => scrollContainer("left")}
        >
          {"<"}
        </button>
        <div className="tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`tab ${category === selectedCategory ? "active" : ""}`}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <button
          className="scroll-button"
          onClick={() => scrollContainer("right")}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default TabNavigation;
