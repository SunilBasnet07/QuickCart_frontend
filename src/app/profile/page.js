'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
    User,
    Mail,
    Phone,
    MapPin,
    Calendar,
    Edit3,
    Camera,
    Shield,
    CreditCard,
    Package,
    Heart,
    Star,
    Settings,
    Bell,
    Lock,
    Globe,
    Palette,
    Moon,
    Sun,
    LogOut,
    ChevronRight,
    CheckCircle,
    AlertCircle
} from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { getUserById, uploadProfile } from '@/api/user';
import { updatedUser } from '@/redux/auth/authSlice';
import toast from 'react-hot-toast';
import Spinner from '@/components/Spinner';
import EditProfile from '@/components/profile/EditProfile';

const UserProfilePage = () => {
    const { user } = useSelector((state) => state.auth);
    const [activeTab, setActiveTab] = useState('profile');
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
    const [file, getFile] = useState(null);
    const formData = new FormData();
    const dispatch = useDispatch();

    const fileInputRef = useRef(null);

    const handleFileSelect = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (event) => {
        const file = (event.target.files[0]);
        if (file) {

            getFile(file)
            setPreviewImage(URL.createObjectURL(file));

            // You can now upload or preview the file
        }
    };
    async function editProfile() {
        try {
            setLoading(true)
            formData.append("image", file);
            await uploadProfile(formData);
            const newUser = await getUserById(user?.id);
            dispatch(updatedUser(newUser));
            toast.success("Profile Image Upoaded successfull", {
                autoClose: 1500
            })
        } catch (error) {
            console.log(error?.response?.data)
        }finally{
            setLoading(false);
        }
    }
//   ---order----


    // Mock data - replace with actual user data
    const userData = {
        name: user?.name || 'John Doe',
        email: user?.email || 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        avatar: '/api/placeholder/150/150',
        location: 'New York, NY',
        joinDate: 'January 2023',
        orders: 24,
        reviews: 8,
        wishlist: 12,
        totalSpent: '$1,247.89'
    };

    const tabs = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'orders', label: 'Orders', icon: Package },
        { id: 'wishlist', label: 'Wishlist', icon: Heart },
        { id: 'EditProfile', label: 'Edit Profile', icon: Star },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };
    const renderProfileTab = () => (
        <motion.div variants={itemVariants} className="space-y-6">
            {/* Profile Header */}
            <div className="relative">
                <div className="h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-20 left-6">
                        <div className="relative">
                            <div className="group w-24 h-24 rounded-full bg-white p-1 shadow-lg  hover:shadow-xl">
                                <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center  transition-colors group-hover:from-indigo-200 group-hover:to-purple-200">
                                    {previewImage || user?.profileImageUrl ? (
                                        <Image
                                            src={previewImage || user.profileImageUrl}
                                            height={100}
                                            width={100}
                                            alt="user profile"
                                            className="rounded-full object-cover"
                                        />
                                    ) : (
                                        <User className="w-12 h-12 text-indigo-600 " />
                                    )}

                                </div>
                                <button
                                    onClick={editProfile}
                                    disabled={loading}
                                    className="bg-slate-700 absolute disabled:cursor-not-allowed   disabled:bg-slate-400 -right-36  bottom-6 text-sm cursor-pointer hover:bg-slate-800 text-white w-[130px] justify-center py-3 px-3 rounded-xl font-Nunito-SemiBold transition-all duration-200 hover:shadow-lg flex items-center gap-2"
                                >
                                  
                                   
                                    Edit profile
                                    {
                                        loading ? <Spinner/> :  <Edit3 className="w-4 h-4" />
                                    }
                                   
                                </button>
                            </div>

                            {/* Camera button */}
                            <button
                                onClick={handleFileSelect}
                                className="absolute -bottom-1 -right-1 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
                            >
                                <Camera className="w-4 h-4 text-gray-600" />
                            </button>

                            {/* Hidden file input */}
                            <input
                                type="file"
                                accept="image/*"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                className="hidden"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-16 ml-6">
                    <div className="flex items-center justify-between">
                        <div className=''>
                            <h1 className="text-2xl font-Nunito-Bold capitalize  text-gray-900">{userData?.name}</h1>
                            <p className="text-gray-600 font-Nunito">Member since {userData.joinDate}</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                    { label: 'Total Orders', value: userData.orders, icon: Package, color: 'from-blue-500 to-blue-600' },
                    { label: 'Reviews', value: userData.reviews, icon: Star, color: 'from-yellow-500 to-yellow-600' },
                    { label: 'Wishlist', value: userData.wishlist, icon: Heart, color: 'from-pink-500 to-pink-600' },
                    { label: 'Total Spent', value: userData.totalSpent, icon: CreditCard, color: 'from-green-500 to-green-600' },
                ].map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        variants={itemVariants}
                        className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-4`}>
                            <stat.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-Poppins-Bold text-gray-900 mb-1">{stat.value}</h3>
                        <p className="text-gray-600 font-Nunito text-sm">{stat.label}</p>
                    </motion.div>
                ))}
            </div>

            {/* Personal Information */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-Poppins-Bold text-gray-900 mb-6 flex items-center gap-2">
                    <User className="w-5 h-5 text-indigo-600" />
                    Personal Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { label: 'Full Name', value: userData.name, icon: User },
                        { label: 'Email Address', value: userData.email, icon: Mail },
                        { label: 'Phone Number', value: user?.number, icon: Phone },
                        { label: 'Location', value: user?.address?.city, icon: MapPin },
                    ].map((field, index) => (
                        <div key={field.label} className="space-y-2">
                            <label className="text-sm font-Nunito-SemiBold text-gray-700 flex items-center gap-2">
                                <field.icon className="w-4 h-4 text-indigo-600" />
                                {field.label}
                            </label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    defaultValue={field.value}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 font-Nunito"
                                />
                            ) : (
                                <p className="text-gray-900 font-Nunito py-3">{field.value}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );

    const renderOrdersTab = () => (
        <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-Poppins-Bold text-gray-900 mb-6">Recent Orders</h3>
                <div className="space-y-4">
                    {[1, 2, 3].map((order) => (
                        <div key={order} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                                    <Package className="w-6 h-6 text-indigo-600" />
                                </div>
                                <div>
                                    <h4 className="font-Nunito-SemiBold text-gray-900">Order #{1000 + order}</h4>
                                    <p className="text-sm text-gray-600">Delivered on Dec 15, 2024</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-Nunito-SemiBold">Delivered</span>
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );

    const renderWishlistTab = () => (
        <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-Poppins-Bold text-gray-900 mb-6">My Wishlist</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="group cursor-pointer">
                            <div className="bg-gray-100 rounded-xl p-4 aspect-square flex items-center justify-center mb-3 group-hover:bg-gray-200 transition-colors">
                                <Heart className="w-8 h-8 text-pink-500" />
                            </div>
                            <h4 className="font-Nunito-SemiBold text-gray-900">Product Name {item}</h4>
                            <p className="text-sm text-gray-600">$99.99</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );

    const renderReviewsTab = () => (
        <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-Poppins-Bold text-gray-900 mb-6">My Reviews</h3>
                <div className="space-y-4">
                    {[1, 2, 3].map((review) => (
                        <div key={review} className="p-4 border border-gray-100 rounded-xl">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className={`w-4 h-4 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                                    ))}
                                </div>
                                <span className="text-sm text-gray-600">2 days ago</span>
                            </div>
                            <p className="text-gray-700 font-Nunito">Great product! Highly recommend it to everyone.</p>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );

    const renderSettingsTab = () => (
        <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-Poppins-Bold text-gray-900 mb-6">Account Settings</h3>

                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                                <Bell className="w-5 h-5 text-indigo-600" />
                            </div>
                            <div>
                                <h4 className="font-Nunito-SemiBold text-gray-900">Notifications</h4>
                                <p className="text-sm text-gray-600">Manage your notification preferences</p>
                            </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                <Shield className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                                <h4 className="font-Nunito-SemiBold text-gray-900">Privacy & Security</h4>
                                <p className="text-sm text-gray-600">Control your privacy settings</p>
                            </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>

                    <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <Palette className="w-5 h-5 text-purple-600" />
                            </div>
                            <div>
                                <h4 className="font-Nunito-SemiBold text-gray-900">Appearance</h4>
                                <p className="text-sm text-gray-600">Customize your experience</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="w-12 h-6 bg-gray-200 rounded-full p-1 transition-colors"
                        >
                            <div className={`w-4 h-4 rounded-full bg-white transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}>
                                {darkMode ? <Moon className="w-4 h-4 text-gray-600" /> : <Sun className="w-4 h-4 text-yellow-500" />}
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-Poppins-Bold text-gray-900 mb-6">Danger Zone</h3>
                <button className="w-full bg-red-50 hover:bg-red-100 text-red-600 px-6 py-3 rounded-xl font-Nunito-SemiBold transition-all duration-200 flex items-center justify-center gap-2">
                    <LogOut className="w-4 h-4" />
                    Sign Out
                </button>
            </div>
        </motion.div>
    );

    const renderTabContent = () => {
        switch (activeTab) {
            case 'profile':
                return renderProfileTab();
            case 'orders':
                return renderOrdersTab();
            case 'wishlist':
                return renderWishlistTab();
            case 'reviews':
                // return renderReviewsTab();
                return <EditProfile/>
            case 'settings':
                return renderSettingsTab();
            default:
                return renderProfileTab();
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-8"
                >
                    {/* Page Header */}
                    <div className="text-center">
                        <h1 className="text-4xl font-Poppins-Bold text-gray-900 mb-2">My Profile</h1>
                        <p className="text-gray-600 font-Nunito text-lg">Manage your account and preferences</p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2">
                        <div className="flex flex-wrap gap-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-Nunito-SemiBold transition-all duration-200 ${activeTab === tab.id
                                        ? 'bg-indigo-600 text-white shadow-lg'
                                        : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                                        }`}
                                >
                                    <tab.icon className="w-4 h-4" />
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="min-h-[600px]">
                        {renderTabContent()}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default UserProfilePage;