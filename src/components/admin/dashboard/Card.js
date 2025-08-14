import React from 'react'


const DashboardCard = ({label,count,className,icon}) => {
    return (
    
            <div className={`max-w-sm ${className} max-h-[140px] p-4  border border-green-200 rounded-lg shadow-sm `}>
               {icon}
                <a href="#">
                    <h5 className="mb-1 text-xl  font-Nunito-Bold tracking-tight text-white dark:text-white">
                       {label}
                    </h5>
                </a>
                <p className=" font-normal text-2xl  text-white dark:text-gray-400">
                   {count}
                </p>

            </div>
           

    )
}

export default DashboardCard