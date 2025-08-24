'use client';
import { motion } from "framer-motion"
import appLogo from "@/image/appLogo.png"
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
import { CART_ROUTE, DASHBOARD, HOME_ROUTE, LOGIN_ROUTE, USER_PROFILE } from "@/route/route";
import Link from "next/link";
import { MdDashboard, MdFavoriteBorder } from "react-icons/md";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);
  const { lists } = useSelector((state) => state.wish);
  const pathname = usePathname();
  const isActive = navlinks.some((navlink) => navlink.href === pathname);
  const router = useRouter();
  const isAuth = user;
  const isAdminUser = user?.roles?.includes("ADMIN") || false;
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
            <Link href={HOME_ROUTE} className="flex items-center space-x-2">
              <div className=" rounded-lg">
                {/* <Package className="h-6 w-6 text-white" /> */}
                <Image src={appLogo} height={40} width={40} alt="app logo"/>
              </div>
              <span className="text-2xl font-Poppins-Bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                QuickCart
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {
              navlinks.map((navlink, index) =>
                isAuth || !navlink.isAuth ? (
                  <Link 
                    href={navlink.href} 
                    key={index} 
                    className={`${
                      pathname === navlink.href 
                        ? "text-indigo-600 bg-indigo-50 border-b-2 border-indigo-600" 
                        : "text-gray-500 hover:text-indigo-600"
                    } ${
                      navlink.isAuth && !isAuth && "hidden"
                    } group flex items-center px-3 py-2 text-md font-Nunito-SemiBold transition-all duration-200 rounded-md`}
                  >
                    {navlink?.label}
                  </Link>
                ) : null
              )
            }
          </div>

     

          {/* Desktop Right Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href={USER_PROFILE} 
              className={`group flex flex-col items-center transition-colors relative ${
                pathname === "/favorites" 
                  ? "text-indigo-600" 
                  : "text-gray-700 hover:text-indigo-600"
              }`}
            >
              <MdFavoriteBorder className="h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="absolute -top-3 -right-2 bg-indigo-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-Nunito-SemiBold">
                {lists?.length || 0}
              </span>
            </Link>

            <Link 
              href={CART_ROUTE} 
              className={`group flex flex-col items-center transition-colors relative ${
                pathname === CART_ROUTE 
                  ? "text-indigo-600" 
                  : "text-gray-700 hover:text-indigo-600"
              }`}
            >
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
                  <div className="px-2 py-2 border border-gray-400 rounded-full">
                    <User className="w-6 h-6 text-gray-500" />
                  </div>
                )}
              </div>

            </button>) : (<motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="text-white bg-gradient-to-br font-Nunito-Bold from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-6 py-2 text-center me-2 mb-2"
            >
              <Link href={LOGIN_ROUTE} className="tracking-wide">login</Link>
            </motion.button>)}

          </div>
          {/* popup profile */}

          <div
            onClick={() => setShowProfile(false)}
            className={`${showProfile
                ? "absolute right-0 top-24 z-50 flex flex-col min-w-[280px] max-w-[320px] rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg overflow-hidden"
                : "hidden"
              }`}
          >
            {/* User Info */}
            <div className="flex items-center px-4 py-3 gap-3 bg-gray-50 dark:bg-gray-800">
              {user?.profileImageUrl ? (
                <Image
                  src={user?.profileImageUrl}
                  alt="profileImage"
                  height={45}
                  width={45}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="px-2 py-2 border border-gray-400 rounded-full">
                <User className="w-6 h-6 text-gray-500" />
              </div>
              )}
              <div>
                <p className="font-Nunito-Bold text-sm leading-tight">
                  Hi! {user?.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate max-w-[180px]">
                  {user?.email}
                </p>
              </div>
            </div>

            {/* Links */}
            <Link
              href={USER_PROFILE}
              className="flex items-center gap-3 px-5 py-3 text-sm font-Nunito-Bold text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <Settings className="h-5 w-5" />
              Manage account
            </Link>

            {isAdminUser && (
              <Link
                href={DASHBOARD}
                className="flex items-center gap-3 px-5 py-3 text-sm font-Nunito-Bold text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <MdDashboard className="h-5 w-5" />
                Dashboard
              </Link>
            )}

            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-5 py-3 text-sm font-Nunito-Bold text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <LogOut className="h-5 w-5" />
              Sign out
            </button>
          </div>

          {/* </div> */}

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link 
              href={CART_ROUTE} 
              className={`transition-colors relative ${
                pathname === CART_ROUTE 
                  ? "text-indigo-600" 
                  : "text-gray-700 hover:text-indigo-600"
              }`}
            >
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
              <Link 
                href="/product"
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  pathname === "/product" 
                    ? "bg-indigo-100 text-indigo-700" 
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <Store className={`h-5 w-5 mr-2 ${
                  pathname === "/product" ? "text-indigo-700" : "text-indigo-600"
                }`} />
                <span className="font-Nunito-SemiBold text-sm">Shop</span>
              </Link>
              <Link 
                href="/category"
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  pathname === "/category" 
                    ? "bg-indigo-100 text-indigo-700" 
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <Tag className={`h-5 w-5 mr-2 ${
                  pathname === "/category" ? "text-indigo-700" : "text-indigo-600"
                }`} />
                <span className="font-Nunito-SemiBold text-sm">Categories</span>
              </Link>
              <Link 
                href="/about"
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  pathname === "/about" 
                    ? "bg-indigo-100 text-indigo-700" 
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <Sparkles className={`h-5 w-5 mr-2 ${
                  pathname === "/about" ? "text-indigo-700" : "text-indigo-600"
                }`} />
                <span className="font-Nunito-SemiBold text-sm">About</span>
              </Link>
              <Link 
                href="/contact"
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  pathname === "/contact" 
                    ? "bg-indigo-100 text-indigo-700" 
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <Heart className={`h-5 w-5 mr-2 ${
                  pathname === "/contact" ? "text-indigo-700" : "text-indigo-600"
                }`} />
                <span className="font-Nunito-SemiBold text-sm">Contact</span>
              </Link>
            </div>

            <div className="border-t border-gray-100 pt-4">
              <Link 
                href={USER_PROFILE}
                className={`block px-3 py-2 text-base font-Nunito-SemiBold rounded-md transition-colors ${
                  pathname === USER_PROFILE 
                    ? "text-indigo-600 bg-indigo-50" 
                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                }`}
              >
                My Account
              </Link>
              <Link 
                href="/orders"
                className={`block px-3 py-2 text-base font-Nunito-SemiBold rounded-md transition-colors ${
                  pathname === "/orders" 
                    ? "text-indigo-600 bg-indigo-50" 
                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                }`}
              >
                Orders
              </Link>
              <Link 
                href="/contact"
                className={`block px-3 py-2 text-base font-Nunito-SemiBold rounded-md transition-colors ${
                  pathname === "/contact" 
                    ? "text-indigo-600 bg-indigo-50" 
                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                }`}
              >
                Help Center
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 