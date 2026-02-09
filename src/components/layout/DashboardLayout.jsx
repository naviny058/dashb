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