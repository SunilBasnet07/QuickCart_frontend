'use client'
import { getAllOrders } from '@/api/order'
import OrderTable from '@/components/order/OrderTable';
import Spinner from '@/components/Spinner';
import { setOrderStatus } from '@/redux/order/orderSlice';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const OrderManagementPage = () => {

  const [orders, getOrders] = useState([])
  const [loading, setLoading] = useState(false)
  const { status } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    getAllOrders().then((data) => {
      getOrders(data);

    }).catch(error => console.log(error)).finally(() => {
      setLoading(false)
      dispatch(setOrderStatus(null))
    
    });
  }, [status, dispatch])

  return (
    <div className='px-5 py-5'>
      <h1 className="text-xl font-Nunito-Bold  py-5 ">Order Management ({orders?.length})</h1>
      {
        loading ? <Spinner/> : <OrderTable orders={orders} />
      }
    </div>
  )
}

export default OrderManagementPage