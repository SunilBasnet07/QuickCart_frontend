'use client'
import { addProduct, updateProduct } from '@/api/product';
import Image from 'next/image';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { RxCross2 } from "react-icons/rx";
import Spinner from '../Spinner';
import BackButton from '../BackButton';


const ProductForm = ({ product, isEdit }) => {
    const { register, handleSubmit, reset } = useForm({
        values: product,
    });
    const [getFile, setGetFile] = useState([]);
    const [previewImage, setPreviewImage] = useState([]);
    const [loading, setLoading] = useState(false);




    async function submitForm(data) {
        const formData = new FormData();
        formData.append("name", data.name)
        formData.append("brand", data.brand)
        formData.append("category", data.category)
        formData.append("price", data.price)
        formData.append("description", data.description)
        getFile.forEach((file) => {
            formData.append("images", file)

        });



        try {
            setLoading(true)
            isEdit ? (await updateProduct(product?._id, formData)) : (await addProduct(formData));
            toast.success(isEdit ? "Product update successfull" : "Product added sucessfull", {
                autoClose: 1500,
            })

        } catch (error) {
            toast.error(error?.message, {
                auotClose: 1500
            });
        } finally {
            setLoading(false)
            reset()
            setPreviewImage([])
        }


    }
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);

        const validFiles = files.filter(file => {
            if (file.size > 5 * 1024 * 1024) {
                toast.error(`${file.name} is too large. Max size is 5MB.`);
                return false;
            }
            return true;
        });

        setGetFile(validFiles);
        setPreviewImage(validFiles.map(file => URL.createObjectURL(file)));
    };
    const handleRemoveImage = (index) => {
        const updatedFiles = [...getFile];
        const updatedPreviews = [...previewImage];

        updatedFiles.splice(index, 1);      // Remove file at index
        updatedPreviews.splice(index, 1);   // Remove preview at index

        setGetFile(updatedFiles);
        setPreviewImage(updatedPreviews);
    };



    return (
        <section className="bg-white dark:bg-gray-900 py-5 ">
            <BackButton />
            <div className="py-8 px-4 mx-auto max-w-4xl lg:py-5 boarder">

                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">{isEdit ? "Edit Product" : "Add a new product"}</h2>
                <form action="#" onSubmit={handleSubmit(submitForm)}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                            <input
                                {...register("name")}
                                type="text"
                                name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required />
                        </div>
                        <div className="w-full">
                            <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                            <input
                                {...register("brand")}
                                type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required />
                        </div>
                        <div className="w-full">
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input
                                {...register("price")}
                                type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">category</label>
                            <input
                                {...register("category")}
                                type="text"
                                name="category" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <textarea
                                {...register("description")}
                                id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                        </div>

                        {/* ** image --- */}
                        <div className="sm:col-span-2 ">


                            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Images

                            </label>
                            {previewImage?.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {previewImage.map((imgSrc, index) => (
                                        <div key={index} className="relative">
                                            <Image src={imgSrc} alt="preview" width={100} height={100} className="rounded" />
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveImage(index)}
                                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 text-xs"
                                            >
                                                <RxCross2 />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <input
                                type="file"
                                id="image"
                                multiple
                                accept="image/*"
                                onChange={handleImageChange}
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
                                       focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 
                                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Upload images here"
                            />
                        </div>

                    </div>
                    <button disabled={loading} aria-busy={loading} type="submit" className="inline-flex  disabled:cursor-not-allowed disabled:bg-slate-400 items-center px-5 py-2.5 mt-8 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                        {loading ? <span><Spinner /></span> : isEdit ? "Edit product" : "Add product"}

                    </button>
                </form>
            </div>
        </section>

    )
}

export default ProductForm