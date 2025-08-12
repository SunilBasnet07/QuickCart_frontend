import { CONFIRMED_STATUS, DELIVERED_STATUS, PENDIGN_STATUS, SHIPPED_STATUS } from '@/constant/orderStatus'
import React from 'react'

const OrderStatus = ({ status,paymentMethod }) => {
    if (status == PENDIGN_STATUS || paymentMethod=="cash" ) {
        return (
            <span className="bg-green-100  text-[11px] capitalize text-green-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                {status || paymentMethod} 
            </span>
        )
    }
    if (status == CONFIRMED_STATUS || paymentMethod=="online") {
        return (
            <span className="bg-blue-100  text-[11px] capitalize text-blue-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                {status || paymentMethod}
            </span>
        )
    }
    if (status == SHIPPED_STATUS) {
        return (
            <span className="bg-yellow-100  text-[11px] capitalize text-yellow-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                {status}
            </span>
        )
    }
    if (status == DELIVERED_STATUS) {
        return (
            <span className="bg-red-100  text-[11px] capitalize text-red-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                {status}
            </span>
        )
    }
       
}

export default OrderStatus