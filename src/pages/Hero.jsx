import React from 'react'
import wave from '../assets/img/wave.png'
import waves from '../assets/img/waves.png'
import shark from '../assets/img/shark.png'

export default function Hero() {
    return (
        <section id='hero' className='py-16 md:py-28 text-center text-white h-[600px] w-full relative overflow-x-hidden rounded-b-3xl'>
            <div className='flex justify-center items-center mb-6'>
                <img className='w-[200px] md:w-[400px]' src={''} alt="" />
            </div>
            <h1 className='font-bold mb-6 text-2xl md:text-5xl leading-64'>Let’s Dive My Work</h1>
            <p className='text-sm md:text-base font-light'> Best Work Project Creation By Meisha Afifah Putri</p>
            <img className='z-0 absolute bottom-0 rounded-b-3xl ' src={waves} alt="" />
            <img className='z-0 absolute bottom-0 rounded-b-3xl ' src={wave} alt="" />
            <img className='w-[500px] z-0 absolute bottom-16 right-28' src={shark} alt="" />
        </section>
    )
}
