import React from 'react'
import Button from './Button'
import { whyChooseUs } from '../constant'
import { spiralGray } from '../assets'

const Benefits = () => {
  return (
    <section className='relative bg-white py-12 lg:min-h-screen'>

        <div className='bg-cover absolute inset-0 bg-center' style={{ backgroundImage: `url(${spiralGray})`}}>
        </div>

        <div className='container text-black space-y-12 lg:flex justify-between '>
            <div className='flex flex-col justify-center items-center lg:max-w-96'>
                <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-bold">WHY CHOOSE US</h1>
                <p className="text-lg md:text-2xl lg:text-3xl text-center font-semibold">YOUR PERSONALIZED SOLUTION</p>
                <p className="text-sm md:text-base lg:text-lg text-center mt-4">
                    Our mission is to provide stress-free, efficient, and 
                    courteous moving and cleaning services, ensuring 
                    seamless transitions for both residential and 
                    commercial clients. Explore our services and see how 
                    we can make your next move effortless.
                </p>
                <Button children="Learn More" styles="mt-4 w-[174px] h-[43px] md:w-[100px] md:h-[30px] lg:w-[174px] lg:h-[43px] text-[18px] md:text-[14px] lg:text-[18px] mt-8" />
            </div>

            <div className='relative'>
                <div className='relative grid grid-cols-1 md:grid-cols-2 gap-4 bg-white md:shadow-md px-4 py-8 lg:max-w-3xl'>
                    {whyChooseUs.map((benefit, index) => (
                        <div key={benefit.id} className={`flex gap-4 items-start ${index % 2 === 0 ? "border-r" : ""}
                        ${index === 0 || 1 ? "border-b" : ""}
                         border-[#BCBDBE] border-spacing-4 pb-4`}>
                            <img src={benefit.image} alt={benefit.title}  className='md:w-[29px] lg-[35px] h-fit object-cover'/>
                            <div className='space-y-2'>
                                <h3 className='text-base md: font-semibold'>{benefit.title}</h3>
                                <p className='text-sm md:text-base'>{benefit.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>

    </section>
  )
}

export default Benefits