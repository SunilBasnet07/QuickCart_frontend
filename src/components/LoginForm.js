'use client'

import { Eye, EyeOff, Mail, Lock, Package, ArrowRight, ShoppingBag } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { signIn } from "@/redux/auth/authAction"
import { useRouter } from "next/navigation"
import { FORGOT_PASSWORD_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from "@/route/route"
import toast from "react-hot-toast"
import Spinner from "./Spinner"
import clsx from "clsx"
import Link from "next/link"




export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch()
    const router = useRouter();
    const { user, loading, error } = useSelector((state) => state.auth)
console.log(error);

    async function submitForm(data) {
        console.log(data)
        dispatch(signIn(data))
    }

    useEffect(() => {
        if (user) {
            toast.success("Login Successfully")
            router.push(HOME_ROUTE)
        }
        if (error) {
            toast.error(typeof error === "string" ? error : error?.response?.data || "An error occurred");
        }
    }, [user, error])






    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
                duration: 0.5
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    }

    const formItemVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
            <div className="container mx-auto px-4 py-8 md:mb-20">
                <div className="flex flex-col lg:flex-row items-center  justify-center min-h-[calc(100vh-4rem)] gap-8">
                    {/* Left side - Branding & Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start"
                    >
                        <div className="max-w-md text-center lg:text-left">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="flex items-center justify-center lg:justify-start mb-6"
                            >
                                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-xl">
                                    <Package className="h-8 w-8 text-white" />
                                </div>
                                <span className="ml-3 text-3xl font-Poppins-Bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                    QuickCart
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="text-4xl lg:text-5xl font-Poppins-Bold text-gray-900 mb-6"
                            >
                                Welcome Back to Your Shopping Journey
                            </motion.h1>

                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="text-lg text-gray-600 font-Nunito mb-8"
                            >
                                Sign in to access your personalized shopping experience, track orders, and discover exclusive deals.
                            </motion.p>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="hidden lg:block"
                            >
                                <div className="flex items-center space-x-4 text-gray-600">
                                    <div className="flex items-center">
                                        <ShoppingBag className="h-5 w-5 text-indigo-600 mr-2" />
                                        <span className="font-Nunito">Track Orders</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Package className="h-5 w-5 text-indigo-600 mr-2" />
                                        <span className="font-Nunito">Quick Delivery</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right side - Login Form */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-full lg:w-1/2 max-w-md"
                    >
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <motion.div variants={itemVariants} className="mb-8">
                                <h2 className="text-2xl font-Poppins-Bold text-gray-900 mb-2">Sign In</h2>
                                <p className="text-gray-600 font-Nunito">Enter your details to continue shopping</p>
                            </motion.div>

                            <form className="space-y-6" onSubmit={handleSubmit(submitForm)}>
                                {/* Email input */}
                                <motion.div variants={formItemVariants}>
                                    <label htmlFor="email" className="block font-Nunito-SemiBold text-sm text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
                                        </div>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            {...register("email")}
                                            placeholder="name@example.com"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                </motion.div>

                                {/* Password input */}
                                <motion.div variants={formItemVariants}>
                                    <div className="flex items-center justify-between mb-2">
                                        <label htmlFor="password" className="block font-Nunito-SemiBold text-sm text-gray-700">
                                            Password
                                        </label>
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            href={FORGOT_PASSWORD_ROUTE}
                                            className="text-sm font-Nunito-SemiBold text-indigo-600 hover:text-indigo-500"
                                        >
                                            Forgot Password?
                                        </motion.a>
                                    </div>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
                                        </div>
                                        <input
                                            id="password"
                                            name="password"
                                            {...register("password")}
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                        />
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                        </motion.button>
                                    </div>
                                </motion.div>

                                {/* Remember me */}
                                <motion.div variants={formItemVariants} className="flex items-center">
                                    <input
                                        id="remember"
                                        name="remember"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label htmlFor="remember" className="ml-2 block font-Nunito text-sm text-gray-600">
                                        Remember me for 30 days
                                    </label>
                                </motion.div>

                                {/* Sign in button */}
                                <motion.div variants={formItemVariants}>
                                    <motion.button
                                        whileHover={{ scale: loading ? 1 : 1.02 }}
                                        whileTap={{ scale: loading ? 1 : 0.98 }}
                                        type="submit"
                                        disabled={loading}
                                        className={clsx(
                                            "w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl py-3 px-4 font-Nunito-Bold text-base flex items-center justify-center space-x-2 transition-all",
                                            "hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                                            {
                                                "opacity-50 cursor-not-allowed": loading,
                                            }
                                        )}
                                    >
                                        <span>Sign In</span>
                                        <ArrowRight className="h-5 w-5" />
                                        {loading && <Spinner className="h-5 w-5" />}
                                    </motion.button>
                                </motion.div>

                                {/* Divider */}
                                {/* <motion.div variants={formItemVariants} className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-200"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-4 bg-white text-gray-500 font-Nunito">Or continue with</span>
                                    </div>
                                </motion.div> */}

                                {/* Google sign in */}
                                {/* <motion.button
                                    variants={formItemVariants}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="button"
                                    className="w-full flex items-center justify-center space-x-2 rounded-xl border border-gray-200 bg-white py-3 px-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all"
                                >
                                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                                        <path
                                            d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                            fill="#4285F4"
                                        />
                                    </svg>
                                    <span className="font-Nunito-SemiBold">Sign in with Google</span>
                                </motion.button> */}
                            </form>

                            {/* Sign up link */}
                            <motion.div
                                variants={formItemVariants}
                                className="mt-8 text-center"
                            >
                                <p className="font-Nunito text-sm text-gray-600">
                                    Do not have an account?
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="/auth/register"
                                        className="font-Nunito-SemiBold text-indigo-600 hover:text-indigo-500"
                                    >
                                        Create one now
                                    </motion.a>
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}