import React from 'react'
import adiraka from '../assets/portofolio/adiraka.jpg'
import srihadi from '../assets/portofolio/srihadi.jpg'
import tebas from '../assets/portofolio/tebas.jpg'
import unguin from '../assets/portofolio/unguin.jpg'
import oseana from '../assets/portofolio/oseana.jpg'
import kosmiku from '../assets/portofolio/kosmiku.jpg'
import Card from '../components/Card'
import Autoplay from '../components/Autoplay'

export default function MyWorks() {
    return (
        <section id='MyWorks' className='flex justify-center py-16 md:py-36 text-white'>
            <div className="w-4/5 md:w-3/4 grid grid-cols-1">
                <div className='flex flex-row gap-6'>
                    <div className='w-2 rounded-2xl h-full bg-based'></div>
                    <h2 className='font-extrabold text-xl md:text-4xl'>Proficient Languages and Technologies</h2>
                </div>
                <p className='text-sm md:text-base mt-6'>Welcome to my showcase of projects! Explore a selection of my recent work, where I bring ideas to life through front-end development.</p>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 sm:gap-10">
                    <Card title={'Ungu.in'} desc={'An innovative and efficient link shortening platform. With a focus on providing short and easily manageable links, UNGU.IN offers quick, reliable, and customizable solutions to meet various user needs.'} icon={unguin} link={'https://app.ungu.in/'} />
                    <Card title={'Adiraka Studio'} desc={'A website that offers high-quality multimedia services, ranging from creative graphic design to professional video production, with a focus on customer satisfaction and innovation.'} icon={adiraka} link={'https://adiraka.com/'} />
                    <Card title={'Srihadi Batik'} desc={"A platform showcasing a variety of high-quality Indonesian batik fabrics and clothing. From classic to contemporary designs, each product reflects the beauty and authenticity of Indonesia's batik cultural heritage."} icon={srihadi} link={'https://srihadi.com/'} />
                    <Card title={'Tebas Awards'} desc={'The Tebas Awards website showcases a portfolio of products featuring the best multimedia works, creating a space to exhibit talent and innovation within the industry.'} icon={tebas} link={'http://tebasaward.com/'} />
                    <Card title={'OSEANA'} desc={'An educational website about marine, which aims to increase knowledge about marine in order to create a sense of care for the sea in the younger generation.'} icon={oseana} link={'https://oseana.osorateam.com/'} />
                    <Card title={'Kosmiku'} desc={'The Kosmiku website is your destination to discover the wonders of the sky and unravel mythical mysteries in one place, embarking on extraordinary adventures across the solar system and deep into space.'} icon={kosmiku} link={'https://kosmiku-astronomi-e-learning.vercel.app/'} />
                </div>

                <div className='bg-white rounded-3xl text-black mt-16 md:mt-36 py-28 flex justify-center text-center'>
                    <div className="w-4/5 md:w-3/4 grid grid-cols-1">
                        <div className='flex flex-row gap-6 justify-center'>
                            <div className='w-2 rounded-2xl h-full bg-based'></div>
                            <h2 className='font-extrabold text-xl md:text-4xl'>Proficient Languages and Technologies</h2>
                        </div>
                        <p className='text-sm md:text-base mt-6'>Explore my proficiency in essential front-end development languages and technologies. With expertise in HTML5, CSS3, and JavaScript (ES6+), I create dynamic and engaging web experiences. Leveraging front-end frameworks like React.js and Vue.js, I craft scalable and responsive applications.</p>
                        <div  className='relative overflow-hidden'>
                            <Autoplay />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
