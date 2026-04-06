import React from 'react'
import CustomButton from '../CustomButton'

const Navbar = () => {
  return (
    <header className='sticky top-0 z-50 px-20 py-6 flex item-center justify-between  bg-blue-100 shadow-md '>
      {/*left part*/}
      <div >
        <h1 className='text-4xl font-semibold text-blue-600'>
          UniverseTrip
        </h1>
      </div>

      {/*right part*/}
      <div className='flex items-center gap-16 text-lg text-gray-600'>
        <nav className='space-x-8 text-gray-600 font-medium [&>a]:hover:text-black [&>a]:hover:underline '>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/help">Help</a>
          <a href="/contact">Contact</a>
        </nav>
        <CustomButton  text="Login"/>
      </div>
      </header>

  )
}

export default Navbar