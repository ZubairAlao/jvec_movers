import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const NotFound = () => {
  return (
    <div className='flex items-center justify-center flex-col bg-black min-h-screen'>
      <div className='text-white mt-[60px] text-xl'>NotFound</div>
      <Link to="/">
        <Button children="Go Home" styles="mt-4 w-[174px] h-[43px] md:w-[100px] md:h-[30px] lg:w-[174px] lg:h-[43px] text-[18px] md:text-[14px] lg:text-[18px] mt-8" />
      </Link>
    </div>
  )
}

export default NotFound