import React from 'react'
import Button from './Button'
import logo from '../assets/img/logo.png'
import Treasure from '../assets/img/Treasure.png'
import snowuniverse from '../assets/icon/snowuniverse.png'
import x from '../assets/icon/x.png'
import facebook from '../assets/icon/facebook.png'
import instagram from '../assets/icon/instagram.png'
import linkedin from '../assets/icon/linkedin.png'
import youtube from '../assets/icon/youtube.png'
import git from '../assets/icon/git.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className="bg-based-1 rounded-t-2xl relative">
            <div className='max-w-[1700px] mx-auto px-6 md:px-9 lg:px-32 py-6 pt-12 md:pt-32 md:pb-6 text-white z-10'>
                <div className="w-full lg:w-1/2">
                    <div className="grid grid-cols-1 mb-8">
                        <div className='flex flex-row gap-6'>
                            <div className='w-2 rounded-2xl h-full bg-based'></div>
                            <h2 className='font-extrabold text-xl md:text-4xl'>Let's Work With Me</h2>
                        </div>
                        <p className='text-sm md:text-base mt-6'>Do you have an idea for project and need some help to get started?</p>
                    </div>
                    <Button link={'https://www.instagram.com/messworks'} text={'Get Touch With Me'} />
                </div>
            </div>

            <img className='absolute top-16 right-0 h-[550px] z-0' src={Treasure} alt="" />

            <div className='max-w-[1700px] mx-auto px-6 md:px-9 lg:px-32 py-6 pt-12 md:pt-16 md:pb-6 text-white'>
                <div className="w-full lg:w-1/2">
                    <img className='w-[180px] z-10' src={logo} alt="" />
                    <p className='text-sm md:text-base mt-6 z-10'>I'm Meisha Afifah Putri, and I'm passionate about crafting intuitive and visually stunning web experiences as a front-end developer</p>
                </div>
                <div className="flex gap-6 mt-16">
                    <a href='#AboutMe' className='text-white'>About Me</a>
                    <a href='#MyWorks' className='text-white'>My Works</a>
                    <a href='https://www.instagram.com/messworks' className='text-white'>Contact</a>
                </div>
                <div className='mt-14 mb-6 bg-white h-[1px] w-full'></div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-9">
                        <Link to={'/'} ><img className='w-12 h-12' src={x} alt="" /></Link>
                        <Link to={'/'} ><img className='w-12 h-12' src={facebook} alt="" /></Link>
                        <Link to={'https://www.instagram.com/messworks'} ><img className='w-12 h-12' src={instagram} alt="" /></Link>
                        <Link to={'https://www.linkedin.com/in/meishafifah/'} ><img className='w-12 h-12' src={linkedin} alt="" /></Link>
                        <Link to={'/'} ><img className='w-12 h-12' src={youtube} alt="" /></Link>
                        <Link to={'https://github.com/meishafifah'} ><img className='w-12 h-12' src={git} alt="" /></Link>
                    </div>
                    <Link to={'https://www.instagram.com/snow.universe_'} className="flex items-center">
                        <p className='text-sm md:text-base'>Design by :</p>
                        <img className='w-12 h-12 ml-5 mr-3' src={snowuniverse} alt="" />
                        <p className='text-sm md:text-base font-bold'>snowuniverse</p>

                    </Link>
                </div>
            </div>
        </div>
    )
}
