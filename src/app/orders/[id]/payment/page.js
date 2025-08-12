'use client'
import { confirmOrder } from '@/api/order';
import { useParams, useSearchParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaCheckCircle, FaTimesCircle, FaHome, FaShoppingBag } from 'react-icons/fa'
import Spinner from '@/components/Spinner'
import { ORDER_ROUTE } from '@/route/route';
import { CONFIRMED_STATUS } from '@/constant/orderStatus';

const PaymentPage = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = params.id;
  const status = searchParams.get("status");
  const transactionId = searchParams.get("transaction_id");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orderData, setOrderData] = useState(null);


  useEffect(() => {
    const processPayment = async () => {
      try {
        setLoading(true);
        const response = await confirmOrder(id, { status:status.toLowerCase(), transactionId });
        setOrderData(response?.data);
        setError(null);
      } catch (err) {
        setError(err?.data?.message || 'Payment confirmation failed');
      } finally {
        setLoading(false);
      }
    };

    if (id && status && transactionId) {
      processPayment();
    } else {
      setError('Invalid payment parameters');
      setLoading(false);
    }
  }, [id, status, transactionId]);

  const handleContinueShopping = () => {
    router.push('/');
  };

  const handleViewOrders = () => {
    router.push(`${ORDER_ROUTE}?status=${CONFIRMED_STATUS}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4">
            <Spinner className="w-16 h-16 border-4 border-blue-600 border-t-transparent" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Processing Payment</h2>
          <p className="text-gray-600">Please wait while we confirm your payment...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-6">
            <FaTimesCircle className="h-8 w-8 text-red-600" />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900  mb-4 font-Nunito-Bold">Payment Failed</h1>
          <p className="text-gray-600 font-Nunito mb-6">{error}</p>
          
          <div className="space-y-3">
            <button
              onClick={handleContinueShopping}
              className="w-full bg-blue-600 font-Nunito-SemiBold text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <FaHome className="h-5 w-5" />
              Continue Shopping
            </button>
            <button
              onClick={handleViewOrders}
              className="w-full bg-gray-200 font-Nunito-SemiBold text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <FaShoppingBag className="h-5 w-5" />
              View Orders
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Success state
  return (
    <div className="min-h-screen bg-gray-50 flex items-center  justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg mt-[35px] shadow-lg p-8 text-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
          <FaCheckCircle className="h-8 w-8 text-green-600" />
        </div>
        
        <h1 className="text-2xl font-Nunito-Bold text-gray-900 mb-4">Payment Successful!</h1>
        <p className="text-gray-600 font-Nunito mb-6">
          Thank you for your purchase. Your order has been confirmed and will be processed soon.
        </p>
        
        {orderData && (
          <div className="bg-gray-50 rounded-lg p-4 mt-10 mb-6 text-left">
            <h3 className="font-semibold text-gray-800 font-Nunito-SemiBold mb-2">Order Details</h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p><span className="font-Nunito">Order ID:</span> #{orderData.orderId || id}</p>
              <p><span className="font-Nunito">Transaction ID:</span> {transactionId}</p>
              <p><span className="font-Nunito">Status:</span> 
                <span className="ml-1 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                  {status}
                </span>
              </p>
            </div>
          </div>
        )}
        
        <div className="space-y-3">
          <button
            onClick={handleContinueShopping}
            className="w-full bg-blue-600 text-white font-Nunito-SemiBold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <FaHome className="h-5 w-5" />
            Continue Shopping
          </button>
          <button
            onClick={handleViewOrders}
            className="w-full bg-gray-200 text-gray-800 font-Nunito-SemiBold py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <FaShoppingBag className="h-5 w-5" />
            View Orders
          </button>
        </div>
        
        <p className="text-xs text-gray-500 font-Nunito mt-6">
          You will receive an email confirmation shortly with your order details.
        </p>
      </div>
    </div>
  );
};

export default PaymentPage


