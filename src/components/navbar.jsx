import React, { useState } from "react";
import styles from "../style";
import { anilogo, close, menu } from "../assets";
import { navLinks } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="w-full flex flex-row py-6 justify-between items-center navbar">
      <div className="flex flex-row">
        <img src={anilogo} alt="Logo" className="w-[46px] h-[32px]" />
        <div className="flex flex-col align-middle justify-start text-xs uppercase font-poppins">
          <p>Anirudhan</p>
          <p>Srisudhan</p>
        </div>
      </div>
      <ul className="list-none sm:flex hidden flex-row justify-end items-center">
        {navLinks.map((nav,index) => (
          <li key = {nav.id} className='mr-8 last:mr-0 font-poppins font-normal cursor-pointer text-xs text-white'>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end">
        <img src={isOpen ? close : menu} alt='menu' className="w-[28px] h-[28px] object-contain" onClick={() => setIsOpen((prev) => !prev)}/>
          { isOpen && 
          <div className="flex justify-center absolute top-20 right-0 p-6 bg-black-gradient min-w-[140px] rounded-lg sidebar mx-4 my-2">
            <ul className="list-none flex flex-col justify-center items-center">
              {navLinks.map((nav,index) => (
                <li key = {nav.id} className='mb-8 last:mb-0 font-poppins font-normal cursor-pointer text-xs text-white'>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
}
      </div>
    </nav>
  );
};

export default Navbar;
