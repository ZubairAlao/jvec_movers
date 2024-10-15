import React from 'react'
import Button from './Button'
import { ourTeamBg, ourTeamCustomer, ourTeamMoving, ourTeamSafetyProtocol } from '../assets'

const OurTeam = () => {
  return (
    <section className='relative'>

        <div className='bg-cover absolute inset-0 bg-center' style={{ backgroundImage: `url(${ourTeamBg})`}}>
        </div>

        <div className='relative container bg-black text-white space-y-8 bg-opacity-90 py-12'>
            <div className='flex flex-col space-y-4 justify-center items-center'>
                <h1 className="text-2xl md:text-4xl lg:text-5xl text-[#FF0000] text-center font-bold">OUR TEAM</h1>
                <p className="text-lg md:text-2xl lg:text-3xl text-center font-semibold">HIGHLY TRAINED PROFESSIONALS IN</p>
            </div>

            <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
                <div className='flex justify-center items-center flex-col w-full max-w-[400px] md:max-w-[450px]' >
                    <img src={ourTeamMoving} alt="team moving"  className='w-full h-auto'/>
                    <p className='font-semibold text-lg lg:text-xl text-center'>Moving Techniques</p>
                </div>
                <div className='flex justify-center items-center flex-col w-full max-w-[400px] md:max-w-[450px]'>
                    <img src={ourTeamSafetyProtocol} alt="team moving" className='w-full h-auto' />
                    <p className='font-semibold text-lg lg:text-xl text-center'>Safety Protocols</p>
                </div>
                <div className='flex justify-center items-center flex-col w-full max-w-[400px] md:max-w-[450px]'>
                    <img src={ourTeamCustomer} alt="team moving"  className='w-full h-auto'/>
                    <p className='font-semibold text-base lg:text-lg text-center'>Customer Service Standards</p>
                </div>
            </div>

            <div className='flex justify-center flex-col items-center gap-4'>
                <p className="text-base lg:text-3xl text-center font-semibold">
                    Our team comprises highly trained 
                    professionals who can handle moves of all sizes, 
                    from small apartments to large commercial 
                    relocations. Led by our founder and CEO, 
                    <span className='text-[#FF0000]'> Joshua</span>, we are committed to excellence in every 
                    move. Our staff undergoes rigorous training in 
                    moving techniques, safety protocols, and 
                    customer service standards to ensure your 
                    belongings are handled with the utmost care 
                    and professionalism.
                </p>
                <Button children="Learn More" styles="mt-4 w-[174px] h-[43px] md:w-[100px] md:h-[30px] lg:w-[174px] lg:h-[43px] text-[18px] md:text-[14px] lg:text-[18px] mt-8" />
            </div>
        </div>

    </section>
  )
}

export default OurTeam