import React from 'react'
import { Link } from 'react-router-dom'
import CustomButton from '../common/CustomButton'

const Hero = () => {
  return (
   <section className='relative min-h-[88vh] overflow-hidden bg-slate-950'>
    <img
      src='hero.jpeg'
      alt='Hero Image'
      className='absolute inset-0 h-full w-full object-cover opacity-70'
    />

    <div className='absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-950/60 to-slate-950/90'></div>
    <div className='pointer-events-none absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl'></div>
    <div className='pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl'></div>

    <div className='relative z-10 mx-auto flex min-h-[88vh] max-w-6xl flex-col items-center justify-center px-6 text-center text-white'>
      <div className='max-w-3xl space-y-6'>
        <span className='inline-flex rounded-full bg-white/10 px-4 py-1.5 text-sm uppercase tracking-[0.3em] text-slate-200 shadow-sm shadow-black/10'>
          Your galactic travel partner
        </span>
        <h1 className='text-4xl md:text-6xl font-black leading-tight'>
          <span className='text-blue-300'>Explore</span> the Universe with Us
        </h1>
        <p className='mx-auto max-w-2xl text-base md:text-lg text-slate-200'>
          Discover new worlds, experience cosmic adventures, and book unforgettable journeys with UniverseTrip.<br />
          Start your next epic trip in minutes.
        </p>

        <div className='mx-auto flex flex-col items-center gap-4 sm:flex-row sm:justify-center'>
          <Link to='/register'>
            <CustomButton text='Create Account' />
          </Link>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Hero