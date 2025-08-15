import { FaArrowLeft, FaArrowRight, FaStar, FaShoppingCart, FaHeart, FaEye } from 'react-icons/fa';
import React from 'react'
import { PRODUCT_ROUTE } from '@/route/route';
import Link from 'next/link';

const BestProduct = () => {

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-Nunito-Bold text-gray-900 mb-6">
            Product of the Month
          </h2>
          <p className="text-xl text-gray-600 font-Nunito-SemiBold max-w-2xl mx-auto">
            Our most exceptional product that combines innovation, quality, and unbeatable value
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Product Image Section */}
            <div className="relative overflow-hidden">
              <div className="absolute top-6 left-6 z-10">
                <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  ⭐ BEST SELLER
                </span>
              </div>

              <div className="absolute top-6 right-6 z-10">
                <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  🔥 LIMITED TIME
                </span>
              </div>

              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Premium Wireless Headphones"
                className="w-full h-full object-cover min-h-[500px] lg:min-h-[600px]"
              />

              {/* Floating Elements */}
              <div className="absolute bottom-6 left-6 bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-Nunito text-gray-800">In Stock</span>
                </div>
              </div>
            </div>

            {/* Product Details Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <span className="text-blue-600 font-Nunito-SemiBold text-sm uppercase tracking-wide">
                  Electronics • Audio
                </span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-Nunito-ExtraBold text-gray-900 mb-4 leading-tight">
                Premium Wireless Bluetooth Headphones
              </h3>

              <p className="text-lg text-gray-600 mb-6 font-Nunito-SemiBold leading-relaxed">
                Experience crystal-clear sound with our flagship wireless headphones.
                Featuring active noise cancellation, 30-hour battery life, and premium
                comfort for all-day wear.
              </p>

              {/* Rating and Reviews */}
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="w-6 h-6 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="ml-3 text-lg font-Nunito text-gray-600 font-medium">
                  4.9 (2,847 reviews)
                </span>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-Nunito">Noise Cancelling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-Nunito">30h Battery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-Nunito">Premium Sound</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">✓</span>
                  </div>
                  <span className="text-gray-700 font-Nunito">Touch Controls</span>
                </div>
              </div>

              {/* Price Section */}
              <div className="mb-8">
                <div className="flex items-baseline space-x-4 mb-4">
                  <span className="text-4xl font-bold text-gray-900">$5999</span>
                  <span className="text-2xl text-gray-500 line-through">$9999</span>
                  <span className="bg-red-100 text-red-600 font-Nunito px-3 py-1 rounded-full text-sm font-bold">
                    40% OFF
                  </span>
                </div>
                <p className="text-green-600 font-Nunito font-medium">
                  🎉 Save $60 + Free Shipping
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Link href={`${PRODUCT_ROUTE}/689ee420af1928e343c77e6d`} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3">
                  <FaShoppingCart className="text-xl" />
                  <span className='font-Nunito-SemiBold'>Buy now</span>
                </Link>

                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-white border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2">
                    <FaHeart className="text-lg" />
                    <span className='font-Nunito'>Wishlist</span>
                  </button>
                  <button className="bg-white border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2">
                    <FaEye className="text-lg" />
                    <span className='font-Nunito'>Quick View</span>
                  </button>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className='font-Nunito'>Free Shipping</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className='font-Nunito'>30-Day Returns</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span className='font-Nunito'>2-Year Warranty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestProduct