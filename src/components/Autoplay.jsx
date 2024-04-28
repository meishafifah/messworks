import React from 'react'
import Slider from 'react-slick';
import iconReact from '../assets/tech/React.png'
import Bootstrap from '../assets/tech/Bootstrap.png'
import Css from '../assets/tech/Css.png'
import Flowbite from '../assets/tech/Flowbite.png'
import Html from '../assets/tech/Html.png'
import Tailwind from '../assets/tech/Tailwind.png'

export default function Autoplay() {
    const techSlider = {
        dots: false,
        infinite: true,
        draggable: false,
        focusOnSelect: false,
        slidesToShow: 8,
        slidesToScroll: 2,
        autoplay: true,
        speed: 6000,
        autoplaySpeed: 0,
        cssEase: "linear",
        initialSlide: 0,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 8,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    };
  return (
    <Slider {...techSlider}>
            <div><img className='' src={iconReact} alt="" /></div>
            <div><img className='' src={Bootstrap} alt="" /></div>
            <div><img className='' src={Css} alt="" /></div>
            <div><img className='' src={Flowbite} alt="" /></div>
            <div><img className='' src={Html} alt="" /></div>
            <div><img className='' src={Tailwind} alt="" /></div>
    </Slider>
  )
}
