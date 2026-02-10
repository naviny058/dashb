import data from "../data/data.json";
import StatCard from "../components/ui/StatCard";
import DashboardLayout from "../components/layout/DashboardLayout";
import RevenueLineChart from "../components/chart/RevenueLineChart";
import RevenuePieChart from "../components/chart/RevenuePieChart";
import OrdersTable from "../components/table/OrderTable";
import { orderColumns } from "../components/table/orderColumns";

export default function Dashboard() {
  const {
    stats,
    revenueOverTime,
    revenueByCategory,
    recentOrders
  } = data;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Total Users" value={stats.totalUsers.toLocaleString()} trend={stats.growth.users} />
          <StatCard title="Active Users" value={stats.activeUsers.toLocaleString()} subtitle="Currently online" />
          <StatCard title="Monthly Revenue" value={`₹${stats.monthlyRevenue.toLocaleString()}`} trend={stats.growth.revenue} />
          <StatCard title="Conversion Rate" value={`${stats.conversionRate}%`} trend={stats.growth.orders} />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RevenueLineChart data={revenueOverTime} />
          </div>
          <RevenuePieChart data={revenueByCategory} />
        </div>

        {/* Orders Table */}
        <OrdersTable
          data={recentOrders}
          columns={orderColumns}
        />
      </div>
    </DashboardLayout>
  );
}
