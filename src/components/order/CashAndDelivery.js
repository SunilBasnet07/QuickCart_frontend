'use client'
import { CONFIRMED_STATUS, PENDIGN_STATUS } from '@/constant/orderStatus';
import React, { useEffect, useState } from 'react'
import Spinner from '../Spinner';
import Modal from '../Modal';
import clsx from 'clsx';
import { confirmOrder } from '@/api/order';
import { useRouter } from 'next/navigation';
import { ORDER_ROUTE } from '@/route/route';
import toast from 'react-hot-toast';
import { IoIosCash } from "react-icons/io";

const CashAndDelivery = ({ order }) => {
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();
    const processCashAndDelivery = async () => {

        try {
            setLoading(true);
            const response = await confirmOrder(order?._id, {
                status: "completed",
                transactionId: crypto.randomUUID(),
                paymentMethod: "cash"
            });
            response?.data;
            toast.success("cash and deliver confirmed", {
                autoClose: 750,
            })
            setShowModal(false)
            router.push(`${ORDER_ROUTE}/?status=${CONFIRMED_STATUS}`)
            router.refresh();


        } catch (err) {
            console.log(err?.data?.message || 'Payment confirmation failed');
        } finally {
            setLoading(false);
        }
    };


    return (
        <div>
            {
                order?.status?.includes(PENDIGN_STATUS) && (<button
                    onClick={() => setShowModal(true)}
                    className="bg-blue-500 hover:to-blue-600 gap-2 disabled:cursor-not-allowed 
               text-white font-semibold py-2 px-6 rounded-md transition-all duration-200 
               flex items-center justify-center shadow-md hover:shadow-lg"
                >
                    <IoIosCash className />
                    Cash and Deliver

                </button>)
            }

            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                onConfirm="conform"
                title="Cash and Deliver"
                message="Do you wnat to proceed to Purchace this orders?">
                <div>
                    <button onClick={processCashAndDelivery} className={clsx('px-4 py-2.5  font-Nunito-SemiBold text-gray-7 rounded-lg font-medium  text-white duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-blue-500 hover:bg-blue-600',
                        {
                            "bg-slate-400 hover:bg-slate-400 cursor-not-allowed": loading,
                        }
                    )}
                    >
                        <span className='mr-2'>Confirm</span>
                        {loading && <Spinner />}
                    </button>

                </div>
            </Modal>
        </div>
    )
}

export default CashAndDelivery