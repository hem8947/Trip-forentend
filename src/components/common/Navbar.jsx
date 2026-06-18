import React from 'react'
import { Link } from 'react-router-dom'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 px-6 md:px-20 py-4 md:py-6 flex items-center justify-between bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-200'>
      <div>
        <Link to='/' className='group inline-flex items-center gap-2 text-3xl md:text-4xl font-black tracking-tight text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text'>
          <span>Universe</span>
          <span className='text-slate-900'>Trip</span>
        </Link>
        <p className='mt-1 text-xs uppercase font-semibold tracking-[0.35em] text-slate-500'>Space travel reimagined</p>
      </div>

      <div className='flex items-center gap-6 md:gap-10 text-sm md:text-base text-slate-600'>
        <nav className='hidden md:flex items-center gap-8 font-medium'>
          <Link to='/' className='transition hover:text-slate-900'>Home</Link>
          <Link to='/about' className='transition hover:text-slate-900'>About</Link>
          <a href='/help' className='transition hover:text-slate-900'>Help</a>
          <a href='/contact' className='transition hover:text-slate-900'>Contact</a>
        </nav>

        <Link to='/login'>
          <CustomButton text='Login' />
        </Link>
      </div>
    </header>
  )
}

export default Navbar