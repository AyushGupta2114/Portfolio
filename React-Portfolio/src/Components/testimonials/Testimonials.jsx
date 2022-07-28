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
    name:'Tin Show',
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit itaque optio officiis laboriosam enim quod cupiditate delectus ea, dolorem unde fugit maxime sequi quia dolor! Dignissimos voluptaibus rerum quas sequice"
  },
  {
    avatar: AVTR2,
    name:'Shatta Wale',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit itaque optio officiis laboriosam enim quod cupiditate delectus ea, dolorem unde fugit maxime sequi quia dolor! Dignissimos voluptatibus rerum quas sequice'
  },
  {
    avatar: AVTR3,
    name:'Kwame Despite',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit itaque optio officiis laboriosam enim quod cupiditate delectus ea, dolorem unde fugit maxime sequi quia dolor! Dignissimos voluptatibus rerum quas sequice'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

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