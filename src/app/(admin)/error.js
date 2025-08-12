'use client'
import React from 'react'

const AdminError = ({error}) => {
  return (
    <div className='h-full flex justify-center items-center text-md text-red-500'>{error.message}</div>
  )
}

export default AdminError