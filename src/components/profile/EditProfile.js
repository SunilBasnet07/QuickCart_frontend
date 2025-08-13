'use client'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { User, Camera, Mail, Phone, MapPin, Calendar, Lock, KeyRound } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { editProfile, getUserById } from '@/api/user'
import toast from 'react-hot-toast'
import { updatedUser } from '@/redux/auth/authSlice'
import Spinner from '../Spinner'
import { FaCity } from "react-icons/fa";
import { TbSolarElectricity } from "react-icons/tb";

const EditProfile = () => {
    const { user } = useSelector((state) => state.auth)
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    console.log(user);
    const { register, handleSubmit } = useForm({
        defaultValues: {
            ...user, 
                city: user?.address?.city || "",
                province: user?.address?.province || "",
                country: user?.address?.country || "",
            
        }
    });
    async function submitForm(data) {
        try {
            setLoading(true)
            await editProfile(user?.id, {
                ...data, address: {
                    city: data.city,
                    province: data.province,
                    country: data.country,
                }
            })
            const newUser = await getUserById(user?.id);
            dispatch(updatedUser({
                ...newUser, address: {
                    city: newUser?.address?.city,
                    province: newUser?.address?.province,
                    country: newUser?.address?.country,
                }
            }));
            toast.success("Profile updated successfull", {
                autoClose: 750,
            })

        } catch (error) {
            console.log(error?.response?.data)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className=" mx-full px-4 sm:px-6 lg:px-8 py-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative">
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute -bottom-12 left-6">

                    </div>
                </div>

                <div className="pt-16 p-6 sm:p-8">
                    <div className="mb-6">
                        <h2 className="text-2xl font-Poppins-Bold text-gray-900">Edit Profile</h2>
                        <p className="text-gray-600 font-Nunito">Update your personal information and account settings</p>
                    </div>

                    <form className="space-y-8" onSubmit={handleSubmit(submitForm)}>

                        <div className="bg-white rounded-xl w-full border border-gray-100 p-6">
                            <h3 className="text-lg font-Poppins-Bold text-gray-900 mb-4">Personal Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-Nunito-SemiBold text-gray-700">Full Name</label>
                                    <div className="relative">
                                        <User className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                                        <input {...register("name")} className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-Nunito" defaultValue={user?.name || ''} placeholder="Enter your full name" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-Nunito-SemiBold text-gray-700">Email</label>
                                    <div className="relative">
                                        <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                                        <input disabled className="w-full pl-10 pr-4 py-3 disabled:cursor-not-allowed rounded-xl border border-gray-200 bg-gray-50 text-gray-600 font-Nunito" defaultValue={user?.email || ''} placeholder="Enter your email" readOnly />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-Nunito-SemiBold text-gray-700">Phone</label>
                                    <div className="relative">
                                        <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                                        <input {...register("number")} className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-Nunito" defaultValue={user?.phone || ''} placeholder="Enter your phone number" />
                                    </div>
                                </div>
                                {/* <div className="space-y-2">
                                    <label className="text-sm font-Nunito-SemiBold text-gray-700">Location</label>
                                    <div className="relative">
                                        <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                                        <input  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-Nunito" defaultValue={user?.location || ''} placeholder="City, Country" />
                                    </div>
                                </div> */}
                                {/* ---Address info ---- */}
                                <div className="md:col-span-2 space-y-2" >
                                    <div className="bg-white rounded-xl border border-gray-100 p-6">
                                        <h3 className="text-lg font-Poppins-Bold text-gray-900 mb-4">Address</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="space-y-2">
                                                <label className="text-sm font-Nunito-SemiBold text-gray-700">City</label>
                                                <div className="relative">
                                                    <FaCity className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                                                    <input {...register("city")} type="text" defaultValue={user?.address?.city || ''}  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-Nunito" placeholder="City" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-Nunito-SemiBold text-gray-700">Province</label>
                                                <div className="relative">
                                                    <TbSolarElectricity className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                                                    <input {...register("province")} defaultValue={user?.address?.province || ''}  type="text" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-Nunito" placeholder="Province" />
                                                </div>
                                            </div>
                                            <div className="md:col-span-2 space-y-2">
                                                <label className="text-sm font-Nunito-SemiBold text-gray-700">Country</label>
                                                <input {...register("country")} defaultValue={user?.address?.country || ''}  type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-Nunito" placeholder="Country" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-Nunito-SemiBold text-gray-700">Bio</label>
                                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-Nunito" placeholder="Tell us a bit about yourself" defaultValue={user?.bio || ''} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-Nunito-SemiBold text-gray-700">Joined</label>
                                    <div className="relative">
                                        <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                                        <input className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-600 font-Nunito" defaultValue={user?.createdAt ? new Date(user.createdAt).toDateString() : ''} readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>
                       {/* ----- change password ---- */}
                        {/* <div className="bg-white rounded-xl border border-gray-100 p-6">
                            <h3 className="text-lg font-Poppins-Bold text-gray-900 mb-4">Security</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-Nunito-SemiBold text-gray-700">Current Password</label>
                                    <div className="relative">
                                        <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                                        <input type="password" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-Nunito" placeholder="Enter current password" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-Nunito-SemiBold text-gray-700">New Password</label>
                                    <div className="relative">
                                        <KeyRound className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                                        <input type="password" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-Nunito" placeholder="Enter new password" />
                                    </div>
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-Nunito-SemiBold text-gray-700">Confirm New Password</label>
                                    <input type="password" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent font-Nunito" placeholder="Re-enter new password" />
                                </div>
                            </div>
                        </div> */}

                        <div className="flex items-center justify-end gap-3">
                           
                            <button disabled={loading} className="px-5 py-3 flex gap-2 items-center  disabled:cursor-not-allowed disabled:bg-slate-400 rounded-xl font-Nunito-SemiBold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm hover:shadow transition-all">
                                Save Changes {loading && <Spinner />}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditProfile