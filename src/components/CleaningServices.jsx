import React from 'react'
import { arrowRight, cleaningServiceLogo, redLine } from '../assets'
import Button from './Button'

const CleaningServices = () => {
  return (
    <section className='bg-white text-black'>
        <div className='py-12 container flex flex-col md:flex-row gap-8 justify-center items-center'>

          <div className='flex flex-col justify-center items-center flex-1 text-center md:text-left'>
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold'>We Move and Clean</h1>
            <p className='text-xl md:text-2xl lg:text-3xl mt-8'>Powered by MD 
              Environmental Services |
              Professional Cleaning
              Services
            </p>
          <Button children="Learn More" styles="md:self-start mt-4 w-[174px] h-[43px] md:w-[100px] md:h-[30px] lg:w-[174px] lg:h-[43px] text-[18px] md:text-[14px] lg:text-[18px] mt-8" />
          </div>

          <div>
            <img src={cleaningServiceLogo} alt="cleaning service" className='w-[200px] h-fit' />
          </div>
        </div>
    </section>
  )
}

export default CleaningServices