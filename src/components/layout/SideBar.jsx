import React from 'react'

function SideBar() {
  const sidebar = ["Dashboard", "User", "Orders", "Settings"]
  return (
    <aside className='w-64 bg-slate-900 text-slate-100 flex flex-col'>
      <div className='px-6 py4 text-xl font-bold border-b border-slate-800'>
        Dashboard
      </div>

      <nav className='flex-1 px-4 py-6 space-y-2'>
        {sidebar.map(item => (
          <button className='w-full text-left px-4 py-2 rounded-lg bg-slate-800'>
            {item}
          </button>
        ))}
      </nav>

    </aside>
  )
}

export default SideBar