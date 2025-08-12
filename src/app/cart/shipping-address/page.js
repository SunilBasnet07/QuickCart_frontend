import CartSummaryList from '@/components/cart/CartSummaryList'
import ShippingForm from '@/components/order/ShippingForm'
import React from 'react'

const ShippingAddressPage = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto mt-10 px-6 py-8">
        {/* Shipping Form - 2/3 width */}
        <div className="lg:col-span-2 bg-white shadow-lg rounded-2xl p-6">
          <ShippingForm />
        </div>
      
        {/* Cart Summary - 1/3 width */}
        <div className="bg-gray-50 shadow-lg rounded-2xl p-6 lg:mt-0 mt-10">
          <CartSummaryList />
        </div>
      </div>
      

    )
}

export default ShippingAddressPage