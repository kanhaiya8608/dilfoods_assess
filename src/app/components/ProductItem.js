// ProductItem.js

import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { add } from '@/app/Redux/Cartslice';
const ProductItem = ({ product}) => {
  const dispatch =useDispatch();
  const handleadd =(product)=>{
    dispatch(add(product));
 }

  return (
    <div key={product.productId} className="bg-white p-6 rounded-md shadow-md mb-4 flex flex-col">
      {/* Product Image */}
      <img
        height={500}
        width={400}
        src={`/${product.image}`}
        alt={product.name}
        className="mb-4 rounded-md"
      />
      <div className="flex-grow">
        {/* Product Name */}
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>

        {/* View Details Link */}
        <Link href={`/product/${product.productId}`}>
          <p className="text-blue-600 mt-2 inline-block">View Details</p>
        </Link>

        {/* Product Price */}
        <p className="text-blue-600 mt-2">Price: Rs. {product.price.toFixed(2)}</p>

        {/* Add to Cart Button */}
        <button className='btn' onClick={()=>handleadd(product)}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
