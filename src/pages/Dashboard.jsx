import React from 'react'
import data from '../data/data.json'
import StatCard from '../components/ui/StatCard'
import DashboardLayout from '../components/layout/DashboardLayout'
import RevenueLineChart from '../components/chart/RevenueLineChart'
import RevenuePieChart from '../components/chart/RevenuePieChart'

function Dashboard() {

  const { stats, revenueOverTime, revenueByCategory } = data
  return (
    <DashboardLayout>
      <div className='space-y-6'>

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

        {/* chart */}
        <div>
          <div>
            <RevenueLineChart data={revenueOverTime} />
          </div>
          <RevenuePieChart data={revenueByCategory} />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard