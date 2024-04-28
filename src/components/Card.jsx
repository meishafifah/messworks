import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

export default function Card({ title, desc, icon, link }) {
    return (
        <div className='relative'>
            <div className="bg-white shadow-lg rounded-3xl p-4">
                <img className='object-cover object-center rounded-xl w-full h-48' src={icon} alt="" />
            </div>
            <h5 className='text-lg sm:text-xl sm:leading-normal font-bold mt-6 mb-3'>{title}</h5>
            <p className='text-base mb-14'>{desc}</p>
            <div className="absolute bottom-0">
                <Button link={link} text={'View Page'} />
            </div>
        </div>
    )
}
