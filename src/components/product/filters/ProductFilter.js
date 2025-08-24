'use client';
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { getBrands, getCategories } from "@/api/product";

const ProductFilter = ({ isOpen, setIsOpen }) => {
    const [limitValue, setLimitValue] = useState(JSON.parse(0));
    const [orderValue, setOrderValue] = useState(JSON.stringify({ createdAt: -1 }));
    const [categoryValue, setCategoryValue] = useState(null);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [brands, setBrands] = useState(null);
    const searchParams = useSearchParams();
    const router = useRouter();
    const params = new URLSearchParams(searchParams.toString());
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categories = await getCategories()
                setCategories(categories)
                const brands = await getBrands();
                setBrands(brands);
            
            } catch (error) {
                console.log(error?.response?.data)
            }
        }
        fetchData()
      
    }, [])

    function handleSubmit() {
        params.set('limit', limitValue); // set limit param
        params.set('sort', orderValue); // set sort param
        params.set('filters', JSON.stringify({ category: categoryValue })); // set category param
        params.set("filters", JSON.stringify({ brand: selectedBrands}));
        router.push(`?${params.toString()}`);



    }
    function handleCheckbox(brand) {
     
        if(selectedBrands.includes(brand)){
            setSelectedBrands(selectedBrands.filter((b)=>b !== brand))
        }else{
            setSelectedBrands([...selectedBrands,brand])
        }
    }
    function resetFilter() {

        params.delete('limit'); // remove limit param completely
        params.delete('sort');
        params.delete('filters');
        router.push(`?${params.toString()}`);
    }

    return (
        <>


            {/* Backdrop */}
            <AnimatePresence>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    // onClick={() => setIsOpen(false)}
                    className={`${isOpen ? "fixed  inset-0 bg-black z-40" : "hidden"}`}
                />

            </AnimatePresence>

            {/* Sidebar */}
            <AnimatePresence>

                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "tween", duration: 0.3 }}
                    className={`${isOpen ? "fixed top-0  right-0 w-80 h-full bg-white shadow-2xl z-40  p-6 overflow-y-auto" : "hidden"}`}
                >
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6 mt-24">
                        <h2 className="text-lg font-Nunito-ExtraBold">Product Filters</h2>
                        <button onClick={() => setIsOpen(false)}>
                            <X size={22} className="text-gray-500 hover:text-gray-800" />
                        </button>
                    </div>

                    {/* Category Filter */}
                    <div className="mb-6">
                        <h3 className="font-Nunito-SemiBold mb-2 ">Limit</h3>
                        <div className="w-full">
                            <select onChange={(e) => setLimitValue(e?.target?.value)}
                                defaultValue={searchParams.get('limit') || 10}
                                className="px-4 py-2 bg-slate-100 w-full border">
                                <option value={JSON.parse(10)}>10</option>
                                <option value={JSON.parse(20)}>20</option>
                                <option value={JSON.parse(50)}>50</option>
                                <option value={JSON.parse(100)}>100</option>
                            </select>
                        </div>
                    </div>

                    {/* Price Filter */}
                    <div className="mb-6">
                        <h3 className="font-Nunito-SemiBold mb-2 ">Order By:</h3>
                        <div className="w-full">
                            <select onChange={(e) => setOrderValue(e?.target?.value)} className="px-4 py-2 bg-slate-100 font-Nunito-SemiBold w-full border">
                                <option value={JSON.stringify({ createdAt: -1 })}>Latest</option>
                                <option value={JSON.stringify({ createdAt: 1 })}>Oldest</option>
                                <option value={JSON.stringify({ price: -1 })}>Price: high to low</option>
                                <option value={JSON.stringify({ price: 1 })}>Price: low to high</option>
                            </select>
                        </div>
                    </div>
                    {/* ----Categories--- */}
                    <div className="mb-6">
                        <h3 className="font-Nunito-SemiBold mb-2 ">Category</h3>
                        <div className="w-full">
                            <select onChange={(e) => setCategoryValue(e?.target?.value)} className="px-4 py-2 bg-slate-100 font-Nunito-SemiBold w-full border">
                                <option value={null}>Selecte Category</option>
                                {
                                    categories.map((category, index) => (
                                        <option key={index} >{category}</option>
                                    ))
                                }


                            </select>
                        </div>
                    </div>
                    {/* {--Slect brand---} */}
                    <div className="mb-6">
                        <h3 className="font-Nunito-SemiBold mb-2 ">Brand</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
                            {
                                brands?.map((brand, index) => (
                                    <div key={index} className="flex items-center me-4">
                                        <input id={`brand-${index}`} onChange={() => handleCheckbox(brand)} checked={selectedBrands.includes(brand)} type="checkbox" value={brand} className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />

                                        <label    htmlFor={`brand-${index}`} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{brand}</label>
                                    </div>
                                ))
                            }

                        </div>
                    </div>

                    {/* Rating Filter */}
                    {/* <div className="mb-6">
                        <h3 className="font-medium mb-2">Rating</h3>
                        <div className="space-y-2">
                            {[5, 4, 3, 2, 1].map((star) => (
                                <label key={star} className="flex items-center gap-2">
                                    <input type="radio" name="rating" className="accent-indigo-600" />
                                    <span>{star} Stars & Up</span>
                                </label>
                            ))}
                        </div>
                    </div> */}



                    {/* Apply & Reset Buttons */}
                    <div className="flex gap-3 pt-4 border-t">
                        <button
                            onClick={handleSubmit}
                            className="flex-1 py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
                        >
                            Apply
                        </button>
                        <button
                            onClick={resetFilter}
                            className="flex-1 py-2 rounded-xl bg-gray-200 text-gray-700 font-medium hover:bg-gray-300 transition"
                        >
                            Reset
                        </button>
                    </div>
                </motion.div>

            </AnimatePresence>
        </>
    );
};

export default ProductFilter;
