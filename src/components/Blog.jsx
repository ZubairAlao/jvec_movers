import React from 'react'
import { blogPosts } from '../constant'
import Button from './Button'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';

const Blog = () => {
  return (
    <section className='bg-bg-primary text-white'>
        <div className='py-12 mx-auto px-4 flex justify-center items-center flex-col'>
        <h1 className='text-2xl md:text-4xl lg:text-5xl text-center font-bold'>The Smooth Move Blog</h1>
        <h3 className='text-lg md:text-2xl lg:text-3xl text-center font-bold max-w-2xl'>Moving and relocation tips and everything in between</h3>
        <p className='text-sm md:text-base lg:text-lg text-center my-4 max-w-2xl'>
            Check out our blog for helpful tips and guides on making 
            your move as smooth as possible. Topics include 
            packing tips, moving checklists, and more.
        </p>

        <div className='lg:flex hidden items-center justify-between gap-4 mt-8'>
            {blogPosts.map((post) => (
                <div key={post.id} className="flex flex-col gap-4 items-start max-w-80">
                    <img src={post.image} alt={post.title} />
                    <div className='space-y-2'>
                        <h3 className='text-base lg:text-lg'>{post.date}</h3>
                        <p className='lg:text-lg text-base'>{post.title}</p>
                    </div>
                    <Button children="Learn More" styles="mt-4 w-[174px] h-[43px] md:w-[100px] md:h-[30px] lg:w-[174px] lg:h-[43px] text-[18px] md:text-[14px] lg:text-[18px] mt-8" />

                </div>
            ))}
        </div>

        <Splide 
            className='flex lg:hidden items-center justify-between gap-4 mt-8'
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
            {blogPosts.map((post) => (
                <SplideSlide key={post.id} className="flex flex-col gap-4 items-start max-w-80">
                    <img src={post.image} alt={post.title} />
                    <div className='space-y-2'>
                        <h3>{post.date}</h3>
                        <p>{post.title}</p>
                    </div>
                    <Button children="Learn More" styles="mt-4 w-[174px] h-[43px] md:w-[100px] md:h-[30px] lg:w-[174px] lg:h-[43px] text-[18px] md:text-[14px] lg:text-[18px] mt-8" />

                </SplideSlide>
            ))}
        </Splide>
        </div>
    </section>
  )
}

export default Blog