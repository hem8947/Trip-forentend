import React from 'react'

const CustomButton = ( { text } ) => {
  return (
    <button className='bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-3 rounded-full shadow-lg shadow-blue-500/20 transition duration-300 hover:shadow-xl hover:from-blue-500 hover:to-purple-600 hover:-translate-y-0.5'>
      {text}
    </button>
  )
}

export default CustomButton