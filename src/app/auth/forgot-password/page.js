import ForgotPasswordForm from '@/components/ForgotPasswordForm'
import React from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const ForgotPasswordPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Header Navigation */}


      {/* Main Content */}
      <div className="relative z-10 flex items-center mt-10 justify-center min-h-[calc(100vh-80px)] p-4">
        <div className="w-full max-w-md">
          {/* Logo/Brand Section */}
        

          {/* Form Component */}
          <ForgotPasswordForm />
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center pb-6">
        <p className="text-sm text-gray-500">
          © 2024 QuickCart. All rights reserved.
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/50 to-transparent"></div>
      
      {/* Corner Decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-100/30 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-100/30 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
    </div>
  )
}

export default ForgotPasswordPage