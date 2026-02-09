import React from 'react'
import { LineChart, CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function RevenueLineChart({ data }) {
  return (
    <div className='bg-white p-6 rounded-xl border border-slate-200 shadow-sm'>
      <h3 className='text-lg font-semibold text-slate-800 mb-4'>Revenue Over Time</h3>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default RevenueLineChart