import React from 'react'

const Card = ({children}) => {
  return (
      <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-52 p-4 rounded-2xl drop-shadow-sm hover:drop-shadow-md'>
          {children}
    </div>
  )
}

export default Card