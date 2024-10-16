import React from 'react'
import { facebook, logoPng, spiralRed, whatsapp } from '../assets'
import Button from './Button'
import { quickLinkFooterLink, residentailMovingLinkFooter, specialtyMovesFooterLink } from '../constant'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-[#292D32] text-white'>
        <div className='flex flex-col w-full mx-auto px-8 max-w-[1100px] py-16 md:flex-row justify-between'>
            <div className='flex flex-col items-center md:max-w-48'>
                <img src={logoPng} alt="logo"className="w-[138px] h-[75px] object-contain" />
                <p className='text-sm'>Copyright &copy; 2024</p>
                <p className='text-sm md:text-center'>JVEC MOVERS. All Rights Reserved</p>

                <div className='flex flex-col items-center text-[#6F7173] mt-8 mb-4 xl:text-base text-sm' >
                    <p>Book Now - Schedule Your Move</p>
                    <Button children="Free Quote" styles="md:self-start mt-4 w-[174px] h-[43px] md:w-[100px] md:h-[30px] md:w-[174px] md:h-[43px] text-[18px] md:text-[14px] md:text-[18px] mt-8" />
                </div>
            </div>

            <div className='flex flex-col items-center'>
                <h3 className='mt-8 md:mt-0 text-[#FF3333] text-xl'>SERVICES</h3>
                <div className='flex flex-col items-center xl:text-base text-sm gap-2'>
                    <h3 className='text-[#6F7173]'>Residential Moving</h3>
                    {residentailMovingLinkFooter.map((link) => (
                        <Link
                            key={link.label}
                            to={link.link}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className='flex flex-col items-center xl:text-base text-sm mt-4 gap-4'>
                    <h3 className='text-[#6F7173]'>Specialty Moves</h3>
                    {specialtyMovesFooterLink.map((link) => (
                        <Link
                            key={link.label}
                            to={link.link}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>

            <div className='flex flex-col items-center mt-8 md:mt-0'>
                <h3 className='text-[#FF3333] text-xl'>QUICK LINKS</h3>
                <div className='flex flex-col items-center gap-4 mt-4 xl:text-base text-sm'>
                    {quickLinkFooterLink.map((link) => (
                        <Link
                            key={link.label}
                            to={link.link}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>

            <div className='flex flex-col items-center mt-8 md:mt-0 gap-4 md:max-w-48'>
                <h1 className='text-[#FF3333] text-xl'>CONTACT US</h1>
                <p className='text-center xl:text-base text-sm'>
                    12 Rev. Oguniyi Street, off Oba 
                    Akinjobi, ikeja GRA, Lagos, Nigeria.
                </p>

                <div className='flex flex-col items-center gap-2 xl:text-base text-sm'>
                    <p>
                        Phone: <span className='text-[#FF3333] underline'>+234-0814-097-9054</span>
                    </p>
                    <p>
                        Email: <span className='text-[#FF3333] underline'>hello@jvecmovers.com</span>
                    </p>
                </div>

                    <div className='flex flex-col items-center mt-8 md:mt-0 gap-4'>
                        <h1 className='text-[#FF3333] text-xl'>Follow Us</h1>
                        <p className='xl:text-base text-sm'>
                            Stay connected with us on social media 
                            for updates and promotions
                        </p>

                    <div className='flex flex-col md:flex-row xl:text-base text-sm gap-4'>
                        <div className='flex gap-1'>
                            <img src={whatsapp} alt="whatsapp" />
                            <span>WhatsApp</span>
                        </div>
                        <div className='flex gap-1'>
                            <img src={facebook} alt="facebook" />
                            <span>Facebook</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        <img src={spiralRed} alt="spiral red"  className='w-full' />
    </footer>
  )
}

export default Footer