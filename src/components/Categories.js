import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        <button
          type="button"
          key={index}
          id={`filter-btn-${index}`}         // <-- ID added for Cypress
          className="filter-btn"
          onClick={() => filterItems(category)}
          data-test-id={`filter-btn-${category}`} // optional, still keep data-test-id
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
