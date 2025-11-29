import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        <button
          type="button"
          key={index}
          className="filter-btn"
          onClick={() => filterItems(category)}
          data-test-id={`filter-btn-${category}`} // Cypress selector
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
