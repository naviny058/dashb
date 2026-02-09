import { TrendingDown, TrendingUp } from 'lucide-react';
import React from 'react'

function StatCard({ title, subtitle, value, trend }) {
  const isPositive = trend >= 0;

  return (
    <div className='rounded-xl bg-white p-6 shadow-sm border border-slate-100'>
      <p className='text-sm font-medium text-slate-500'>
        {title}
      </p>
      <h2 className='mt-2 text-3xl font-bold text-slate-900'>
        {value}
      </h2>

      {subtitle &&
        <p className='mt-1 text-sm text-slate-500'>
          {subtitle}
        </p>
      }
      {trend !== undefined && (
        <p className={`mt-4 text-sm font-medium ${isPositive ? "text-emerald-600" : "text-rose-600"}`}>
          {isPositive ? <TrendingUp /> : <TrendingDown />}{Math.abs(trend)}%
        </p>
      )
      }
    </div>
  )
}

export default StatCard