import React from 'react'

function Header() {
  return (
    <header className='h-6 bg-white border-b border-slate-200 flex items-center justify-between p-6'>
      <h2 className='text-lg font-semibold text-slate-800'>
        Dashboard Overview
      </h2>
      <div className='flex items-center gap-4'>
        <span className='text-sm text-slate-600'>
          Hello, Admin
        </span>
        <div className='h-8 w-8 rounded-full bg-slate-300'></div>
      </div>
    </header>
  )
}

export default Header