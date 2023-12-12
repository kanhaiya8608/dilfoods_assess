'use client'
import React, { useState } from 'react';

function CartProduct({ product, onRemove, onUpdateCount }) {
  const [count, setCount] = useState(product.count);

  const handleRemove = () => {
    onRemove(product);
  };

  const handleUpdateCount = (newCount) => {
    setCount(newCount);
    onUpdateCount(product, newCount);
  };

  return (
    <div className="flex items-center border-b py-4">
      <div className="w-20 h-20 overflow-hidden mr-4">
        <img
          src={`/${product.image}`}
          alt={product.name}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex-grow">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600">Price: Rs. {product.price.toFixed(2)}</p>
        <div className="mt-2 flex items-center">
          <label className="text-sm font-medium mr-2">Quantity:</label>
          <div className="flex items-center">
            <button
              onClick={() => handleUpdateCount(count - 1)}
              disabled={count <= 1}
              className="bg-gray-200 px-2 py-1 rounded-l-md cursor-pointer"
            >
              -
            </button>
            <span className="px-4 py-1">{count}</span>
            <button
              onClick={() => handleUpdateCount(count + 1)}
              className="bg-gray-200 px-2 py-1 rounded-r-md cursor-pointer"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div>
        <button
          onClick={handleRemove}
          className="text-red-500 font-medium hover:text-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartProduct;
