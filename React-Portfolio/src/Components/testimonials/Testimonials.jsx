import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/Google.png'
import AVTR2 from '../../assets/logo2.png'
import AVTR3 from '../../assets/logo2.png'


import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

const data=[
  {
    avatar:AVTR1,
    name:'Martin Fowler',
    review:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.' 
  },
  {
    avatar: AVTR2,
    name:'Eagleson’s Law',
    review:'Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else.'
  },
  {
    avatar: AVTR3,
    name:'Robert C. Martin',
    review:'It is not the language that makes programs appear simple. It is the programmer that make the language appear simple!'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Some</h5>
      <h2>Quotes</h2>

      <Swiper className="container testimonials__container"
         effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        >
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index} className='testimonial'>
              <div class="client__avatar">
                <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
            </SwiperSlide>
            )

          })
        }
      </Swiper>
    </section>
  )
      }


export default Testimonials