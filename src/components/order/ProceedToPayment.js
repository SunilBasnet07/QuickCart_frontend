'use client'
import { checkoutOrder } from '@/api/order'
import { returnUrl, websiteUrl } from '@/config/apiUrl';
import React, { useState } from 'react'
import Modal from '../Modal';
import Spinner from '../Spinner';
import clsx from 'clsx';
import { FaCreditCard } from 'react-icons/fa';

const ProceedToPayment = ({ order }) => {
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  async function handlePayment() {
    setLoading(true);
    try {
      const response = await checkoutOrder(order?._id, {
        website_url: websiteUrl,
        return_url: `${websiteUrl}/orders/${order?._id}/payment`

      })
      window.location.href = response?.data?.payment_url;
      setShowModal(false)
    } catch (error) {
      console.log(error?.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div>
      {
        order?.status?.includes("pending") && (    <button
          onClick={() => setShowModal(true)}
          className="bg-[#5D2E8E] hover:bg-[#4b2473] gap-2 disabled:cursor-not-allowed 
                 text-white font-semibold py-2 px-6 rounded-md transition-all duration-200 
                 flex items-center justify-center shadow-md hover:shadow-lg"
        >
          <FaCreditCard className="h-5 w-5" />
          Pay Via Khalti
          
        </button>) 
      }
  
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm="conform"
        title="Proceed to Payment"
        message="Do you wnat to proceed to payment this orders?">
        <div>
          <button onClick={handlePayment} className={clsx('px-4 py-2.5  font-Nunito-SemiBold text-gray-7 rounded-lg font-medium  text-white duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-blue-500 hover:bg-blue-600',
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

export default ProceedToPayment