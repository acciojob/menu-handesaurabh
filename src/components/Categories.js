import React from "react";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      <button
        id="filter-btn-0"
        type="button"
        className="filter-btn"
        onClick={() => filterItems("all")}
      >
        all
      </button>

      {categories.map((category, index) => (
        <button
          id={`filter-btn-${index + 1}`}
          type="button"
          className="filter-btn"
          key={index}
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
