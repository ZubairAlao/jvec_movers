import React from 'react'
import { stressFreeBg } from '../assets'
import Button from './Button'
import { motion } from 'framer-motion'

const Represent = () => {
  return (
    <motion.section 
      className='bg-dimWhite'
    >
      <motion.div 
        className='relative md:flex flex-row text-white py-12 container'
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      >
        <div className="w-full md:w-3/4">
          <img src={stressFreeBg} alt="hero background" className="w-full" />
        </div>

        <div 
          className='
            flex justify-center items-center flex-col
            text-center mx-2 px-2 bg-primary
            relative -top-16 py-8 space-y-8
            md:absolute md:right-[20px] md:top-1/2 md:transform md:-translate-y-1/2 md:w-[40%] xl:w-[40%] z-10'
        >
          <div>
            <h1 className='text-2xl font-bold uppercase'>What We <span className="block">Represent</span></h1>
            <h3 className='text-lg uppercase'>Stress-Free Moves, <span className="block">Perfect Clean</span></h3>
          </div>
          <p className='text-[12px]'>JVEC movers is dedicated to providing top-notch 
              moving and cleaning services. Based in Johnson 
              City, Tennessee, we cater to both local and longdistance relocations, including moves to Virginia, 
              North Carolina, South Carolina, Atlanta, 
              Kentucky, and Washington DC. We specialize in 
              making your moving experience as smooth and 
              stress-free as possible, from packing and 
              transportation to cleaning your new home or 
              office.
          </p>
          <Button children="Learn More" styles="mt-4 w-[174px] h-[43px] md:w-[100px] md:h-[30px] xl:w-[174px] xl:h-[43px] text-[18px] md:text-[14px] xl:text-[18px] mt-8" />
        </div>
      </motion.div>
      
    </motion.section>
  )
}

export default Represent