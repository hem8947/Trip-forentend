import React from 'react'
import CustomButton from './CustomButton'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '@/Hooks/useAuth';

const AppNavbar = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();


    const handleLogout = () => {
        logout();
        navigate('/login');

     
      }
  return (
    <header className='sticky top-0 z-50 px-6 md:px-20 py-4 md:py-6 flex items-center justify-between bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-200'>
      <div>
        <Link to='/dashboard' className='group inline-flex items-center gap-2 text-3xl md:text-4xl font-black tracking-tight text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text'>
          <span>Universe</span>
          <span className='text-slate-900'>Trip</span>
        </Link>
        <p className='mt-1 text-xs uppercase font-semibold tracking-[0.35em] text-slate-500'>Space travel reimagined</p>
      </div>

      <div className='flex items-center gap-6 md:gap-10 text-sm md:text-base text-slate-600'>
        <nav className='hidden md:flex items-center gap-8 font-medium'>
          <Link to='/dashboard' className='transition hover:text-slate-900'>Dashboard</Link>
          <Link to='/trips' className='transition hover:text-slate-900'>Trips</Link>
          <Link to='/bookings' className='transition hover:text-slate-900'>Bookings</Link>
          <Link to='/blogs' className='transition hover:text-slate-900'>Blogs</Link>
        </nav>

        <div onClick={handleLogout}>
             <CustomButton text='Logout' />

        </div>       
              
      </div>
    </header>
  )
}

export default AppNavbar