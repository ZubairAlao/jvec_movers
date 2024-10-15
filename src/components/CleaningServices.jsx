import React from 'react'
import { cleaningServiceLogo, redLine } from '../assets'
import Button from './Button'
import { motion } from 'framer-motion'

const CleaningServices = () => {
  return (
    <section className='bg-white text-black'>
        <motion.div className='py-12 container flex flex-col md:flex-row gap-8 justify-center md:justify-between items-center'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >

          <div className='flex flex-col justify-center md:items-start items-center flex-1 text-center md:text-left md:max-w-xl xl:w-full'>
            <h1 className='text-2xl md:text-4xl xl:text-5xl font-bold'>We Move and Clean</h1>
            <p className='text-xl md:text-2xl xl:text-3xl mt-8'>Powered by MD
              Environmental Services |
              Professional Cleaning
              Services
            </p>
          <Button children="Learn More" styles="md:self-start mt-4 w-[174px] h-[43px] md:w-[100px] md:h-[30px] xl:w-[174px] xl:h-[43px] text-[18px] md:text-[14px] xl:text-[18px] mt-8" />
          </div>

          <div>
            <img src={cleaningServiceLogo} alt="cleaning service" className='w-[200px] h-fit' />
          </div>
        </motion.div>
    </section>
  )
}

export default CleaningServices