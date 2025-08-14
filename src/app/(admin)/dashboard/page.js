import DashboardCard from '@/components/admin/dashboard/Card'
import Order from '@/components/admin/dashboard/Order'
import React from 'react'

const AdminDashboardPage = () => {
  return (
    <div className='px-5 '>
      <h1 className="text-xl font-Nunito-Bold  ">Dashboard</h1>
      <Order />
    </div>
  )
}

export default AdminDashboardPage