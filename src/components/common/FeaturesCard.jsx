import React from 'react'

const FeaturesCard = ({ title, description, icon }) => {
  const IconComponent = icon;

  return (
    <div className='border border-gray-400 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 bg-white text-center'>
      <IconComponent size={40} className='mb-4 text-blue-600' />

      <h3 className='text-2xl font-medium mb-4'>
        {title}
      </h3>
      <p className='text-gray-600'>
        {description}
      </p>
    </div>
  )
}

export default FeaturesCard