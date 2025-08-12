'use client'
import React, { useEffect } from 'react'
import CheckOutOrder from '../order/Checkout'
import { Package } from 'lucide-react';
import { useSelector } from 'react-redux';


const CartSummaryList = ({selectedProducts}) => {
    const { totalPrice } = useSelector((state) => state.cart)
    const shipping = (totalPrice >= 50) ? 0.1 : 0;

  return (
    <div className="">
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

      <div className="space-y-4">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>${totalPrice || 0}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          <span className="text-green-600">-{shipping}%</span>
        </div>

        <div className="border-t border-gray-100 pt-4 mt-4">
          <div className="flex justify-between text-lg font-semibold text-gray-900">
            <span>Total</span>
            <span>${Math.floor(totalPrice - (totalPrice * shipping))}</span>
          </div>
        </div>
      </div>
      <CheckOutOrder selectedProducts={selectedProducts}/>
      

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">
          <Package className="h-4 w-4 inline-block mr-1" />
          Free shipping on orders over $50
        </p>
      </div>
    </div>
  </div>
  )
}

export default CartSummaryList