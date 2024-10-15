import React from 'react'
import { geography } from '../assets'
import { ourServices } from '../constant'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const GeographicCoverage = () => {
  return (
    <section className='bg-white text-black'>
        <div className='py-12 container space-y-8'>
            <h1 className='lg:text-5xl md:text-4xl text-2xl uppercase text-center font-bold'>Geographic Coverage</h1>
            <div className='relative flex items-center justify-center'>
                <p className="text-sm md:text-base lg:text-lg font-semibold absolute top-10 p-4 shadow-md rounded-md bg-white"><span className='uppercase'>Local:</span> Serving the Tri-Cities area and other cities in Tennessee</p>
                <p className="text-sm md:text-base lg:text-lg font-semibold absolute p-4 shadow-md rounded-md top-1/2 bg-white w-[50%]"><span className='uppercase'>Long-Distance:</span> Covering moves to Virginia, North Carolina, South Carolina, Atlanta, Kentucky, and Washington DC.</p>
                <img src={geography} alt="map" />
            </div>
            <div className=''>
                <h1 className='lg:text-5xl md:text-4xl text-2xl text-primary text-center font-bold uppercase mb-2'>Clients we Serve</h1>
                <h3 className='lg:text-4xl md:text-3xl text-xl  text-center font-bold uppercase'>Our services cater to</h3>

                <Splide 
                    className='flex lg:hidden flex-col gap-4 mt-8'
                    options={{
                        width: "100%",
                        rewind: true,
                        autoplay: "true",
                        perPage: 2,
                        perMove: "1",
                        gap: "1rem",
                        // height: "10rem",
                        type: "loop",
                        rewindSpeed: "3000",
                        // arrows: "false",
                        pagination: "false",
                    }}
                >
                    {ourServices.map((service) => (
                        <SplideSlide key={service.id} className="flex gap-4 items-center  flex-col p-6 bg-dimWhite">
                            <h3 className='text-lg font-bold'>{service.title}</h3>
                            <img src={service.image} alt={service.title} className='' />
                            <p className='text-base'>{service.text}</p>
                        </SplideSlide>
                    ))}
                </Splide>
                <div 
                    className='lg:flex hidden justify-center items-center gap-4 mt-8'
                >
                    {ourServices.map((service) => (
                        <div key={service.id} className="flex gap-4 items-center justify-between  flex-col p-6 bg-dimWhite">
                            <h3 className='text-lg font-bold'>{service.title}</h3>
                            <img src={service.image} alt={service.title} className='' />
                            <p className='text-base'>{service.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default GeographicCoverage