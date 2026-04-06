import React from 'react'

const CustomButton = ( { text } ) => {
  return (
  <button className='bg-blue-600 text-white px-8 py-3 rounded-md  hover:bg-blue-700 hover:shadow-2xl shadow-blue-200 cursor-pointer animate-bounce'>
    {text}
  </button>
  )
}

export default CustomButton