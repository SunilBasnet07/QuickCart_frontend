'use client';
import React, { useState, useEffect } from 'react';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import placeholder from '@/image/placeholder.png';
import { decreasmentQuantity, increasmentQuantity, removeProduct } from '@/redux/cart/cartSlice';
import CartSummaryList from './CartSummaryList';

const CartList = () => {
  const { products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [selectedItems, setSelectedItems] = useState([]);

  // Select all items by default when cart changes
  useEffect(() => {
    setSelectedItems(products.map((p) => p.id));
  }, [products]);

  const toggleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedItems.length === products.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(products.map((p) => p.id));
    }
  };

  const removeProductFromCart = (item) => {
    dispatch(removeProduct(item));
  };

  // Filter only selected products
  const selectedProducts = products.filter((p) => selectedItems.includes(p.id));
  

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Cart Section */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            {/* Cart Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h1 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                <ShoppingBag className="h-6 w-6 text-indigo-600" />
                Shopping Cart
                <span className="text-sm font-normal text-gray-500 ml-2">
                  ({products.length} items)
                </span>
              </h1>

              {/* Select All */}
              {products.length > 0 && (
                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedItems.length === products.length}
                    onChange={toggleSelectAll}
                  />
                  Select All
                </label>
              )}
            </div>

            {/* Cart Items */}
            <div className="divide-y divide-gray-100">
              {products.map((item) => (
                <div key={item.id} className="p-6 flex flex-col sm:flex-row gap-4">
                  {/* Checkbox */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(item.id)}
                      onChange={() => toggleSelectItem(item.id)}
                    />
                  </div>

                  {/* Product Image */}
                  <div className="w-full sm:w-32 h-32 relative rounded-lg overflow-hidden bg-gray-50">
                    <Image
                      src={item?.imageUrls[0] || placeholder}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{item?.name?.split(" ").slice(0,4).join(" ")}</h3>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">{item?.brand}</span>
                        <p className="text-lg font-semibold text-indigo-600 mt-2">
                          ${item?.price?.toFixed(2)}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-gray-200 rounded-lg">
                          <button
                            onClick={() => dispatch(decreasmentQuantity(item))}
                            disabled={item.quantity <= 1}
                            className="p-2 text-gray-600 disabled:cursor-not-allowed hover:text-indigo-600 transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-4 py-2 text-gray-900 font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => dispatch(increasmentQuantity(item))}
                            disabled={item.quantity >= 5}
                            className="p-2 text-gray-600 disabled:cursor-not-allowed hover:text-indigo-600 transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeProductFromCart(item)}
                          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {products.length === 0 && (
                <div className="p-6 text-center text-gray-500">Your cart is empty.</div>
              )}
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <CartSummaryList selectedProducts={selectedProducts} className={"w-[400px]"} />
      </div>
    </div>
  );
};

export default CartList;
