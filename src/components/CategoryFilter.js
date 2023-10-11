import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  const onCategoryClicked = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          className={selectedCategory === category ? "selected" : ""} // Conditionally apply 'selected' class
          onClick={() => onCategoryClicked(category)}
          key={category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
