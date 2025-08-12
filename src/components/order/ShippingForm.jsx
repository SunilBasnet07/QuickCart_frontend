'use client';
import React, { useState } from 'react';
import { MapPin, Truck, CreditCard, Shield, Package } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { shippingAddress } from '@/redux/shippingAddress/shippingSlice';
import CartSummaryList from '../cart/CartSummaryList';
import Spinner from '../Spinner';
import clsx from 'clsx';
import toast, { ToastBar } from 'react-hot-toast';

const ShippingForm = () => {
  const { register, handleSubmit ,reset} = useForm();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  function submitForm(data) {
    try {
      setLoading(true);
      dispatch(shippingAddress(data))
      toast.success("Shipping Address form submitted", {
        autoClose: 750,
      })
    } catch (error) {
      console.log(error.massege)

    } finally {
      setLoading(false)
      reset();
    }
  }
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        {/* Form Header */}
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
            <Truck className="h-6 w-6 text-indigo-600" />
            Shipping Information
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Please provide your shipping details to complete your order
          </p>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <form className="space-y-8" onSubmit={handleSubmit(submitForm)} >
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                <Shield className="h-5 w-5 text-indigo-600" />
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("number")}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-indigo-600" />
                Shipping Address
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    {...register("name")}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Street Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    {...register("streetAddress")}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="1234 Main St"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    {...register("city")}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="New York"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    State/Province
                  </label>
                  <input
                    type="text"
                    id="state"
                    {...register("province")}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="NY"
                  />
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP/Postal Code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    {...register("postalCode")}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="10001"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    {...register("country")}
                    value={"Nepal"}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="10001"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Method */}
            {/* <div className="space-y-6">
              <h2 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                <Package className="h-5 w-5 text-indigo-600" />
                Shipping Method
              </h2>
              <div className="space-y-4">
                <div className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-indigo-500 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    id="standard"
                    name="shipping"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="standard" className="ml-3 flex-1">
                    <div className="flex justify-between">
                      <div>
                        <span className="block text-sm font-medium text-gray-900">Standard Shipping</span>
                        <span className="block text-sm text-gray-500">3-5 business days</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">Free</span>
                    </div>
                  </label>
                </div>
                <div className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-indigo-500 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    id="express"
                    name="shipping"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor="express" className="ml-3 flex-1">
                    <div className="flex justify-between">
                      <div>
                        <span className="block text-sm font-medium text-gray-900">Express Shipping</span>
                        <span className="block text-sm text-gray-500">1-2 business days</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">$9.99</span>
                    </div>
                  </label>
                </div>
              </div>
            </div> */}


            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-100">
              <button
                type="submit"
                disabled={loading}
                className={clsx("w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl py-3 px-4 font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2",
                  {
                    "bg-opacity-10  cursor-not-allowed": loading,
                  }
                )}
              >
                <CreditCard className="h-5 w-5" />
                submit
                {loading && <Spinner />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShippingForm; 