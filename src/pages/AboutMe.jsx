import React from 'react'
import ImageCharacter from '../assets/img/ImageCharacter.png'

export default function AboutMe() {
    return (
        <section id='AboutMe' className='px-6 md:px-9 lg:px-32 py-16 md:py-20 text-white'>
            <div className="flex flex-col lg:flex-row items-center">
                <img className='w-[350px] md:w-[500px]' src={ImageCharacter} alt="" />
                <div className="grid grid-cols-1">
                    <div className='flex flex-row gap-6'>
                        <div className='w-2 rounded-2xl h-full bg-based'></div>
                        <h2 className='font-extrabold text-xl md:text-4xl'>About Me</h2>
                    </div>
                    <p className='text-sm md:text-base mt-6 mb-4'>I'm Meisha Afifah Putri, and I'm passionate about crafting intuitive and visually stunning web experiences as a front-end developer. With a blend of creativity and technical expertise, I specialize in bringing designs to life through clean, efficient code and seamless user interactions.</p>
                    <p className='text-sm md:text-base'>My journey in web development began 3 Years ago, and since then, I've honed my skills in HTML, CSS, and JavaScript to build responsive and dynamic websites that captivate audiences. Whether it's creating pixel-perfect layouts or optimizing performance for a flawless user experience, I thrive on turning ideas into reality in the digital realm.</p>
                </div>
            </div>
        </section>
    )
}
