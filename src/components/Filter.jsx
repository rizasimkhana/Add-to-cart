import React, { useState } from 'react';

function Filter({ categories, applyFilter, setSearchQuery }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    applyFilter(event.target.value);
  };





  return (
    <div className="mb-4 p-4 border rounded-lg">
      <div className="mb-2">
        <label htmlFor="category" className="block">Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full p-2 border-none  rounded-md bg-white"
        >
          <option className='text-black font-bold border-none' value="">All Categories</option>
          {categories.map((category) => (
            <option className='text-green-400 border-none' key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Filter;
