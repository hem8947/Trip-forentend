import React from 'react'
import CustomButton from '../CustomButton'

const Hero = () => {
  return (
   <section className=' relative h-[88dvh] overflow-hidden flex items-center justify-center'>
    <div>
        <img src="hero.jpeg" alt="Hero Image" />
    </div>

    {/*black overlay*/}
    <div className='h-[88dvh] w-full  bg-black absolute left-0 top-0 opacity-40'></div>

    {/*content*/}
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white space-y-6'>
        <h1 className='text-5xl font-bold'> <span className='text-blue-500'>Explore</span> the Universe with Us</h1>
        
        <p className='text-lg'>Discover new worlds, experience the wonders of space, and embark on unforgettable journeys with us.</p>

        <a href="/login">
          <CustomButton text="Get Started"/>
        </a>
    </div>
    
  
   </section>
  )
}

export default Hero