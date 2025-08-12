'use client'
import React from 'react'
import { GiPieChart } from "react-icons/gi";
import { FaUsersCog } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { DASHBOARD, ORDER_MANAGEMENT, PRODUCT_MANAGEMENT, USER_MANAGEMENT } from '@/route/route';
const AdminSidebar = () => {
    const pathname = usePathname();
    const sideBarMenue = [
        {
            route: DASHBOARD,
            label: "Dashboard",
            icon: <GiPieChart className='w-5 h-5 text-gray-500' />,
        },
        {
            route: USER_MANAGEMENT,
            label: "User Management",
            icon: <FaUsersCog className='w-5 h-5 text-gray-500' />,

        },
        {
            route: PRODUCT_MANAGEMENT,
            label: "Product Management",
            icon: <HiOutlineShoppingCart className='w-5 h-5 text-gray-500' />,

        },
        {
            route: ORDER_MANAGEMENT,
            label: "Order Management",
            icon: <HiOutlineShoppingCart className='w-5 h-5 text-gray-500' />,

        }
    ]
    return (
        <aside
            id="default-sidebar"
            className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
            aria-label="Sidebar"
        >
            <div className="h-full px-3 pt-28 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium">

                    {
                        sideBarMenue.map((menue, index) => {
                            const activeLink = pathname == menue?.route;
                            return (
                                <li key={index}>
                             
                                <Link
                                    href={menue.route}
                                    className={clsx(
                                        "flex items-center p-2  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group",
                                        { "bg-gray-200": activeLink })}
                                >
                                    {menue.icon}
                                    <p className="flex-1 ms-3 font-Nunito-SemiBold text-md whitespace-nowrap">{menue.label}</p>

                                </Link>
                            </li>
                            )
                           
                        })
                    }




                </ul>
            </div>
        </aside>

    )
}

export default AdminSidebar