import React from 'react'
import wave from '../assets/img/wave.png'
import waves from '../assets/img/waves.png'
import shark from '../assets/img/shark.png'

export default function Hero() {
    return (
        <section id='hero' className='py-16 md:py-28 text-center text-white h-[450px] md:h-[600px] 2xl:h-[900px] w-full relative overflow-x-hidden rounded-b-3xl'>
            <h1 className='font-bold mb-6 text-2xl md:text-5xl leading-64 relative z-10'>Let’s Dive My Work</h1>
            <p className='text-sm md:text-base font-light relative z-10'> Best Work Project Creation By Meisha Afifah Putri</p>
            <img className='absolute bottom-0 rounded-b-3xl z-0' src={waves} alt="" />
            <img className='absolute bottom-0 rounded-b-3xl z-0' src={wave} alt="" />
            <img className='w-[300px] md:w-[400px] xl:w-[500px] absolute bottom-16 right-28 z-0' src={shark} alt="" />
        </section>
    )
}
