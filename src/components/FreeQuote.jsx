import React from 'react'
import { arrowRight, redLine } from '../assets'

const FreeQuote = () => {
  return (
    <section className='bg-[#101010] text-white'>
        <div className='py-12 container md:flex gap-40 justify-center items-center'>
           <div className='xl:max-w-xl max-w-xl space-y-8'>
            <h1 className='text-2xl md:text-4xl xl:text-5xl py-6 text-center md:text-left font-bold'>Ready for a Stressless Move? Get your Free Quote </h1>
            <p className='text-sm md:text-base xl:text-lg text-center md:text-left'>Fill our online booking form to schedule your move with JVEC movers. Provide details about your move, and we will get back to you with a customized plan and quote.</p>
          </div>
          <div className='xl:-w-xl md:max-w-sm mt-8 md:mt-0'>
              <div className='flex items-center justify-between'>
              <p className='text-3xl text-[#FF3333]'>Free Quote</p>
              <img src={arrowRight} alt="arrowright" className='' />
              </div>
              <img src={redLine} alt="" />
          </div>
        </div>
    </section>
  )
}

export default FreeQuote