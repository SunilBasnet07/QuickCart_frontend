'use client'
import { getAllUsers } from '@/api/user'
import UserTable from '@/components/admin/UserTable'
import { setUserStatus } from '@/redux/user/userSlice'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AdminUserManagementPage = () => {
  const [getUsers, setGetUsers] = useState([])
   const dispatch = useDispatch();
   const searchParams= useSearchParams()
   const params = searchParams.get("filters")

   const {status}= useSelector((state)=>state.user);
   
  useEffect(() => {
    getAllUsers(params).then((response) => {
      setGetUsers(response)
      console.log(response);
    }).catch((error => console.log(error?.response?.data))).finally(()=>{
      dispatch(setUserStatus(null));
    })
  }, [status])

  return (
    <div className='px-5 py-5'>
      <h1 className="text-xl font-Nunito-Bold  py-5 ">User Management</h1>
      <UserTable getUsers={getUsers} />
    </div>
  )
}

export default AdminUserManagementPage