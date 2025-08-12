import clsx from 'clsx';
import React from 'react';

const Spinner = ({ className }) => {
  return (
    <span
      className={clsx(
        'inline-block align-middle',
        className
      )}
      aria-label="Loading"
      role="status"
    >
      <span className="block w-5 h-5 border-2 border-t-transparent border-white border-solid rounded-full animate-spin"></span>
      <style jsx>{`
        .animate-spin {
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </span>
  );
};

export default Spinner; 