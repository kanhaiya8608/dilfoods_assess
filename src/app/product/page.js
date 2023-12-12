'use client'
import React, { useState, useEffect, useContext } from 'react';
import { data } from '../data/data';
import ProductItem from '../components/ProductItem.js'
function Product(product) {

  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [colorOptions, setColorOptions] = useState([]);
  const [typeOptions, setTypeOptions] = useState([]);
  const [sortOption, setSortOption] = useState('');

  // Populate unique color and type options
  useEffect(() => {
    const uniqueColors = Array.from(new Set(data.map(product => product.color)));
    const uniqueTypes = Array.from(new Set(data.map(product => product.type)));

    setColorOptions(uniqueColors);
    setTypeOptions(uniqueTypes);
  }, []);

  // Function to apply filters
  const applyFilters = () => {
    let filteredProducts = data;

    if (selectedColors.length > 0) {
      filteredProducts = filteredProducts.filter(product => selectedColors.includes(product.color));
    }

    if (selectedTypes.length > 0) {
      filteredProducts = filteredProducts.filter(product => selectedTypes.includes(product.type));
    }

    return filteredProducts;
  };

  // Function to apply sorting
  const applySorting = (products) => {
    if (sortOption === 'nameAsc') {
      return [...products].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'nameDesc') {
      return [...products].sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortOption === 'priceAsc') {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceDesc') {
      return [...products].sort((a, b) => b.price - a.price);
    }
    return products;
  };

  // Function to handle sorting dropdown change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const filteredProducts = applyFilters();
  const filteredAndSortedProducts = applySorting(filteredProducts);

  return (
    <div className='container mx-auto'>
      <div className="flex flex-col md:flex-row ">
        {/* Sidebar with Filters and Sorting */}
        <div className="md:w-1/5 ">
          {/* Filters */}
          <div className="mb-4">
            {/* Color Filters */}
            <div className="mb-4">
              <label className="text-sm font-medium block">Colors:</label>
              <div className="flex flex-wrap">
                {colorOptions.map((color, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      value={color}
                      checked={selectedColors.includes(color)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedColors((prevColors) => [...prevColors, e.target.value]);
                        } else {
                          setSelectedColors((prevColors) => prevColors.filter((c) => c !== e.target.value));
                        }
                      }}
                      className="hidden"
                    />
                    <div
                      className={`w-6 h-6 m-1 rounded-full border ${
                        selectedColors.includes(color) ? 'border-black' : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color }}
                    ></div>
                  </label>
                ))}
              </div>
            </div>

            {/* Type Filters */}
            <div className="mb-4">
              <label className="text-sm font-medium block">Types:</label>
              <div className="flex flex-col ml-2">
                {typeOptions.map((type, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      value={type}
                      checked={selectedTypes.includes(type)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedTypes((prevTypes) => [...prevTypes, e.target.value]);
                        } else {
                          setSelectedTypes((prevTypes) => prevTypes.filter((t) => t !== e.target.value));
                        }
                      }}
                    />
                    <span className="text-sm px-2 py-1 rounded-full cursor-pointer">
                      {selectedTypes.includes(type)}{type}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Sort Dropdown */}
          <div>
            <label className="text-sm font-medium block">Sort by:</label>
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="border w-60 rounded-md"
            >
              <option value="">None</option>
              <option value="nameAsc">Name (A-Z)</option>
              <option value="nameDesc">Name (Z-A)</option>
              <option value="priceAsc">Price (Low to High)</option>
              <option value="priceDesc">Price (High to Low)</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full md:w-3/4 mt-4 lg:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-auto">
            {filteredAndSortedProducts.map((product) => (
              <ProductItem
              key={product.productId}
              product={product}
            />
        
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;