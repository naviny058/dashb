This is a pre tag inside we checking that we can see the data or not buy the way cool color's uses

```js
<pre className="mt-6 bg-slate-900 text-green-400 p-4 rounded-lg overflow-auto">
        {JSON.stringify(data.stats, null, 2)}
</pre>
```
## Creating Card for our dashboard

This is a StatCard which uses in Dashboard as component

```js
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
```

## Creating Sidebar + Header Layout 

we use dasboardLayout for our layout in dashboard
and all the height weight given here only
```js
import { Sidebar } from 'lucide-react'
import React, { Children } from 'react'
import Header from './Header'
import SideBar from './Sidebar'

function DashboardLayout({ children }) {
  return (
    <div className='min-h-screen flex bg-slate-100'>

      <SideBar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className='flex-1 p-6 overflow-y-auto'>
          {children}
        </main>
      </div>
    </div>
  )
}
export default DashboardLayout
```