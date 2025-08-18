'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import { MdFilterAltOff } from "react-icons/md";

const ResetButton = () => {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams.toString());
  function remomeFilter() {
    params.delete("filters");
    window.location.search = params.toString();
  }
  return (
   
      <button onClick={remomeFilter} type="button" className="text-white flex items-center gap-1 bg-gradient-to-r mr-10  from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-7 py-2.5 font-Nunito-SemiBold text-center me-2 mb-2 ">Reset
    <MdFilterAltOff className="w-4 h-4" />
      </button>
  
  )
}

export default ResetButton