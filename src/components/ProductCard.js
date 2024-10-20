import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
      <Link to={`/products/${product.id}`}>
        <div className="flex justify-center">
          <img
            className="w-1/2 h-auto object-contain" // 50% width and keep aspect ratio
            src={product.thumbnail}
            alt={product.title}
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
          <p className="text-green-600 font-bold text-xl mb-2">${product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
