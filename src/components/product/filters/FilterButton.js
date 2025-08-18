'use client'
import React, { useState } from 'react'
import { CiFilter } from "react-icons/ci";
import ProductFilter from './ProductFilter';

const FilterButton = ({ products }) => {
  const [showFilterPopup,setShowFilterPopup]=useState(false)
  return (
    <div >
      <button onClick={()=>setShowFilterPopup(true)} type="button" className="text-white flex items-center gap-1 bg-gradient-to-r mr-10  from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-7 py-2.5 font-Nunito-SemiBold text-center me-2 mb-2 ">Filter
        <CiFilter className='h-4 w-4' />
      </button>
      <ProductFilter 
      isOpen={showFilterPopup}
      setIsOpen={setShowFilterPopup}
      />
    </div>
  )
}

export default FilterButton