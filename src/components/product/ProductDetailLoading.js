'use client'
import React from 'react'

const ProductDetailsLoader = () => {
  return (
    <section className="py-8 bg-white md:py-16 dark:bg-gray-900 animate-pulse">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          {/* Image Section */}
          <div>
            <div className="aspect-square rounded-xl bg-gray-200 dark:bg-gray-700"></div>

            {/* Thumbnail placeholders */}
            <div className="flex items-center justify-center gap-5 mt-5">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg border border-gray-300 bg-gray-200 dark:bg-gray-700 h-20 w-20"
                ></div>
              ))}
            </div>

            <div className="mt-10">
              <div className="h-6 w-40 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="grid grid-cols-3 gap-5 mt-3">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg bg-gray-200 dark:bg-gray-700"
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="mt-5 sm:mt-8 lg:mt-0 space-y-4">
            <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
            <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded"></div>

            {/* Brand & Category */}
            <div className="flex gap-2">
              <div className="h-5 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-5 w-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>

            {/* Price & Rating */}
            <div className="flex gap-4 items-center">
              <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded"
                  ></div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <div className="h-10 w-40 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-10 w-40 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>

            {/* Description */}
            <div className="space-y-2 mt-6">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded"
                ></div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetailsLoader
