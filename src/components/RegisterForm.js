'use client'
import { Eye, EyeOff, Mail, Lock, Package, ArrowRight, ShoppingBag, User, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "@/redux/auth/authAction";
import { HOME_ROUTE } from "@/route/route";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Spinner from "./Spinner";
import clsx from "clsx";

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [checkBox, setCheckBox] = useState(true);
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const router = useRouter();
    const { user, error, loading } = useSelector((state) => state.auth);

    async function submitForm(data) {
        dispatch(signUp(data))
    }

    // useEffect(() => {
    //     if (user) {
    //         toast.success("Register Successfully.", {
    //             autoClose: 2000,
    //         })
    //         router.push(HOME_ROUTE)
    //     }
    //     if (error) {
    //         toast.error(error, {
    //             autoClose: 2000,
    //         })
    //     }
    // }, [user, error])






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
                    {/* Left side - Branding & Features */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start"
                    >
                        <div className="max-w-md text-center lg:text-left mb-28">
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
                                Join Our Shopping Community
                            </motion.h1>

                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="text-lg text-gray-600 font-Nunito mb-8"
                            >
                                Create an account to enjoy exclusive deals, track your orders, and get personalized shopping recommendations.
                            </motion.p>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="hidden lg:block space-y-4"
                            >
                                <div className="flex items-center space-x-4 text-gray-600">
                                    <div className="flex items-center">
                                        <ShoppingBag className="h-5 w-5 text-indigo-600 mr-2" />
                                        <span className="font-Nunito">Exclusive Deals</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Package className="h-5 w-5 text-indigo-600 mr-2" />
                                        <span className="font-Nunito">Fast Delivery</span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 text-gray-600">
                                    <div className="flex items-center">
                                        <MapPin className="h-5 w-5 text-indigo-600 mr-2" />
                                        <span className="font-Nunito">Multiple Addresses</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone className="h-5 w-5 text-indigo-600 mr-2" />
                                        <span className="font-Nunito">Order Updates</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right side - Registration Form */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-full lg:w-1/2 max-w-md"
                    >
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <motion.div variants={itemVariants} className="mb-8">
                                <h2 className="text-2xl font-Poppins-Bold text-gray-900 mb-2">Create Account</h2>
                                <p className="text-gray-600 font-Nunito">Fill in your details to get started</p>
                            </motion.div>

                            <form className="space-y-6" onSubmit={handleSubmit(submitForm)}>
                                {/* Full Name input */}
                                <motion.div variants={formItemVariants}>
                                    <label htmlFor="fullName" className="block font-Nunito-SemiBold text-sm text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
                                        </div>
                                        <input
                                            id="fullName"
                                            name="fullName"
                                            type="text"
                                            {...register("name")}
                                            placeholder="John Doe"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                </motion.div>

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

                                {/* Phone input */}
                                {/* <motion.div variants={formItemVariants}>
                                    <label htmlFor="phone" className="block font-Nunito-SemiBold text-sm text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
                                        </div>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+1 (555) 000-0000"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                        />
                                    </div>
                                </motion.div> */}

                                {/* Password input */}
                                <motion.div variants={formItemVariants}>
                                    <label htmlFor="password" className="block font-Nunito-SemiBold text-sm text-gray-700 mb-2">
                                        Password
                                    </label>
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

                                {/* Confirm Password input */}
                                <motion.div variants={formItemVariants}>
                                    <label htmlFor="confirmPassword" className="block font-Nunito-SemiBold text-sm text-gray-700 mb-2">
                                        Confirm Password
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
                                        </div>
                                        <input
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type={showConfirmPassword ? "text" : "password"}
                                            {...register("confirmPassword")}
                                            placeholder="••••••••"
                                            className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                                        />
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                        </motion.button>
                                    </div>
                                </motion.div>

                                {/* Terms and conditions */}
                                <motion.div variants={formItemVariants} className="flex items-start">
                                    <input
                                        id="terms"
                                        name="terms"
                                        type="checkbox"
                                        onChange={()=>setCheckBox(!checkBox)}
                                        className="h-4 w-4 mt-1 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label htmlFor="terms" className="ml-2 block font-Nunito text-sm text-gray-600">
                                        I agree to the{" "}
                                        <a href="#" className="text-indigo-600 hover:text-indigo-500 font-Nunito-SemiBold">
                                            Terms of Service
                                        </a>{" "}
                                        and{" "}
                                        <a href="#" className="text-indigo-600 hover:text-indigo-500 font-Nunito-SemiBold">
                                            Privacy Policy
                                        </a>
                                    </label>
                                </motion.div>

                                {/* Register button */}
                                <motion.div variants={formItemVariants}>
                                    <motion.button
                                        whileHover={{ scale: loading ? 1 : 1.02 }}
                                        whileTap={{ scale: loading ? 1 : 0.98 }}
                                        type="submit"
                                        disabled={loading || checkBox}
                                        className={clsx(
                                            "w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl py-3 px-4 font-Nunito-Bold text-base flex items-center justify-center space-x-2 transition-all",
                                            "hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                                            {
                                                "opacity-50 cursor-not-allowed": loading||checkBox,
                                            }
                                        )}
                                    >
                                        <span>Create account</span>
                                        <ArrowRight className="h-5 w-5" />
                                        {loading && <Spinner className="h-5 w-5" />}
                                    </motion.button>
                                </motion.div>
                            </form>

                            {/* Sign in link */}
                            <motion.div
                                variants={formItemVariants}
                                className="mt-8 text-center"
                            >
                                <p className="font-Nunito text-sm text-gray-600">
                                    Already have an account?
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="/auth/login"
                                        className="font-Nunito-SemiBold text-indigo-600 hover:text-indigo-500"
                                    >
                                        Sign in here
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