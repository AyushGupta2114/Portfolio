import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/microsoft.png'
import AVTR2 from '../../assets/logo2.png'
import AVTR3 from '../../assets/Google.png'


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
    name:'Artificial intelligence for Students',
    review:'This workshop on artificial intelligence and machine learning was wonderful for learning the basics and their applications.' 
  },
  {
    avatar: AVTR2,
    name:'Python for Everybody Specialization',
    review:'This specialization course was excellent for learning Python at all levels, from beginner to advanced.'
  },
  {
    avatar: AVTR3,
    name:'Robert C. Martin',
    review:'This specialization course was excellent for learning UI/UX design at all levels, from beginner to advanced.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Online</h5>
      <h2>Certifications</h2>

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