import Image from 'next/image'
import React from 'react'
import { FaCreditCard } from 'react-icons/fa'
import ProceedToPayment from './ProceedToPayment'
import CashAndDelivery from './CashAndDelivery'

const OrderCard = ({ order }) => {

    return (
        <div className="bg-white rounded-xl  shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
            {/* Header with order status */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-white font-Nunito-SemiBold  text-sm">Order #{order?.orderId}</span>
                    </div>
                    <span className="bg-white/20 capitalize text-white px-3 py-1 rounded-full text-xs font-Nunito-SemiBold backdrop-blur-sm">
                        {order?.status}
                    </span>
                </div>
            </div>
            <p className='text-right text-[12px] px-5 py-1 font-Nunito '>{order?.createdAt}</p>
            {/* Order details */}
            <div className="pl-4 pb-2 pr-4">
                <div className='grid grid-cols-2 gap-3'>
                    {/* Product info */}
                    {
                        order?.orderItem?.map((item, index) => (
                            <div key={index} className="flex items-start bg-slate-50 rounded-md py-2 px-2 space-x-4 mb-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                                    {
                                        item?.product?.imageUrls[0] ? (<Image src={item?.product?.imageUrls[0]} height={100} width={100} alt={item?.product?.name} className='rounded-md' />) :
                                            (
                                                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                                </svg>
                                            )
                                    }


                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-Nunito-ExtraBold text-gray-900 mb-1">{item?.product?.name.split(" ").slice(0,4).join(" ")}</h3>
                                    <p className="text-sm text-gray-600 font-Nunito mb-2">Brand: {item?.product?.brand}</p>
                                    <div className="flex items-center space-x-4  text-sm text-gray-500">
                                        <span> Rs. {item?.product?.price} x {item?.quantity}</span>
                                        <span>•</span>
                                        <span>Color: Black</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>





                {/* Price and actions */}
                <div className="border-t border-gray-100 pt-1">
                    <div className="flex items-center justify-between ">
                        <div>
                            <p className="text-sm font-Nunito-SemiBold text-gray-600">Total Amount</p>
                            <p className="text-md font-bold italic text-gray-900">Rs. {order?.totalPrice}</p>
                        </div>
                      
                    <div className='flex items-center gap-3'>
                    <CashAndDelivery order={order}/>
                    <ProceedToPayment order={order}/>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OrderCard