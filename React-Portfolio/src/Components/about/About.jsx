import React from 'react'
import './about.css'
import ME from '../../assets/carrom2.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>
      Get to Know
      </h5>
      <h2>About Me
      </h2>
    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
        <img src={ME} alt='About Image'/>
        </div>
      </div>
    
    <div className='about__content'>
      <div className='about__cards'>
        <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>2+ year </small>
        </article>
        <article className='about__card'>
          <FiUsers className='about__icon'/>
          <h5>Ad hoc analysis</h5>
          <small>100+</small>
        </article>
        <article className='about__card'>
          <VscFolderLibrary  className='about__icon'/>
          <h5>Projects</h5>
          <small>20+ completed</small>
        </article>
      </div>
      
      <p>
        Hi, I'm Ayush Gupta — I hold an undergraduate degree in Computer Science and Engineering (AI & ML) and work as a Data Scientist in the AI division at Mahindra Group Technology Office. I focus on automation and optimization and handle day-to-day data analysis to deliver actionable insights for the hospitality sector.
      </p>
      <a href='#contact' className='btn btn-primary'>Lets' Talk</a>
    </div>
    </div>
    </section>
    
  )
}

export default About