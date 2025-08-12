'use client'

import { Eye, EyeOff, Lock, Package, ArrowRight, Shield, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { useForm } from "react-hook-form"
import Link from "next/link"
import clsx from "clsx"

export default function ResetPasswordForm({ userId }) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        special: false
    });
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const password = watch("password", "");

    // Password strength checker
    const checkPasswordStrength = (password) => {
        setPasswordStrength({
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            number: /[0-9]/.test(password),
            special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
        });
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        checkPasswordStrength(value);
    };

    const getPasswordStrengthColor = () => {
        const validChecks = Object.values(passwordStrength).filter(Boolean).length;
        if (validChecks <= 2) return "bg-red-500";
        if (validChecks <= 3) return "bg-yellow-500";
        if (validChecks <= 4) return "bg-blue-500";
        return "bg-green-500";
    };

    async function submitForm(data) {
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            // Handle form submission here
            console.log("Reset password data:", data);
        }, 2000);
    }

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
                <div className="flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-4rem)] gap-8">
                    {/* Left side - Branding & Security Info */}
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
                                Reset Your Password
                            </motion.h1>

                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="text-lg text-gray-600 font-Nunito mb-8"
                            >
                                Create a strong, secure password to protect your account and keep your shopping experience safe.
                            </motion.p>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="hidden lg:block space-y-4"
                            >
                                <div className="flex items-center space-x-4 text-gray-600">
                                    <div className="flex items-center">
                                        <Shield className="h-5 w-5 text-indigo-600 mr-2" />
                                        <span className="font-Nunito">Secure Account</span>
                                    </div>
                                    <div className="flex items-center">
                                        <CheckCircle className="h-5 w-5 text-indigo-600 mr-2" />
                                        <span className="font-Nunito">Strong Password</span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4 text-gray-600">
                                    <div className="flex items-center">
                                        <Package className="h-5 w-5 text-indigo-600 mr-2" />
                                        <span className="font-Nunito">Safe Shopping</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Lock className="h-5 w-5 text-indigo-600 mr-2" />
                                        <span className="font-Nunito">Data Protection</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right side - Reset Password Form */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-full lg:w-1/2 max-w-md"
                    >
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <motion.div variants={itemVariants} className="mb-8">
                                <h2 className="text-2xl font-Poppins-Bold text-gray-900 mb-2">New Password</h2>
                                <p className="text-gray-600 font-Nunito">Enter your new password below</p>
                            </motion.div>

                            <form className="space-y-6" onSubmit={handleSubmit(submitForm)}>
                                {/* New Password input */}
                                <motion.div variants={formItemVariants}>
                                    <label htmlFor="password" className="block font-Nunito-SemiBold text-sm text-gray-700 mb-2">
                                        New Password
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
                                        </div>
                                        <input
                                            id="password"
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            {...register("password", { 
                                                required: "Password is required",
                                                minLength: { value: 8, message: "Password must be at least 8 characters" }
                                            })}
                                            onChange={handlePasswordChange}
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
                                    {errors.password && (
                                        <p className="mt-1 text-sm text-red-600 font-Nunito">{errors.password.message}</p>
                                    )}
                                </motion.div>

                                {/* Password Strength Indicator */}
                                {password && (
                                    <motion.div 
                                        variants={formItemVariants}
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className="space-y-3"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-Nunito-SemiBold text-gray-700">Password Strength</span>
                                            <div className="flex space-x-1">
                                                {[1, 2, 3, 4, 5].map((index) => (
                                                    <div
                                                        key={index}
                                                        className={`h-1 w-8 rounded-full transition-all ${
                                                            index <= Object.values(passwordStrength).filter(Boolean).length
                                                                ? getPasswordStrengthColor()
                                                                : "bg-gray-200"
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 text-xs">
                                            <div className={`flex items-center space-x-2 ${passwordStrength.length ? 'text-green-600' : 'text-gray-500'}`}>
                                                <CheckCircle className={`h-3 w-3 ${passwordStrength.length ? 'text-green-600' : 'text-gray-400'}`} />
                                                <span className="font-Nunito">At least 8 characters</span>
                                            </div>
                                            <div className={`flex items-center space-x-2 ${passwordStrength.uppercase ? 'text-green-600' : 'text-gray-500'}`}>
                                                <CheckCircle className={`h-3 w-3 ${passwordStrength.uppercase ? 'text-green-600' : 'text-gray-400'}`} />
                                                <span className="font-Nunito">One uppercase letter</span>
                                            </div>
                                            <div className={`flex items-center space-x-2 ${passwordStrength.lowercase ? 'text-green-600' : 'text-gray-500'}`}>
                                                <CheckCircle className={`h-3 w-3 ${passwordStrength.lowercase ? 'text-green-600' : 'text-gray-400'}`} />
                                                <span className="font-Nunito">One lowercase letter</span>
                                            </div>
                                            <div className={`flex items-center space-x-2 ${passwordStrength.number ? 'text-green-600' : 'text-gray-500'}`}>
                                                <CheckCircle className={`h-3 w-3 ${passwordStrength.number ? 'text-green-600' : 'text-gray-400'}`} />
                                                <span className="font-Nunito">One number</span>
                                            </div>
                                            <div className={`flex items-center space-x-2 ${passwordStrength.special ? 'text-green-600' : 'text-gray-500'}`}>
                                                <CheckCircle className={`h-3 w-3 ${passwordStrength.special ? 'text-green-600' : 'text-gray-400'}`} />
                                                <span className="font-Nunito">One special character</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Confirm Password input */}
                                <motion.div variants={formItemVariants}>
                                    <label htmlFor="confirmPassword" className="block font-Nunito-SemiBold text-sm text-gray-700 mb-2">
                                        Confirm New Password
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
                                        </div>
                                        <input
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            type={showConfirmPassword ? "text" : "password"}
                                            {...register("confirmPassword", { 
                                                required: "Please confirm your password",
                                                validate: value => value === password || "Passwords do not match"
                                            })}
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
                                    {errors.confirmPassword && (
                                        <p className="mt-1 text-sm text-red-600 font-Nunito">{errors.confirmPassword.message}</p>
                                    )}
                                </motion.div>

                                {/* Reset Password button */}
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
                                        <span>Reset Password</span>
                                        <ArrowRight className="h-5 w-5" />
                                        {loading && (
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        )}
                                    </motion.button>
                                </motion.div>
                            </form>

                            {/* Back to login link */}
                            <motion.div
                                variants={formItemVariants}
                                className="mt-8 text-center"
                            >
                                <p className="font-Nunito text-sm text-gray-600">
                                    Remember your password?
                                    <motion.a
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        href="/auth/login"
                                        className="font-Nunito-SemiBold text-indigo-600 hover:text-indigo-500 ml-1"
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