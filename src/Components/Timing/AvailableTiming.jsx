import React from 'react'
import AdminSlotCreation from './AdminSlotCreation'

const AvailableTiming = () => {
  return (
    <div className=" w-full max-h-screen   p-5">
    <div className="w-full flex justify-between items-center  px-6 ">
      <h2 className=" text-xl font-semibold py-3">Create  Slots</h2>
    </div>

    <div className="form-con p-3">
    <AdminSlotCreation/>
    </div>
  </div>
  )
}

export default AvailableTiming
