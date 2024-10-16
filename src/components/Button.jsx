import React from 'react'

const Button = ( {children, styles} ) => {
  return (
    <button className={`bg-buttonColor cursor-pointer text-white hover:bg-opacity-95 hover:scale-95 transition-all duration-500 ease-in-out ${styles}`}>
        {children}
    </button>
  )
}

export default Button