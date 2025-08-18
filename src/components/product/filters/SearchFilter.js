'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { CiFilter } from 'react-icons/ci';
import { IoSearch } from "react-icons/io5";
import { useDebounce } from 'use-debounce';

const SearchFilter = () => {
    const [searchInput, getSearchInput] = useState("");
    const [value] = useDebounce(searchInput, 1000)
    const searchParams = useSearchParams();
    const router = useRouter();
    const params = new URLSearchParams(searchParams.toString());
    useEffect(() => {
        if (value) {
            params.set("filters", JSON.stringify({ name: value }));
            router.push(`?${params.toString()}`)
        }

    }, [value])
    function resetSearchFilter() {
        params.delete("filters", JSON.stringify({ name: value }));
    }
    return (
        <div className="flex-1">
            <form className="w-full">
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <IoSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div>

                        <input
                            type="search"
                            id="default-search"

                            onChange={(e) => getSearchInput(e?.target?.value)}
                            className="block w-full rounded-xl border border-gray-300 font-Nunito bg-gray-50 
                                      p-3 pl-10 pr-24 text-sm text-gray-900 shadow-sm 
                                      focus:border-blue-500 focus:ring-2 focus:ring-blue-500 
                                      dark:border-gray-600 dark:bg-gray-700 dark:text-white 
                                      dark:placeholder-gray-400 dark:focus:border-blue-500 
                                      dark:focus:ring-blue-500"
                            placeholder="Search products by name..."
                            required
                        />

                    </div>


                </div>
            </form>
         
        </div>
    )
}

export default SearchFilter