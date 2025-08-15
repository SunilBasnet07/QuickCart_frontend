import { PRODUCT_ROUTE } from '@/route/route';
import Link from 'next/link';
import React from 'react';
import AddToCart from './AddToCart';
import Image from 'next/image';


const ProductCard = ({ product }) => {
 
  return (
    <div className="group bg-white rounded-2xl shadow-xl hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-48 overflow-hidden">
        {product?.imageUrls?.[0] ? (
          <Image
            src={product.imageUrls[0]}
            height={200}
            width={200}
            alt={product?.name || 'Product image'}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-500 text-sm">No image</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            {product?.category || 'Category'}
          </span>
          {product?.brand && (
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
              {product.brand}
            </span>
          )}
        </div>

        {/* Product Name */}
        <Link
          href={`${PRODUCT_ROUTE}/${product?._id}`}
          className="block text-md font-semibold truncate hover:underline text-gray-900 hover:text-indigo-600 transition-colors line-clamp-1"
        >
          {product?.name?.split(" ").slice(0, 4).join(" ")}
        </Link>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-md font-bold text-indigo-600">
            ${product?.price?.toFixed(2) || '0.00'}
          </span>
          {product?.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
          
        </div>

       {/* Add to Cart Button */}
        <div className=" w-full ">
          <AddToCart product={product} className="w-full" />
        </div>
      </div>

      
      
    </div>
  );
};

export default ProductCard;
