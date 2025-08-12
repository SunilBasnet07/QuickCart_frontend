'use client'
import AdminSidebar from '@/components/admin/AdminSidebar'
import { HOME_ROUTE } from '@/route/route'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const AdminLayout = ({ children }) => {
    const { user } = useSelector((state) => state.auth);
 
    const router = useRouter();
    useEffect(() => {
        if (typeof user !== 'object' || !user?.roles?.includes("ADMIN")) {
            return router.push(HOME_ROUTE)
          }
          
       
    }, [user, router])
    return (
        <div className='mt-28 grid col-span-2'>
            <div><AdminSidebar /></div>
            <div className='ml-64'>
                {children}
            </div>

        </div>
    )
}

export default AdminLayout