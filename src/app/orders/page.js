'use client'
import { getOrderByUser } from '@/api/order'
import OrderCard from '@/components/order/Card'
import { ORDER_ROUTE } from '@/route/route'
import Link from 'next/link'
import { useParams, usePathname, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { MdOutlinePending } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { FcShipped } from "react-icons/fc";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { CONFIRMED_STATUS, DELIVERED_STATUS, PENDIGN_STATUS, SHIPPED_STATUS } from '@/constant/orderStatus'
import OrdersLoading from '@/components/order/OrderLoading'

const OrdersPage = () => {

    const searchParams = useSearchParams();
    const pathName = usePathname();
    const [orders, setOrders] = useState([]);
    const [loading, setloading] = useState(true);

    const tabLinks = [
        {
            route: PENDIGN_STATUS,
            label: "Pending",
            icon: <MdOutlinePending className='h-5 w-5' />
        },
        {
            route: CONFIRMED_STATUS,
            label: "Confirmed",
            icon: <GiConfirmed className='h-5 w-5' />
        },
        {
            route: SHIPPED_STATUS,
            label: "Shipped",
            icon: <FcShipped className='h-5 w-5' />
        },
        {
            route: DELIVERED_STATUS,
            label: "Delivered",
            icon: <AiOutlineDeliveredProcedure className='h-5 w-5' />
        },
    ]
        ;
    const status = searchParams.get("status");


    useEffect(() => {
        setloading(true)
        getOrderByUser(status).then((response) => {
            setOrders(response);
            setloading(false)
            
        }).catch((error => console.log(error?.message)))

    }, [status])
    // Ensure products is an array and has items




    return (
        <section className='mt-22 pb-10'>
            <div className='flex  w-full justify-between  items-center py-5'>
                <h1 className='text-2xl py-5 mt-5  ml-10 px-10 font-Nunito-ExtraBold'>Your Orders ({orders?.length})</h1>


            </div>
            <div className="border-b border-gray-200 px-20  dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    {tabLinks.map((link, index) => {
                        const isActive =  status === link.route ;
                        return (
                            <li className="me-2" key={index}>
                                <Link
                                    href={`?status=${link.route}`}
                                    className={`inline-flex gap-2 items-center justify-center p-4 border-b-2 rounded-t-lg transition-colors
                                         ${isActive
                                            ? "text-primary-500 border-primary-500"
                                            : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}
                                >
                                    {link.icon}
                                    <span className="font-Nunito text-md">{link.label}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            {orders.length==0 ? <p className='text-red-500 italic font-Nunito text-sm text-center py-2'>Empty order items</p> : (
                  loading ? (<OrdersLoading />) : (
                    <div className=' px-20 py-5 flex flex-col gap-5'>
                       
                        {orders?.map((order, index) => (
                           
                            <OrderCard key={index} order={order} />
                        ))}
                    </div>
                )  
            )}
            
               
            
            

        </section>
    );

}

export default OrdersPage