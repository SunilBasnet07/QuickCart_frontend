'use client';

import React, { useState } from 'react';
import AddProductForm from './AddProductForm';

const AddProductButton = ({ onProductAdded }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleProductAdded = (newProduct) => {
    if (onProductAdded) {
      onProductAdded(newProduct);
    }
    setIsFormOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsFormOpen(true)}
        className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-xl"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        Add Product
      </button>

      <AddProductForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onProductAdded={handleProductAdded}
      />
    </>
  );
};

export default AddProductButton; 