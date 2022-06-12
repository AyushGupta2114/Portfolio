import React from 'react'
import './contact.css'
import {MdOutlineEmail} from  'react-icons/md'
import {RiMessengerLine} from  'react-icons/ri'
import {ImWhatsapp} from  'react-icons/im'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset()

    emailjs.sendForm('service_lk2az1d', 'template_ny9lwcj', form.current, '4c7XxSdEF3NKZvcH8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contac__option-icon'/>
            <h4>Email</h4>
            <h5>sumitayush22@gmail.com</h5>
            <a href="mailto:sumitayushh22@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contac__option-icon'/>
            <h4>Messenger</h4>
            <h5>ayush gupta</h5>
            <a href="https://m.me/ernest.achiever"target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <ImWhatsapp className='contac__option-icon'/>
            <h4>WhatApp</h4>
            <h5>+</h5>
            <a href="https://wa.me/8765705001?text="target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Meassage' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
           </form>
      </div>
    </section>
  )
}

export default Contact