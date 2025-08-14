'use client'
import { getAllOrders } from '@/api/order'
import React, { useEffect, useState } from 'react'
import DashboardCard from './Card'
import { MdOutlinePending } from 'react-icons/md'
import { CONFIRMED_STATUS, DELIVERED_STATUS, PENDIGN_STATUS, SHIPPED_STATUS } from '@/constant/orderStatus'
import Spinner from '@/components/Spinner'
import { GiConfirmed } from 'react-icons/gi'
import { FcShipped } from 'react-icons/fc'
import { AiOutlineDeliveredProcedure } from 'react-icons/ai'

const Order = () => {
    const [loading, setLoading] = useState(false)
    const [getOrderId, setGetOrderId] = useState({
        pending: 0,
        confirmed: 0,
        shipping: 0,
        delivered: 0,

    })

    useEffect(() => {
        setLoading(true);
        getAllOrders().then((orders) => {

            console.log(orders)
            let pending = 0
            let confirmed = 0
            let shipping = 0
            let delivered = 0
            orders?.forEach(order => {

                switch (order?.status) {
                    case PENDIGN_STATUS:
                        return pending++;

                    case CONFIRMED_STATUS:
                        return confirmed++;

                    case SHIPPED_STATUS:
                        return shipping++;

                    case DELIVERED_STATUS:
                        return delivered++;

                    default:
                        return;

                }


            });
            setGetOrderId({ pending, confirmed, shipping, delivered })
            setLoading(false)
        }).catch((error => console.log(error?.response?.data)))
    }, [])
    return (
        <section>
            <h1 className='py-3 px-2 text-xl font-Nunito-SemiBold '>Order Status</h1>
            {
                loading ? <Spinner className={"w-20 h-20"} /> :
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>


                <DashboardCard label={"Pending Order"}
                    count={getOrderId.pending}
                    icon={<MdOutlinePending className='w-7 h-7 text-green-500 dark:text-gray-400 mb-2' />}
                    className={"bg-green-900 "}
                />
                <DashboardCard label={"Confirmed Order"}
                    count={getOrderId.confirmed}
                    icon={<GiConfirmed className='w-7 h-7 text-blue-500 dark:text-blue-400 mb-2' />}
                    className={"bg-blue-900 "}
                />
                <DashboardCard label={"Shipping Order"}
                    count={getOrderId.shipping}
                    icon={<FcShipped className='w-7 h-7 text-yellow-500 dark:text-yellow-400 mb-2' />}
                    className={"bg-yellow-900 "}
                />
                <DashboardCard label={"Delivered Order"}
                    count={getOrderId.delivered}
                    icon={<AiOutlineDeliveredProcedure className='w-7 h-7 text-primary-500 dark:text-primary-400 mb-2' />}
                    className={"bg-primary-900 "}
                />

            </div>
            }
        
        </section>

    )
}

export default Order