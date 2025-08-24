'use client'
import { setUserStatus } from '@/redux/user/userSlice'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoMdSearch } from 'react-icons/io'
import { useDispatch } from 'react-redux'

const UserSearch = () => {
    // const [searchValue,setSearchValue]=useState('')
    const {register,handleSubmit}=useForm();
    const router =useRouter();
    const dispatch = useDispatch();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString())
    // console.log(searchValue)
      
    function submitForm(data) {
        params.set("filters",JSON.stringify(data))
        router.push(`?${params.toString()}`)
        dispatch(setUserStatus("search compleated"));
            
    }
    function removeFilter(){
        params.delete("filters")
        router.push(`?${params.toString()}`)
  
        window.location.search = params.toString();
    }

    return (
        <form onSubmit={handleSubmit(submitForm)} className="relative w-1/3 ml-4 border-l rounded-md">
        <div className="relative">
            <input
                type="search"
                // value={searchValue}
                // onChange={(e)=>setSearchValue(e?.target?.value)}
                {...register("name")}
                id="location-search"
                className="block p-2.5 w-full  z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search User by name"
                required
            />
            <button
                type="submit"
                
                className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                <IoMdSearch className="w-6 h-6 text-white dark:text-gray-400" />
                <span className="sr-only">Search</span>
            </button>
            <button onClick={removeFilter} className='absolute right-16 top-2 opacity-70'>x</button>
        </div>
        </form>

    )
}

export default UserSearch