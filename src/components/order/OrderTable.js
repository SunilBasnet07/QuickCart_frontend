'use client'
import React from 'react'
import { IoCog } from "react-icons/io5";
import OrderStatus from './OrderStatus';
import { updateOrderByStatus } from '@/api/order';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { DELIVERED_STATUS, PENDIGN_STATUS, SHIPPED_STATUS } from '@/constant/orderStatus';
import { useDispatch } from 'react-redux';
import { setOrderStatus } from '@/redux/order/orderSlice';
import OrderDelete from './OrderDelete';

const OrderTable = ({ orders }) => {
    const dispatch = useDispatch();
    const router = useRouter();
    async function handleSubmit(e, orderId) {
        console.log(e, orderId)
        try {
            const value = e?.target?.value;
            await updateOrderByStatus(orderId, { status: value })
            toast.success("Order updated successfull.", {
                autoClose: 750,
            })
            dispatch(setOrderStatus("updated"));
            router.refresh();
        } catch (error) {
            console.log(error?.response?.data)
        }
    }


    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-[11px]">
                            Order Id
                        </th>
                        <th scope="col" className="px-6 py-3 text-[11px]">
                            Customer Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-[11px]">
                            Products
                        </th>
                        <th scope="col" className="px-6 py-3 text-[11px]">
                            Total Price
                        </th>
                        <th scope="col" className="px-6 py-3 text-[11px]">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3 text-[11px]">
                            (PM)
                        </th>
                        <th scope="col" className="px-6 py-3 text-[11px]">
                            Created At
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <IoCog className='h-5 w-5' />
                        </th>
                    </tr>

                </thead>

                <tbody>
                    {
                        orders?.map((item, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                <th
                                    scope="row"
                                    className="px-6 py-4 text-[11px] font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {item?.orderId}
                                </th>
                                <td className="px-6 py-4 text-[11px] capitalize">{item?.userId?.name}</td>
                                <td className="px-6 py-4 text-[10px]">
                                    <div className="flex flex-col gap-1">
                                        {item?.orderItem.map((order) => (
                                            <span key={order?.product?._id}>
                                                {order?.product?.name} x {order?.quantity}
                                            </span>
                                        ))}
                                    </div>
                                </td>

                                <td className="px-6 py-4 text-[11px]">Rs. {item?.totalPrice}</td>
                                <td className="px-6 py-4 ">
                                    <OrderStatus status={item?.status} />
                                </td>
                                <td className="px-6 py-4 text-[10px]">
                                    <OrderStatus paymentMethod={item?.paymentMethod} />
                                </td>
                                <td className="px-6 py-4 text-[10px]">{item?.createdAt}</td>
                                <td className="px-6 py-4 flex items-center gap-2">
                                    <select
                                        value={item?.status || ""}
                                        disabled={item?.status === PENDIGN_STATUS}
                                        onChange={(e) => handleSubmit(e, item?._id)}
                                        className="capitalize cursor-pointer disabled:cursor-not-allowed px-2 py-1.5 text-[11px] bg-slate-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                                    >
                                        <option value="" disabled>
                                            Select status
                                        </option>
                                        <option value={DELIVERED_STATUS}>Delivered</option>
                                        <option value={SHIPPED_STATUS}>Shipping</option>
                                        <option value={PENDIGN_STATUS}>Cancel</option>
                                        
                                    </select>

                                    <OrderDelete id={item?._id} />

                                </td>

                            </tr>
                        ))
                    }


                </tbody>
            </table>
        </div>

    )
}

export default OrderTable
