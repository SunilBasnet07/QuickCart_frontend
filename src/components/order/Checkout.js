'use client'
import { createOrder } from '@/api/order';
import { clearCart } from '@/redux/cart/cartSlice';
import { clearAddres } from '@/redux/shippingAddress/shippingSlice';
import { ABOUT_ROUTE, LOGIN_ROUTE, ORDER_ROUTE, SHIPPING_ADDRESS } from '@/route/route';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../Spinner';
import clsx from 'clsx';
import Modal from '../Modal';
import toast from 'react-hot-toast';

const CheckOutOrder = ({ selectedProducts }) => {
  const { user } = useSelector((state) => state.auth)
  const { address } = useSelector((state) => state.shipping)
  const { products, totalPrice } = useSelector((state) => state.cart)
  const [isDisable, setIsDisable] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    // Enable button if address has a city and cart has products
    if (selectedProducts?.length > 0 || address?.city) {
      setIsDisable(false);
    } else {
      setIsDisable(true);
    }
  }, [address, products, selectedProducts]);

  async function handleCheckout() {
    if (!user) {
      router.push(LOGIN_ROUTE);
      return;
    } else if (!address?.city || !products?.length) {
      router.push(SHIPPING_ADDRESS);
      return;
    }
    try {
      setLoading(true);
      await createOrder({
        orderItem: products?.map((item) => ({
          product: item?.id,
          quantity: item?.quantity,
        })),

        totalPrice: totalPrice,
        shippingAddress: {
          city: address?.city,
          province: address?.province,
          postalCode: address?.postalCode,
          streetAddress: address?.streetAddress
        }

      });
    
        dispatch(clearCart());
    
      dispatch(clearAddres());
      setShowModal(false);
      router.push(ORDER_ROUTE)
      
    } catch (error) {
      console.log(error?.message);
    } finally {
      setLoading(false);
    }


  }
  return (
    <div>
      <button
        disabled={isDisable || loading}
        aria-disabled={isDisable || loading}
        onClick={() => setShowModal(true)}
        className={clsx(
          "w-full mt-6 bg-gradient-to-r  from-indigo-600 to-purple-600 text-white rounded-xl py-3 px-4 font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2",
          {
            "bg-opacity-20 bg-white cursor-not-allowed": isDisable || loading,
          }
        )}
      >
        Proceed to Checkout
        {loading && <Spinner className={"w-5 h-5"} />}
      </button>
      <Modal
        isOpen={showModal}
        onClose={()=>setShowModal(false)}
        onConfirm="Conform"
        title="Checkout product"
        message="Do you wnat to checkout this product?">
        <div>
          <button onClick={handleCheckout} className={clsx('px-4 py-2.5 text-gray-7 cursor-pointer  rounded-lg font-Nunito-SemiBold  text-white duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-blue-500 hover:bg-blue-600',
            {
              "bg-opacity-20 bg-white cursor-not-allowed": isDisable || loading,
            }
          )}
          >
            Confirm
            {loading && <Spinner />}
          </button>

        </div>
      </Modal>
    </div>
  )
}

export default CheckOutOrder