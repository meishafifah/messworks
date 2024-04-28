import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import logo from '../assets/img/logo.png';
import dropdown from '../assets/icon/dropdown.svg'
import close from '../assets/icon/close.svg'

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className='max-w-[1700px] mx-auto px-0 md:px-4 lg:px-32 py-6'>
        <div className="justify-between items-center gap-4 hidden md:hidden lg:flex">
          <Link to={'/'}>
            <img className='h-10' src={logo} alt="" />
          </Link>
          <div className="flex justify-between gap-4 text-white">
            <Button link={'#AboutMe'} text={'About Me'} />
            <Button link={'#MyWorks'} text={'My Works'} />
            <Button link={'#Contact'} text={'Contact'} />
          </div>
        </div>
        <nav className="px-6">
          <div className="container flex flex-wrap items-center justify-between mx-auto md:flex lg:hidden relative">
            <Link to={'/'}>
              <img className='h-8' src={logo} alt="" />
            </Link>
            <div className='flex flex-wrap items-center justify-end'>
              <button type="button" onClick={() => setOpenMenu(!openMenu)} className="inline-flex items-center p-2 ml-3 text-sm text-gray-500">
                <span className="sr-only">Open main menu</span>
                <img className="w-6 h-6" src={dropdown} alt="" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      <div onClick={() => setOpenMenu(false)} className={`duration-500 fixed inset-0 bg-black z-40 ${openMenu ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}></div>

      {
        openMenu && (
          <div className='duration-500 w-full fixed top-0 z-50 bg-background px-6 shadow-2xl translate-x-0'>
            <div className="pt-9 pb-6 flex justify-between">
              <Link to={'/'}>
                <img className='w-40 md:w-auto' src={logo} alt="Mess Works logo" />
              </Link>
              <img className='cursor-pointer' onClick={() => setOpenMenu(false)} src={close} alt="" />
            </div>

            <ul className="flex flex-col rounded-lg pb-4 text-white">
              <li>
                <a href='#AboutMe' className='duration-200 block text-lg font-bold py-3 hover:text-based rounded'>About Me</a>
              </li>
              <li>
                <a href='#MyWorks' className='duration-200 block text-lg font-bold py-3 hover:text-based rounded'>My Works</a>
              </li>
              <li>
                <a href='https://www.instagram.com/messworks' className='duration-200 block text-lg font-bold py-3 hover:text-based rounded'>Contact</a>
              </li>
            </ul>
          </div>
        )
      }
    </>
  )
}
