import React from 'react'
import ReportMessage from './ReportForm'

const Report = () => {
  return (
    <div className="bg-gray-200 w-full min-h-screen">
    <h1 className="text-2xl font-bold mb-7 border-b-2 pb-3 border-slate-600">Report Your Queries</h1>
    <div>
      <ReportMessage/>
    </div>
</div>
  )
}

export default Report
