import React from 'react'
import { NavLink } from 'react-router-dom'

const linkBase =
  "block px-4 py-2 rounded-lg transition";

function SideBar() {
  const sidebar = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "User", link: "/users" },
    { name: "Orders", link: "/orders" },
    { name: "Settings", link: "/settings" },
  ]
  return (
    <aside className='w-64 bg-slate-900 text-slate-100 flex flex-col'>
      <div className='px-6 py4 text-xl font-bold border-b border-slate-800'>
        Dashboard
      </div>

      <nav className='flex-1 px-4 py-6 space-y-2'>
        {sidebar.map(item => (
          <NavLink
            to={item.link}
            className={({ isActive }) =>
              `${linkBase} ${isActive ? "bg-slate-800" : "hover:bg-slate-800"
              }`
            }>
            {item.name}
          </NavLink>
        ))}
      </nav>

    </aside>
  )
}

export default SideBar