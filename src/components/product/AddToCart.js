'use client'
import React from 'react'
import { useDispatch } from 'react-redux'
import {addToCart} from '@/redux/cart/cartSlice'
import toast from 'react-hot-toast'
import clsx from 'clsx'
const AddToCart = ({product,className}) => {

    const dispatch =useDispatch();

    function handleAddToCart(){
    
        dispatch(addToCart({
            name:product.name,
            id:product._id,
            price:product.price,
            imageUrls:product.imageUrls,
            brand:product.brand,
        }));
        if(product){
          toast.success("Product add sucessfully.",{
            autoClose: 1500,
          })
        }
     
    }
  return (
    <div>
        <button onClick={handleAddToCart} className={clsx("bg-blue-500 text-white px-4 py-2  rounded-md",className)}>Add to Cart</button>
    </div>
  )
}

export default AddToCart