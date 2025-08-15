'use client'
import { getAllProducts } from '@/api/product';
import { PRODUCT_ROUTE } from '@/route/route';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaStar, FaShoppingCart, FaHeart, FaEye } from 'react-icons/fa';
import AddToCart from '../product/AddToCart';

const PopularProduct = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts().then((response) => {
      setProducts(response);
    }).catch((error => console.log(error?.response?.data)))
  }, [])

  const popularProducts = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 89.99,
      originalPrice: 129.99,
      rating: 4.8,
      reviews: 1247,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Electronics",
      badge: "Best Seller"
    },
    // {
    //   id: 2,
    //   name: "Premium Cotton T-Shirt",
    //   price: 29.99,
    //   originalPrice: 49.99,
    //   rating: 4.6,
    //   reviews: 892,
    //   image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    //   category: "Fashion",
    //   badge: "Trending"
    // },
    // {
    //   id: 3,
    //   name: "Smart Fitness Watch",
    //   price: 199.99,
    //   originalPrice: 299.99,
    //   rating: 4.9,
    //   reviews: 2156,
    //   image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    //   category: "Electronics",
    //   badge: "Hot Deal"
    // },
    // {
    //   id: 4,
    //   name: "Designer Handbag",
    //   price: 79.99,
    //   originalPrice: 159.99,
    //   rating: 4.7,
    //   reviews: 634,
    //   image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    //   category: "Fashion",
    //   badge: "Limited"
    // },
    // {
    //   id: 5,
    //   name: "Wireless Charging Pad",
    //   price: 39.99,
    //   originalPrice: 69.99,
    //   rating: 4.5,
    //   reviews: 445,
    //   image: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    //   category: "Electronics",
    //   badge: "New"
    // },
    // {
    //   id: 6,
    //   name: "Organic Skincare Set",
    //   price: 59.99,
    //   originalPrice: 89.99,
    //   rating: 4.8,
    //   reviews: 1123,
    //   image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    //   category: "Beauty",
    //   badge: "Popular"
    // }
  ];

  return (

    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-Nunito-Bold font-bold text-gray-900 mb-6">
            Popular Products
          </h2>
          <p className="text-xl font-Nunito-SemiBold text-gray-600 max-w-2xl mx-auto">
            Discover our most loved products that customers can't stop talking about
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 gap-5">
          {products?.slice(0, 6).map((product, index) => (

            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
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
               

                {/* Badge */}
                <div className="absolute top-2 left-2">
                  <span className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                    popular
                  </span>
                </div>

                {/* Quick Actions */}
                <div
                  className={`absolute top-2 right-2 flex flex-col space-y-1 transition-all duration-300 ${isHovered === product?._id ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'
                    }`}
                >
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-blue-500 hover:text-white transition-colors duration-200 shadow">
                    <FaHeart className="text-xs" />
                  </button>
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-700 hover:bg-blue-500 hover:text-white transition-colors duration-200 shadow">
                    <FaEye className="text-xs" />
                  </button>
                </div>

                {/* Category */}
                <div className="absolute bottom-2 left-2">
                <span className="bg-green-100 font-Nunito  text-green-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
              {product?.brand}
            </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <Link href={`${PRODUCT_ROUTE}/${product?._id}`} className="text-sm hover:underline font-Nunito-Bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                  {product?.name.split(" ").slice(0, 3).join(" ")}
                </Link>

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
                  <span className="text-xs text-green-600">40% OFF</span>
                </div>

                {/* Add to Cart Button */}
                <AddToCart
                  product={product}
                  className="w-full text-xs bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-1"
                />
              </div>
            </div>
          ))}
        </div>


        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href={PRODUCT_ROUTE} className="bg-white font-Nunito-SemiBold text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-200 shadow-lg">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PopularProduct