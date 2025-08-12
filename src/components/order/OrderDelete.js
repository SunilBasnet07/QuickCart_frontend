'use client'
import { deleteOrder } from '@/api/order';
import { setOrderStatus } from '@/redux/order/orderSlice';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import Spinner from '../Spinner';
import clsx from 'clsx';
import Modal from '../Modal';

const OrderDelete = ({ id }) => {
    const dispatch = useDispatch();
    const [showDeleteModal,setShowDeleteModal]=useState(false);
    const [loading,setLoading]=useState(false);
    async function handleDelete() {
        try {
            setLoading(true)
            const response = await deleteOrder(id)
            toast.success(response?.message, {
                autoClose: 750,
            });
            dispatch(setOrderStatus("deleted"));
            setShowDeleteModal(false)
    
        } catch (error) {
            console.log(error?.response?.data)
        }finally{
            setLoading(false)
        }
    }
    return (
       <div>
         <button onClick={()=>setShowDeleteModal(true)}>
            <MdDelete className='text-red-400 h-4 w-4 hover:cursor-pointer hover:text-red-600' />
        </button>
             <Modal
             isOpen={showDeleteModal}
             onClose={() => setShowDeleteModal(false)}
             
             title="Delete Order"
             message="Are you sure you want to delete this Order? This action cannot be undone."
             
         >
             <div>
                 <button onClick={handleDelete} disabled={loading} className={clsx('px-4 py-2.5 text-gray-7 rounded-lg font-medium  text-white duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-blue-500 hover:bg-blue-600',
                     {
                         "bg-opacity-20 bg-white cursor-not-allowed": loading,
                     }
                 )}
                 >
                     Delete
                     {loading && <Spinner />}
                 </button>

             </div>
         </Modal>
       </div>
    )
}

export default OrderDelete