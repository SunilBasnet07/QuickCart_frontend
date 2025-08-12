import React from 'react'
import ResetPasswordForm from '@/components/ResetPasswordForm'

const ResetPasswordPage = async({params}) => {
    const userId = ( await params).userId;
    
  return (
    <ResetPasswordForm userId={userId} />
  )
}

export default ResetPasswordPage