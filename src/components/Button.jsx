import React from 'react'

const Button = ( {children, styles} ) => {
  return (
    <button className={`bg-buttonColor cursor-pointer text-white hover:bg-opacity-95 ${styles}`}>
        {children}
    </button>
  )
}

export default Button