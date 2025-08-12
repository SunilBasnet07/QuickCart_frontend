'use client'
import React from 'react'

const ProductError = ({ error, reset }) => {
  return (
    <div className='mt-24 px-20'>
      <div className='text-center'>
        <h2 className='text-2xl font-Nunito-ExtraBold text-red-600 mb-4'>
          Something went wrong!
        </h2>
        <p className='text-gray-600 mb-6'>
          {error.message || 'An error occurred while loading products.'}
        </p>
        <button
          onClick={reset}
          className='bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors'
        >
          Try again
        </button>
      </div>
    </div>
  )
}

export default ProductError