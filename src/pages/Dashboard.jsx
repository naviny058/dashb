import React from 'react'
import data from '../data/data.json'
import StatCard from '../components/ui/StatCard'
function Dashboard() {
  const { stats } = data
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold text-slate-800'>Dashboard</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>

        <StatCard
          title="Total User"
          value={stats.totalUsers.toLocaleString()}
          trend={stats.growth.users}
        />

        <StatCard
          title="Active User"
          value={stats.activeUsers.toLocaleString()}
          subtitle="Currently Online"
        />
        <StatCard
          title="Monthly Revenue"
          value={`₹${stats.monthlyRevenue.toLocaleString()}`}
          trend={stats.growth.revenue}
        />
        <StatCard
          title="Conversion Rate"
          value={`${stats.conversionRate}`}
          trend={stats.growth.orders}
        />

      </div>
    </div>
  )
}

export default Dashboard