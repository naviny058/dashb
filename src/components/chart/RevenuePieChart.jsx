import React from 'react'
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

function RevenuePieChart({ data }) {
  return (
    <div className='bg-white p-6 rounded-xl border border-slate-200 shadow-sm'>
      <h3>Revenue Distribution</h3>

      <div className='h-72'>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="category"
              outerRadius={100}
              label
            ></Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default RevenuePieChart