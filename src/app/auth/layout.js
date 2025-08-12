'use client'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux'

const Layout = ({children}) => {
// const {user,error} = useSelector((state)=>state.auth);
// useEffect(()=>{
//     if(user){
//         toast.success("Login successfull")
//     }
//     if(error){
//         toast.error(error)
//     }
// },[user,error])
  return (
    <div>{children}</div>
  )
}

export default Layout