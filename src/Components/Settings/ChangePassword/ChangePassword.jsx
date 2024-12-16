import React from 'react'
import ChangePasswordForm from './changePasswordForm'

const ChangePassword = () => {
  return (
    <div className="bg-gray-200 w-full min-h-screen">
        <h1 className="text-2xl font-bold mb-7 border-b-2 pb-3 border-slate-600"> password</h1>
        <div>
          <ChangePasswordForm/>
        </div>
    </div>
  )
}

export default ChangePassword
