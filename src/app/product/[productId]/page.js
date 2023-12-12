'use client'
import React from 'react';
import { data } from '@/app/data/data';
import Image from 'next/image';

function ProductDescriptionPage({ params }) {
  // Find the product in the data array based on the productId
  const product = data.find((p) => p.productId === Number(params.productId));

  if (!product) {
    // Handle the case where the product with the given ID is not found
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Color: {product.color}</p>
      <p>Type: {product.type}</p>
      <p>Price: ${product.price.toFixed(2)}</p>

      {/* Use Next.js Image component for better performance */}
      <div>
        <Image src={`/${product.image}`} alt={product.name} width={500} height={500} />
      </div>
      <div>
                <h3 className="text-lg font-semibold mb-2">Description:</h3>
                {Array.isArray(product.description) ? (
                  <ul className="list-disc pl-6">
                    {product.description.map((sentence, index) => (
                      <li key={index} className="mb-1">{sentence}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{product.description}</p>
                )}
              </div>

      {/* Add other details you want to display */}
    </div>
  );
}

export default ProductDescriptionPage;
