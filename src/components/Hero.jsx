import React from 'react'
import { heroBg } from '../assets'
import Button from './Button'

const Hero = () => {
  return (
    <section className='flex flex-col md:justify-between md:flex-row mt-[60px] text-white md:min-h-[400px] lg:max-h-screen'>
      <div className='min-h-[300px] w-full md:max-w-[500px] flex md:ml-8 justify-center md:items-start md:text-left items-center flex-col text-center'>
        <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold leading-[42px] md:leading-[63px] uppercase'>
          <span className='text-[#ff3333]'>Move </span> 
          With <span className='block'>Confidence:</span> </h1>
        <h3 className='text-2xl md:text-3xl lg:text-4xl'>Smooth Moves Start Here</h3>
        <p className='lg:text-lg text-[14px] mt-4'>Professional and affordable. Fully insured.</p>
        <Button children="Get Started" styles="mt-4 w-[69px] h-[22px] md:w-[100px] md:h-[30px] lg:w-[177px] lg:h-[43px] text-[10px] md:text-[14px] lg:text-[18px]" />
      </div>

      <div className="">
        <img src={heroBg} alt="hero background" className="w-full lg:min-h-screen md:min-h-full bg-cover" />
      </div>
      
    </section>
  )
}

export default Hero