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
            <h3>Education</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2All  size={17} className='service__list-icon'/>
              <p>Air Force School Gorakhpur </p>
            </li>
            <li>
              <BsCheck2All size={17} className='service__list-icon'/>
              <p>Class I-XII 2008-2020 </p>
            </li>
            <li>
              <BsCheck2All  size={17} className='service__list-icon'/>
              <p>SRM Institute of Science and Technology</p>
            </li>
            <li>
              <BsCheck2All size={17}  className='service__list-icon'/>
              <p>2020-Present</p>
            </li>
          </ul>
          </article>
          <article className="service">
          <div className="service__head">
            <h3>Extra-curricular activities</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheck2All size={17} className='service__list-icon'/>
              <p>Technical Associate • Dec 2020 </p>
            </li>
            <li>
              <BsCheck2All size={17} className='service__list-icon'/>
              <p><a target='_blank' linkcolor='--color-bg-varient' href="https://camberracing.com/">Camber Racing</a></p>
            </li>
            <li>
              <BsCheck2All size={17} className='service__list-icon'/>
              <p>Committee Head • April 2022</p>
            </li>
            <li>
              <BsCheck2All size={17} className='service__list-icon'/>
              <p><a target='_blank' linkcolor='--color-bg-varient' href="https://aaruush.org/">aaruush</a></p>
            </li>
            <li>
              <BsCheck2All size={25} className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
          </article>
          <article className="service">
          <div className="service__head">
            <h3>Soft Skills</h3>
          </div>
          <ul className='service__list'>
          <li>
              <BsCheck2All size={17} className='service__list-icon'/>
              <p>Problem-Solving</p>
            </li>
            <li>
              <BsCheck2All size={17} className='service__list-icon'/>
              <p>Team management</p>
            </li>
            <li>
              <BsCheck2All size={17} className='service__list-icon'/>
              <p>Public relations</p>
            </li>
            <li>
              <BsCheck2All size={17} className='service__list-icon'/>
              <p>Disciplined</p>
            </li>
            <li>
              <BsCheck2All size={17} className='service__list-icon'/>
              <p>Adaptability</p>
            </li>
          </ul>
          </article>
      </div>
    </section>
  )
}

export default Services