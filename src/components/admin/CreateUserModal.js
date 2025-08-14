'use client'
import { createUser } from '@/api/user';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { RxCross2 } from "react-icons/rx";
import Spinner from '../Spinner';
import { useDispatch } from 'react-redux';
import { setUserStatus } from '@/redux/user/userSlice';

const CreateUserModal = ({ showModal, setShowModal }) => {
    // const [showModal, setShowModal] = useState(true);
    const [getRole, setGetRole] = useState('');
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();
    async function submitForm(data) {
        try {
            setLoading(true)
             await createUser({ ...data, roles: [getRole] });
            toast.success("User Create Successfull.", {
                auotClose: 1500,
            })
            dispatch(setUserStatus("create user"))
            setShowModal(false);
            reset();

        } catch (error) {
            toast.error(error?.response?.data)
        } finally {
            setLoading(false)
          
        }
    }

    return (
        <div
            id="crud-modal"
            tabIndex="-1"
            aria-hidden="true"
            className={`${showModal ? "fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300" : "hidden"}`}
        >
            <div className="fixed inset-0 z-50 mt-20 flex items-center justify-center p-4">
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700 w-full max-w-lg">
                    {/* Modal header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600 rounded-t">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Create New User
                        </h3>
                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            <RxCross2 className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Modal body */}
                    <form className="p-4 md:p-5 space-y-4 " onSubmit={handleSubmit(submitForm)}>
                        <div>
                            <label
                                htmlFor="fullName"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                UserName
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                id="fullName"
                                {...register("name")}
                                placeholder="Enter full name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required
                            />
                        </div>

                        <div className='flex w-full gap-3'>
                            <div className='w-1/2'>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    {...register("email")}
                                    id="email"
                                    placeholder="Enter email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>
                            <div className='w-1/2'>
                                <label
                                    htmlFor="number"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Number
                                </label>
                                <input
                                    type="number"
                                    name="number"
                                    id="number"
                                    {...register("number")}
                                    placeholder="Enter number"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="role"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Role
                            </label>
                            <select
                                id="role"
                                name="role"
                                onChange={(e) => setGetRole(e.target.value)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required
                            >
                                <option value="">Select role</option>
                                <option value="ADMIN">Admin</option>
                                <option value="USER">User</option>
                                <option value="MERCHANT">Merchant</option>
                            </select>
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Password
                            </label>
                            <input
                                type="text"
                                name="password"
                                {...register("password")}
                                id="password"
                                placeholder="Enter password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                required
                            />
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full disabled:cursor-pointer flex gap-2 text-md justify-center items-center disabled:bg-slate-400 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-Nunito-Bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
                        >
                            Create User {loading && <Spinner className={"h-1,w-1"} />}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUserModal
