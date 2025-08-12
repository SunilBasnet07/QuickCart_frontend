'use client'
import React, { useState } from 'react';
import { Trash2, X, AlertTriangle } from 'lucide-react';

const Modal = ({
  isOpen=false,
  onClose,
  onConfirm,
  action,
  actionLoading,
  title,
  message,
  itemName = "",
  isLoading = false,
  children
}) => {
 



  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
        onClick={()=>onClose(false)}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                {itemName && (
                  <p className="text-sm text-gray-500">{itemName}</p>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
           
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-gray-600 mb-6 leading-relaxed">
              {message}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-between items-center">
              <button
                onClick={onClose}
               
                className=" px-4 py-2.5 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
          
              <div className="  dark:text-white">
                {children}
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Modal; 