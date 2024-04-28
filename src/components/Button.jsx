import React from 'react'

export default function Button({ link, text }) {
  return (
    <a href={link} className='rounded-3xl bg-based px-8 py-3 text-white'>{text}</a>
  )
}
