'use client';
import { motion } from "framer-motion"

import { useState } from 'react';
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
  Heart,
  ChevronDown,
  Package,
  Tag,
  Sparkles,
  Store,
  Settings,
  LogOut,
  UserRound
} from 'lucide-react';
import navlinks from '@/constant/navlink';

import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { logout } from "@/redux/auth/authSlice";
import { usePathname, useRouter } from "next/navigation";
import { CART_ROUTE, LOGIN_ROUTE } from "@/route/route";
import Link from "next/link";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {products}= useSelector((state)=>state.cart);
  const pathname = usePathname();
  const isActive = navlinks.some((navlink) => navlink.href === pathname);
 const router = useRouter();
  const isAuth = user;
  function handleLogout() {
    dispatch(logout());
    router.push(LOGIN_ROUTE)

  }

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      {/* Top announcement bar */}
      <div className="bg-indigo-600 text-white py-1.5 text-center text-sm font-Nunito">
        <p>🎉 Free shipping on orders over $50! Limited time offer.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Package className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-Poppins-Bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                QuickCart
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">

            {/* <a href="#" className="group flex items-center px-3 py-2 text-sm font-Nunito-SemiBold text-gray-700 hover:text-indigo-600 transition-colors">
              <Store className="h-4 w-4 mr-1.5 text-gray-500 group-hover:text-indigo-600" />
              Shop
              <ChevronDown className="h-4 w-4 ml-1 text-gray-500 group-hover:text-indigo-600" />
            </a>
            <a href="#" className="group flex items-center px-3 py-2 text-sm font-Nunito-SemiBold text-gray-700 hover:text-indigo-600 transition-colors">
              <Tag className="h-4 w-4 mr-1.5 text-gray-500 group-hover:text-indigo-600" />
              Deals
            </a>
            <Link href="/product" className="group flex items-center px-3 py-2 text-sm font-Nunito-SemiBold text-gray-700 hover:text-indigo-600 transition-colors">
              <Sparkles className="h-4 w-4 mr-1.5 text-gray-500 group-hover:text-indigo-600" />
              New Arrivals
            </Link> */}
            {
              navlinks.map((navlink, index) =>

                isAuth || !navlink.isAuth ? (
                  <Link href={navlink.href} key={index} className={`${isActive ? "text-indigo-600" : "text-gray-500"} ${navlink.isAuth && !isAuth && "hidden"} group flex items-center px-3 py-2 text-sm font-Nunito-SemiBold  hover:text-indigo-600 transition-colors`}>
                    <Sparkles className="h-4 w-4 mr-1.5  group-hover:text-indigo-600" />
                    {navlink?.label}
                  </Link>
                ) : null

              )
              
            }
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full group">
              <input
                type="text"
                placeholder="Search for products, brands and more..."
                className="w-full px-4 py-2.5 pl-10 text-sm text-gray-700 bg-gray-50 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all group-hover:bg-white group-hover:border-gray-300"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition-colors" />
            </div>
          </div>

          {/* Desktop Right Icons */}
          <div className="hidden md:flex items-center space-x-6">

            <Link href={CART_ROUTE} className="group flex flex-col items-center text-gray-700 hover:text-indigo-600 transition-colors relative">
              <ShoppingCart className="h-6 w-6 group-hover:scale-110 transition-transform" />
              {/* <span className="text-xs font-Nunito mt-0.5">Cart</span> */}
              <span className="absolute -top-3 -right-1 bg-indigo-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-Nunito-SemiBold">
                {products?.length || 0}
              </span>
            </Link>
            {user ? (<button onClick={() => setShowProfile(!showProfile)}
              className="group flex flex-col items-center text-gray-700 hover:text-indigo-600 transition-colors focus:outline-none"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden shadow-sm transition-transform duration-200 group-hover:scale-105">
                {user?.profileImageUrl ? (
                  <Image
                    src={user.profileImageUrl}
                    alt="Profile"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <User className="w-6 h-6 text-gray-500" />
                )}
              </div>

            </button>) : (<motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full max-w-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl py-1 px-3 font-semibold text-base flex items-center justify-center gap-2 shadow-md hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-indigo-400 focus:ring-offset-2 transition-all duration-200"
            >
              <Link href={LOGIN_ROUTE} className="tracking-wide">login</Link>
            </motion.button>)}


          </div>
          {/* popup profile */}
          <div onClick={() => setShowProfile(false)} className={`${showProfile ? "absolute dark:bg-gray-900 border -bottom-44 right-3 flex flex-col   min-w-[300px] h-auto  rounded-md bg-white" : "hidden"}`}>
            <div className="flex px-2 py-3 gap-2 ">
              {
                user?.profileImageUrl ? <Image src={user.profileImageUrl} alt="profileImge" height={45} width={45} className="rounded-full" /> : <UserRound className="dark:text-white " />
              }
              <div className="ml-3">
                <p className="font-Nunito-Bold w-full ">Hi! {user?.name}</p>
                <p className="font-Nunito-Bold w-full ">{user?.email}</p>
              </div>
            </div>

            <Link href="/dashboard" className=" text-black font-Nunito-Bold  py-3 dark:text-white dark:hover:bg-gray-800  hover:bg-slate-100 w-full  border-b border-t rounded-sm px-5 flex items-center gap-4 opacity-70"> <Settings className="h-5 w-5" />Manage account</Link>
            <button onClick={handleLogout} className="text-black font-Nunito-Bold  py-3 dark:text-white dark:hover:bg-gray-800 hover:bg-slate-100 w-full  border-b border-t rounded-sm px-5 flex items-center gap-4 opacity-70"> <LogOut className="h-5 w-5" />Sign out</button>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link href={CART_ROUTE} className="text-gray-700 hover:text-indigo-600 transition-colors relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-Nunito-SemiBold">
              {products?.length || 0}
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="relative mb-4 px-3">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2.5 pl-10 text-sm text-gray-700 bg-gray-50 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            <div className="grid grid-cols-2 gap-2 px-3 mb-4">
              <a href="#" className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <Store className="h-5 w-5 mr-2 text-indigo-600" />
                <span className="font-Nunito-SemiBold text-sm">Shop</span>
              </a>
              <a href="#" className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <Tag className="h-5 w-5 mr-2 text-indigo-600" />
                <span className="font-Nunito-SemiBold text-sm">Deals</span>
              </a>
              <a href="#" className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <Sparkles className="h-5 w-5 mr-2 text-indigo-600" />
                <span className="font-Nunito-SemiBold text-sm">New Arrivals</span>
              </a>
              <a href="#" className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <Heart className="h-5 w-5 mr-2 text-indigo-600" />
                <span className="font-Nunito-SemiBold text-sm">Wishlist</span>
              </a>
            </div>

            <div className="border-t border-gray-100 pt-4">
              <a href="#" className="block px-3 py-2 text-base font-Nunito-SemiBold text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
                My Account
              </a>
              <a href="#" className="block px-3 py-2 text-base font-Nunito-SemiBold text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
                Orders
              </a>
              <a href="#" className="block px-3 py-2 text-base font-Nunito-SemiBold text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
                Help Center
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 