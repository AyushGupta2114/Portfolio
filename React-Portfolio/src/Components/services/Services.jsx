import React from 'react'
import './services.css'
import {BsCheck2All} from 'react-icons/bs'
const Services = () => {
  return (
    <section id='services'>
      <h5>Different</h5>
      <h2>Stages</h2>

      <div
        className="container services__container">
          <article className="service">
          <div className="service__head">
            <h3>UI/UX design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2All  size={25} className='service__list-icon'/>
              <p>this section is for the different stages of education 
                elit.</p>
            </li>
            <li>
              <BsCheck2All size={25} className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                elit.</p>
            </li>
            <li>
              <BsCheck2All  size={25} className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2All size={25}  className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
          </article>
          <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2All size={25} className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2All size={25} className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2All size={25} className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2All size={25} className='service__list-icon'/>
              <p>Lorem ipsu jgjhgjgjgj jghgj m dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2All size={25} className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>

          </article>
          <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2All size={25} className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2All size={25} className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2All size={25} className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheck2All size={25} className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            
          </ul>
          </article>
      </div>
    </section>
  )
}

export default Services