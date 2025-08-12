import React from 'react'

const Loading = () => {
  return (
    <section className='mt-24'>
      <h1 className='text-2xl py-5 px-10 font-Nunito-ExtraBold'>Product Features</h1>
      <div className='gap-4 grid grid-cols-4 px-20'>
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden animate-pulse">
            <div className="w-full h-52 bg-gray-200"></div>
            <div className="p-4 space-y-3">
              <div className="flex gap-2">
                <div className="h-4 bg-gray-200 rounded w-16"></div>
                <div className="h-4 bg-gray-200 rounded w-12"></div>
              </div>
              <div className="h-5 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Loading