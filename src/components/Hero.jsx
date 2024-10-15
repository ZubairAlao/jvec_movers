import React, { useEffect } from 'react'
import { heroBg } from '../assets'
import Button from './Button'
import { motion, useAnimate, useAnimation } from 'framer-motion'
useEffect

const Hero = () => {
  const animatedText1 = `Move`;
  const animatedText2 = `Confidence`;

  const ctrls1 = useAnimation();
  const ctrls2 = useAnimation();

  const animateText = (text, controls) => {
    const chars = text.split("");
    useEffect(() => {
      const animation = chars.map((char, index) => ({
        opacity: [0, 1],
        transition: { duration: 0.8, delay: index * 0.1, repeat: Infinity, repeatType: "reverse" }
      }));
      controls.start(animation);
    }, [chars, controls]);

    return chars;
  };

  const chars1 = animateText(animatedText1, ctrls1);
  const chars2 = animateText(animatedText2, ctrls2);
  
  return (
    <section className='flex flex-col md:justify-between md:flex-row mt-[60px] text-white md:min-h-[400px] xl:max-h-screen'>
      <div className='min-h-[300px] w-full md:max-w-[500px] flex md:ml-8 justify-center md:items-start md:text-left items-center flex-col text-center'>
      <h1 className='text-4xl md:text-5xl xl:text-7xl font-bold leading-[42px] md:leading-[63px] uppercase'>
          <motion.span className='text-[#ff3333]' animate={ctrls1}>
            {chars1.map((char, index) => (
              <motion.span key={index} className="inline-block">
                {char}
              </motion.span>
            ))}
          </motion.span>
          <span> With </span>
          <motion.span className='block' animate={ctrls2}>
            {chars2.map((char, index) => (
              <motion.span key={index} className="inline-block">
                {char}
              </motion.span>
            ))}
          </motion.span>
        </h1>
        <h3 className='text-2xl md:text-3xl xl:text-4xl'>Smooth Moves Start Here</h3>
        <p className='xl:text-lg text-[14px] mt-4'>Professional and affordable. Fully insured.</p>
        <Button children="Get Started" styles="mt-4 w-[69px] h-[22px] md:w-[100px] md:h-[30px] xl:w-[177px] xl:h-[43px] text-[10px] md:text-[14px] xl:text-[18px]" />
      </div>

      <motion.div 
        animate={{ y: [0, 50, 0] }}
        transition={{ ease: "easeOut", duration: 2 }}
        className=""
      >
        <img src={heroBg} alt="hero background" className="w-full xl:min-h-screen md:min-h-full bg-cover" />
      </motion.div>
      
    </section>
  )
}

export default Hero