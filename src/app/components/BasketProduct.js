// BasketProduct.js
import React, { useContext } from 'react';
import { MdOutlineDelete } from "react-icons/md";


const BasketProduct = ({ item }) => {

  const handleIncreaseCount = () => {
    const newCount = (item.count ?? 0) + 1;
    updateCount(item, newCount);
  };

  const handleDecreaseCount = () => {
    const newCount = Math.max((item.count ?? 1) - 1, 1); // Ensure count doesn't go below 1
    updateCount(item, newCount);
  };

  const handleRemove = () => {
    removeFromBasket(item);
  };

  return (
    <div className="flex items-center justify-between border-b border-gray-300 p-4">
      <div className="flex items-center space-x-4">
        <img
          className="w-16 h-16 object-cover rounded-md"
          src={item.image}
          alt={item.name}
        />
        <div>
          <p className="font-bold text-lg">{item.name}</p>
          <p className="text-gray-600">₹ {item.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <button
            className="text-blue-500 px-2  rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white transition"
            onClick={handleIncreaseCount}
          >
            +
          </button>
          <p className="mx-2">{item.count ?? 1}</p>
          <button
            className="text-blue-500 px-2  rounded-full border border-blue-500 hover:bg-blue-500 hover:text-white transition"
            onClick={handleDecreaseCount}
          >
            -
          </button>
        </div>
        <button
          className="text-red-500 px-2 py-1 rounded-md border border-red-500 hover:bg-red-500 hover:text-white transition"
          onClick={handleRemove}
        >
         <MdOutlineDelete size={20}/>
        </button>
      </div>
    </div>
  );
};

export default BasketProduct;