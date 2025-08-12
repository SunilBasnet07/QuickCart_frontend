'use client'
import { PRODUCT_ROUTE } from '@/route/route';
import Link from 'next/link';
import React, { useState } from 'react';
import AddToCart from './AddToCart';
import { PenLine, Trash2 } from 'lucide-react';
import { deleteProduct } from '@/api/product';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Modal from '../Modal';

const ProductCard = ({ product }) => {
  const router = useRouter();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleDelete = async () => {
    try {
       await deleteProduct(product?._id);
      toast.success('Product deleted successfully',{
        auotClose:1500,
      })
      setTimeout(() => {
        router.refresh(); // Refresh the current route
      }, 1600); // Slightly more than autoClose
    } catch (error) {
      toast.error(error.response?.data,{
        autoClose:1500,
      })
    }
  }
  return (
    <div className="group bg-white rounded-2xl shadow-xl hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-52 overflow-hidden">
        {product?.imageUrls?.[0] ? (
          <img
            src={product.imageUrls[0]}
            alt={product?.name || 'Product image'}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
          className="block text-lg font-semibold hover:underline text-gray-900 hover:text-indigo-600 transition-colors line-clamp-1"
        >
          {product?.name || 'Product Name'}
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
          <div className="flex items-center gap-2 mr-3">
            <button onClick={() => setShowDeleteModal(true)}>
              <Trash2 className="w-4 h-4 hover:text-red-500 cursor-pointer" />
            </button>

            <PenLine className="w-4 h-4 hover:text-indigo-500 cursor-pointer" />
          </div>
        </div>

        {/* Description */}
        {/* <p className="text-sm text-gray-600 line-clamp-2">
          {product?.description || 'This is a sample product description.'}
        </p> */}

        {/* Add to Cart Button */}
        <div className=" w-full">
          <AddToCart product={product} className="w-full" />
        </div>
      </div>

      {/* Delete Modal */}
      <Modal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
        title="Delete Product"
        message="Are you sure you want to delete this product? This action cannot be undone."
        itemName={product?.name}
      />
    </div>
  );
};

export default ProductCard;
