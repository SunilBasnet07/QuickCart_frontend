'use client'
import { PRODUCT_ROUTE } from '@/route/route';
import Link from 'next/link';
import React, { useState } from 'react';
import AddToCart from './AddToCart';
import Image from 'next/image';
import { FaStar,  FaEye } from 'react-icons/fa';
import AddToWishList from './AddToWishList';



const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(null);



  return (
 <div

        className="bg-white rounded-xl shadow-lg border hover:shadow-lg transition-all duration-300 overflow-hidden group"
        onMouseEnter={() => setIsHovered(product?._id)}
        onMouseLeave={() => setIsHovered(null)}
      >
        {/* Product Image */}
        <div className="relative overflow-hidden">
          <Link href={`${PRODUCT_ROUTE}/${product?._id}`}>
            <Image
              src={product?.imageUrls[0]}
              alt={product?.name}
              height={160}
              width={160}
              className="w-full h-40 object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </Link>



          {/* Quick Actions */}
          <div
            className={`absolute top-2 right-2 flex flex-col space-y-1 transition-all duration-300 ${isHovered === product?._id ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'
              }`}
          >
          <AddToWishList product={product}/>
            <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-blue-500 hover:text-white transition-colors duration-200 shadow">
              <FaEye className="text-xs" />
            </button>
          </div>


        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className='flex items-center justify-between'>
            <Link href={`${PRODUCT_ROUTE}/${product?._id}`} className="text-sm hover:underline font-Nunito-Bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
              {product?.name.split(" ").slice(0, 3).join(" ")}
            </Link>
            <span className="bg-green-100 font-Nunito  text-green-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
              {product?.brand}
            </span>
          </div>
          {/* Rating */}
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
              />
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-base font-bold text-gray-900">${product?.price}</span>
            {/* <span className="text-xs text-green-600">40% OFF</span> */}
          </div>

          {/* Add to Cart Button */}
          <AddToCart
            product={product}
            className="w-full text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-3 rounded-lg font-Nunito-SemiBold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-1"
          />
        </div>
      </div>

  );
};

export default ProductCard;
