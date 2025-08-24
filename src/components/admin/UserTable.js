'use client'
import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import userPlaceHolder from '@/image/userplaceholder.png'
import { FaRegUser } from "react-icons/fa";
import Image from 'next/image';
import { IoCog } from "react-icons/io5";
import { PenLine, Plus, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { deleteUser } from '@/api/user';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { setUserStatus } from '@/redux/user/userSlice';
import Modal from '../Modal';
import clsx from 'clsx';
import Spinner from '../Spinner';
import CreateUserModal from './CreateUserModal';
import UserSearch from '../user/filters/UserSearch';

const UserTable = ({ getUsers }) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showUserModal, setShowUserModal] = useState(false);
    const [getId, setGetId] = useState(null);

    const userHeader = [
        {
            label: "SN."
        },
        {
            label: "UserName"
        },
        {
            label: "UserId"
        },
        {
            label: "Number"
        },
        {
            label: "Roles"
        },
        {
            label: <IoCog className='h-5 w-5' />
        },
    ]
    async function handleDelete() {
        try {
            setLoading(true);
            await deleteUser(getId)
            toast.success("User deleted successfull.", {
                autoClose: 1500,
            })
            dispatch(setUserStatus("deleted"))
            setShowDeleteModal(false)
        } catch (error) {
            console.log(error?.response?.data)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex items-center py-3 justify-between flex-column flex-wrap md:flex-row space-y-6 md:space-y-0 pb-5 bg-white dark:bg-gray-900">
               <UserSearch/>

               
                <button onClick={()=>setShowUserModal(true)} className='px-3 py-1 flex items-center gap-1 bg-primary-500 hover:bg-primary-600 text-white font-Nunito-SemiBold rounded-md'>
                    <Plus className='h-5 w-5' /> Create User</button>
            </div>

            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>

                        {
                            userHeader.map((item, index) => (
                                <th key={index} scope="col" className="px-6 py-3 font-Nunito-Bold">
                                    {item?.label}
                                </th>
                            ))
                        }

                    </tr>
                </thead>
                <tbody>
                    {
                        getUsers.map((user, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="w-4 text-center p-4">
                                    {index + 1}
                                </td>
                                <th
                                    scope="row"
                                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    <Image
                                        className="w-10 h-10 rounded-full"
                                        height={100}
                                        width={100}
                                        src={user?.profileImageUrl || userPlaceHolder}
                                        alt="Jese image"
                                    />
                                    <div className="ps-3">
                                        <div className="text-base font-Nunito-SemiBold capitalize">{user?.name}</div>
                                        <div className="font-Nunito text-sm text-gray-500">
                                            {user?.email}
                                        </div>
                                    </div>
                                </th>
                                <td className="px-6 py-4 italic">#{user?._id}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">

                                        {user?.number}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="">
                                        {user?.roles[0]}
                                        {/* {user?.roles[1]} */}
                                        {/* {user?.roles.map((role)=>(
                                               {role}
                                        ))} */}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline" >
                                        <div className="flex items-center gap-2 mr-3">
                                            <button onClick={() => {
                                                setShowDeleteModal(true)
                                                setGetId(user?._id)
                                            }}>

                                                <Trash2 className="w-4 h-4 hover:text-red-500 cursor-pointer" />
                                            </button>
                                            <Link href="#" >
                                                <PenLine className="w-4 h-4 hover:text-indigo-500 cursor-pointer" />
                                            </Link>

                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }

                    {/* Repeat other rows the same way */}
                </tbody>
            </table>

            <Modal
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm="Delete"
                title="Delete User"
                message="Do you wnat to delete this User?">
                <div>
                    <button onClick={() => handleDelete()} className={clsx('px-4 py-2.5  font-Nunito-SemiBold text-gray-7 rounded-lg font-medium  text-white duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-blue-500 hover:bg-blue-600',
                        {
                            "bg-slate-400 hover:bg-slate-400 cursor-not-allowed": loading,
                        }
                    )}
                    >
                        <span className='mr-2'>Delete</span>
                        {loading && <Spinner />}
                    </button>

                </div>
            </Modal>
            <CreateUserModal
                showModal={showUserModal}
                setShowModal={setShowUserModal}
            />


        </div>

    )
}

export default UserTable