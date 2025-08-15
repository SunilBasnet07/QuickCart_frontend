'use client'
import React, { useState } from 'react'
import { MdFavoriteBorder } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import AddToCart from './AddToCart'
import Image from 'next/image';
import MarkdownPreview from '@uiw/react-markdown-preview';
import BackButton from '../BackButton';
import ProductCard from './ProductCard';

const ProductDetails = ({ product }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <section className="py-8 bg-white md:py-16  dark:bg-gray-900 antialiased">
            <BackButton />
            <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div className="lg:grid   lg:grid-cols-2 lg:gap-8 xl:gap-16">
                    <div className="aspect-square  rounded-xl overflow-hidden ">
                        <div className='max-w-lg '>
                            {product?.imageUrls?.[currentIndex] ? (
                                <Image
                                    src={product?.imageUrls[currentIndex]}
                                    alt={product?.name || 'Product image'}
                                    height={500}
                                    width={500}
                                    className="w-full h-96 object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                    <span className="text-gray-500">No image available</span>
                                </div>
                            )}
                        </div>

                        {/* Thumbnail Gallery */}
                        <div className="flex items-center justify-center gap-5 mt-5  ">
                            {product?.imageUrls?.filter(image => image && image.trim() !== '').map((image, index) => (
                                <div
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className="aspect-square rounded-lg px-2 border border-gray-300 hover:border-gray-400  py-2 max-h-20 w-20 flex items-center  bg-gray-100 cursor-pointer "
                                >
                                    <Image
                                        src={image}
                                        alt={`${product?.name || 'Product'} - Image ${index + 1}`}
                                        height={100}
                                        width={100}
                                        className=" object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                        <div>
                            <h1 className='text-xl font-Nunito-SemiBold mt-10'>Related Product</h1>
                            <div className='grid grid-3 gap-5'>
                               
                            </div>
                        </div>


                    </div>


                    <div className="mt-5 sm:mt-8 lg:mt-0">
                        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-green-900 dark:text-green-300 font-Nunito-Bold">In stock</span>
                        <h1
                            className="text-xl font-Nunito-Bold mt-2 text-gray-900 sm:text-2xl dark:text-white"
                        >
                            {product?.name}
                        </h1>
                        <div className='relative top-2'>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">{product?.brand}</span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">{product?.category}</span>
                        </div>
                        <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                            <p
                                className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white"
                            >
                                Rs.{product?.price}
                            </p>

                            <div className="flex items-center gap-2 mt-2 sm:mt-0">
                                <div className="flex items-center gap-1">
                                    <FaStar className='text-yellow-300' />
                                    <FaStar className='text-yellow-300' />
                                    <FaStar className='text-yellow-300' />
                                    <FaStar className='text-yellow-300' />
                                    <FaStar className='text-yellow-300' />
                                    <FaStar className='text-yellow-300' />
                                </div>
                                <p
                                    className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400"
                                >
                                    (5.0)
                                </p>
                                <p

                                    className="text-sm font-medium font-Nunito leading-none text-gray-900 underline hover:no-underline dark:text-white"
                                >
                                    345 Reviews
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                            <button
                                className="flex items-center font-Nunito-SemiBold gap-2 justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                role="button"
                            >
                                <MdFavoriteBorder className='h-6 w-6' />
                                Add to favorites
                            </button>

                            <AddToCart product={product} />
                        </div>

                        <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                        <div className="mb-6 text-gray-500 font-Nunito  dark:text-gray-400">
                            <MarkdownPreview source={product?.description} />

                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails