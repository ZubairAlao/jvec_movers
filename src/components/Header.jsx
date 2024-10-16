import React, { useState } from 'react';
import { navHeaders } from '../constant';
import { logoPng, menuBar, close, call, arrowDownSvg, arrowDownPng } from "../assets";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Header() {

  const [toggle, setToggle] = useState(false);

  const handleToogleButton = () => {
    setToggle(!toggle)
  }
  
  return (
    <header className='bg-primary w-full fixed top-0 z-50'>
      <div className='flex justify-center items-center'>
        <div className='md:h-[67px] h-[82px] w-full container flex justify-between items-center text-white shadow-md '>
          <Link to='/' className='flex items-center justify-center'>
            <img src={logoPng} alt="Jvec Movers" className="w-[67px] h-[36px] md:w-[52px] md:h-[28px]" />
          </Link>

          <nav className='flex ml-4 items-center'>
            {/* desktop */}
            <div className='md:flex items-center hidden'>
              <ul className='flex justify-center items-center flex-1'>
                {navHeaders.map((link) => (
                  <li className='' key={link.label}>
                    <NavLink
                      to={link.link}
                      className={({ isActive }) => isActive
                        ? "relative text-white flex gap-2 items-center p-2 text-[14px] after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:h-[4px] after:bg-buttonColor transition-all duration-300 ease-in-out"
                        : "flex gap-2 items-center w-full p-2 hover:text-white text-[#9C9D9F] text-[14px] transition-all duration-300 ease-in-out"
                      }
                    >
                      {link.label}
                      <span>
                        {link.children && (
                          <img src={arrowDownPng} alt="arrowdown" className="w-[16px] h-fit" />
                        )}
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* mobile */}
            <div
              className={`${
                toggle ? "md:flex flex-col translate-x-0 opacity-100" : "translate-x-full opacity-50"
              } flex md:hidden bg-primary absolute top-0 right-0 p-6 h-screen transition-all duration-500 ease-in-out transform w-[70%]`}
            >
              <div className='flex justify-between items-center mb-10'>
                <img
                  src={logoPng}
                  alt="logo"
                  className="w-[67px] h-[36px] object-contain"
                  onClick={handleToogleButton}
                />
                <img
                  src={close}
                  alt="close"
                  className="w-[20px] h-[20px] object-contain mb-4 mr-4 cursor-pointer"
                  onClick={handleToogleButton}
                />
              </div>
              <ul>
                {navHeaders.map((link) => (
                  <li className={`mb-2 text-[16px]`} key={link.label}>
                    <NavLink
                      to={link.link}
                      onClick={handleToogleButton}
                      className={({ isActive }) => isActive ? "bg-dimBlue flex gap-2 items-center w-full py-2 px-4" : "flex gap-2 items-center w-full py-2 px-4 hover:bg-dimBlue transition-all duration-300 ease-in-out"}
                    >
                      {link.label}
                      <span className='ml-auto'>
                        {link.children && (
                          <img src={arrowDownSvg} alt="arrowdown" className="w-[16px] h-[16px] object-contain" />
                        )}
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* cta */}
          <div className='space-x-4 flex items-center justify-center ml-auto'>
            <div className='md:flex hidden gap-2 items-center'>
              <img
                src={call}
                alt="call"
                className="w-[20px] h-[20px] object-contain"
              />
              <p className='underline text-[16px]'>0814-097-9054</p>
            </div>
            <button className='hover:bg-opacity-95 w-[69px] h-[22px] md:w-[100px] md:h-[30px] bg-buttonColor text-[10px] md:text-[14px] cursor-pointer'>
              Free Quote
            </button>
          </div>

          {/* toggleBar */}
          <img
            src={menuBar}
            alt="menu"
            className="w-[30px] h-[30px] object-contain flex md:hidden cursor-pointer ml-4"
            onClick={handleToogleButton}
          />
        </div>
      </div>
    </header>

  );
}
