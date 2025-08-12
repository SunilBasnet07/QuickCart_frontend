'use client'
import React, { useEffect, useState } from 'react'
import { PenLine, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { deleteProduct } from '@/api/product';
import toast from 'react-hot-toast';
import Modal from '../Modal';
import Image from 'next/image';
import placeHolder from "@/image/placeholder.png"
import { IoCog } from "react-icons/io5";
import Link from 'next/link';
import { PRODUCT_MANAGEMENT } from '@/route/route';
import Spinner from '../Spinner';
import clsx from 'clsx';

const ProductTable = ({ products }) => {
    const router = useRouter();
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [product, getProduct] = useState("");


    const handleDelete = async () => {
        try {
            setLoading(true);
            await deleteProduct(product?._id);
            toast.success('Product deleted successfully', {
                auotClose: 1500,
            })
            setTimeout(() => {
                router.refresh(); // Refresh the current route
            }, 1600);
        setShowDeleteModal(false) // Slightly more than autoClose
        } catch (error) {
            toast.error(error.response?.data, {
                autoClose: 1500,
            })
        }finally{
            setLoading(false);
        }
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-10">
            <div className='flex justify-between items-center mb-5'>
                <h1 className='text-2xl font-Nunito-ExtraBold text-gray-700 underline px-3 py-3'>Product Management</h1>
                <Link href={`${PRODUCT_MANAGEMENT}/add-product`} className='px-2 py-1 text-sm font-Nunito-SemiBold  h-8 bg-blue-500 hover:bg-blue-600 text-white rounded '>Add Product</Link>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Brand
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3 ">
                            <IoCog className='h-5 w-5' />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item, index) => (
                            <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">

                                <th scope="row" className="px-6 py-4 font-medium text-xs flex items-center gap-3 text-gray-900 whitespace-nowrap dark:text-white">
                                    {item?.name}
                                    <Image src={item?.imageUrls[0] || placeHolder} alt='product image' height={30} width={30} />
                                </th>
                                <td className="px-6 py-4">{item?.brand}</td>
                                <td className="px-6 py-4">{item?.category}</td>
                                <td className="px-6 py-4">Rs. {item?.price}</td>
                                <td className="px-6 py-4">{item?.createdAt}</td>
                                <td className="px-6 py-4">
                                    <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                        <div className="flex items-center gap-2 mr-3">
                                            <button onClick={() => {
                                                getProduct(item)
                                                setShowDeleteModal(true)
                                            }}>
                                                <Trash2 className="w-4 h-4 hover:text-red-500 cursor-pointer" />
                                            </button>
                                            <Link href={`${PRODUCT_MANAGEMENT}/edit/${item?._id}`}>
                                                <PenLine className="w-4 h-4 hover:text-indigo-500 cursor-pointer" />
                                            </Link>

                                        </div>
                                    </div>
                                </td>
                            </tr>

                        ))
                    }


                </tbody>
            </table>
            <Modal
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                
                title="Delete Product"
                message="Are you sure you want to delete this product? This action cannot be undone."
                itemName={product?.name}
            >
                <div>
                    <button onClick={handleDelete} disabled={loading} className={clsx('px-4 py-2.5 text-gray-7 rounded-lg font-medium  text-white duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-blue-500 hover:bg-blue-600',
                        {
                            "bg-opacity-20 bg-white cursor-not-allowed": loading,
                        }
                    )}
                    >
                        Delete
                        {loading && <Spinner />}
                    </button>

                </div>
            </Modal>
        </div>


    )
}

export default ProductTable