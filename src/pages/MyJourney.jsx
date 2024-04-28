import React from 'react'
import OceanCave from '../assets/img/OceanCave.png'
import FrameImage from '../assets/icon/FrameImage.png'
import osora from '../assets/icon/osora.png'
import rapidev from '../assets/icon/rapidev.png'
import amcc from '../assets/icon/amcc.png'
import itc from '../assets/icon/itc.png'

export default function MyJourney() {
    return (
        <section id='MyJourney' className='rounded-2xl bg-based-1 relative'>
            <div className="flex justify-center py-24 text-white">
                <div className="w-4/5 md:w-3/4 grid grid-cols-1">
                    <div className='flex flex-row gap-6 mb-12'>
                        <div className='w-2 rounded-2xl h-full bg-based z-10'></div>
                        <h2 className='font-extrabold text-xl md:text-4xl z-10'>See My Journey</h2>
                    </div>

                    <div className="flex flex-col gap-6 z-10">
                        <div className="flex flex-row items-center gap-7">
                            <div className="w-[100px] h-[100px] relative flex justify-center items-center">
                                <img className='w-16 h-16 absolute rounded-full' src={osora} alt="" />
                                <img className='absolute' src={FrameImage} alt="" />
                            </div>
                            <div>
                                <h3 className='font-extrabold text-xl md:text-2xl'>Front End Website Developer</h3>
                                <p className='text-base font-Medium my-3'>PT OSORA SOLUSI ANAK BANGSA</p>
                                <p className='text-base font-Medium text-based-2'>Apr 2021 - Present</p>
                            </div>
                        </div>

                        <div className="flex flex-row items-center gap-7">
                            <div className="w-[100px] h-[100px] relative flex justify-center items-center">
                                <img className='w-16 h-16 absolute rounded-full' src={rapidev} alt="" />
                                <img className='absolute' src={FrameImage} alt="" />
                            </div>
                            <div>
                                <h3 className='font-extrabold text-xl md:text-2xl'>Front End Website Developer</h3>
                                <p className='text-base font-Medium my-3'>PT. Rapidev Inovasi Nusantara · Internship</p>
                                <p className='text-base font-Medium text-based-2'>Jun 2022 - Sep 2022</p>
                            </div>
                        </div>

                        <div className="flex flex-row items-center gap-7">
                            <div className="w-[100px] h-[100px] relative flex justify-center items-center">
                                <img className='w-16 h-16 absolute rounded-full' src={amcc} alt="" />
                                <img className='absolute' src={FrameImage} alt="" />
                            </div>
                            <div>
                                <h3 className='font-extrabold text-xl md:text-2xl'>Instructor of Mobile Developer</h3>
                                <p className='text-base font-Medium my-3'>Universitas Amikom Yogyakarta · AMCC (Amikom Computer Club)</p>
                                <p className='text-base font-Medium text-based-2'>Dec 2021 - Dec 2022</p>
                            </div>
                        </div>

                        <div className="flex flex-row items-center gap-7">
                            <div className="w-[100px] h-[100px] relative flex justify-center items-center">
                                <img className='w-16 h-16 absolute rounded-full' src={itc} alt="" />
                                <img className='absolute' src={FrameImage} alt="" />
                            </div>
                            <div>
                                <h3 className='font-extrabold text-xl md:text-2xl'>Instructor of Mobile Developer</h3>
                                <p className='text-base font-Medium my-3'>Universitas Amikom Yogyakarta · Introduction To Computer</p>
                                <p className='text-base font-Medium text-based-2'>Jul 2021- Oct 2021</p>
                            </div>
                        </div>
                    </div>
                    <img className='absolute h-full top-0 right-0 rounded-r-2xl z-0 hidden lg:block' src={OceanCave} alt="" />
                </div>
            </div>
        </section>
    )
}
