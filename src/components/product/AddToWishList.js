'use client'
import { addWishList } from '@/redux/wish/wishListSlice'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

const AddToWishList = ({ product }) => {
  const dispatch = useDispatch();
  const {isWished}=useSelector((state)=>state.wish);
  
  


  function addWishProduct() {
    if (!isWished) {
      dispatch(addWishList({ name: product.name, price: product.price,imageUrls:product.imageUrls ,id:product._id }));
      toast.success(`${product?.name?.split(" ").slice(0,3).join(" ")} added to your wishlist ❤️`, {
        duration: 2000,
      });
      
    } else {
      // optional remove logic here if you want toggle behavior
      toast.error(`${product?.name?.split(" ").slice(0,3).join(" ")} is already in your wishlist.`);
    }
  }

  return (
    <div>
      <button
        onClick={addWishProduct}
        className="w-8 h-8 bg-white rounded-full flex items-center justify-center 
                   hover:bg-red-100 duration-200 shadow"
      >
        {isWished ? (
          <FaHeart className="text-red-600 text-lg" />
        ) : (
          <FaRegHeart className="text-gray-600 text-lg" />
        )}
      </button>
    </div>
  )
}

export default AddToWishList
