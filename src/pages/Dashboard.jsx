import React from 'react'
import data from '../data/data.json'
function Dashboard() {
  const { stats } = data
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold text-slate-800'>Dashboard</h1>
      <pre className="mt-6 bg-slate-900 text-green-400 p-4 rounded-lg overflow-auto">
        {JSON.stringify(data.stats, null, 2)}
      </pre>
    </div>
  )
}

export default Dashboard