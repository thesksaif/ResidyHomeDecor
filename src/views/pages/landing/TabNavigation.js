import React from 'react';
import PropTypes from 'prop-types';
import './Gallery.css';

const TabNavigation = ({ categories, selectedCategory, onSelectCategory }) => {
  const scrollContainer = (direction) => {
    const container = document.querySelector('.tabs');
    const scrollAmount = 200;
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="tab-navigation">
      <div className="tabs-wrapper">
        <button
          className="arrow-button prev-button"
          onClick={() => scrollContainer('left')}
          aria-label="Scroll left"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <div className="tabs" role="tablist" aria-label="Gallery Categories">
          {categories.map((category, idx) => (
            <button
              key={category}
              className={`tab ${category === selectedCategory ? 'active' : ''}`}
              onClick={() => onSelectCategory(category)}
              tabIndex={0}
              role="tab"
              aria-selected={category === selectedCategory}
              aria-controls={`tabpanel-${idx}`}
              id={`tab-${idx}`}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight') {
                  const next = (idx + 1) % categories.length;
                  onSelectCategory(categories[next]);
                } else if (e.key === 'ArrowLeft') {
                  const prev =
                    (idx - 1 + categories.length) % categories.length;
                  onSelectCategory(categories[prev]);
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>
        <button
          className="arrow-button next-button"
          onClick={() => scrollContainer('right')}
          aria-label="Scroll right"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

TabNavigation.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
};

export default TabNavigation;
