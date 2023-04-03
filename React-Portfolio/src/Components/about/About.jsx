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
          <small>1.5+ year Working</small>
        </article>
        <article className='about__card'>
          <FiUsers className='about__icon'/>
          <h5>React</h5>
          <small>One Project</small>
        </article>
        <article className='about__card'>
          <VscFolderLibrary  className='about__icon'/>
          <h5>Projects</h5>
          <small>12 completed</small>
        </article>
      </div>
      
      <p>
      Hello. I am currently pursuing an undergraduate degree in Computer Science and Engineering with a major in AI and ML at SRM Institute of Science and Technology
      </p>

      <a href='#contact' className='btn btn-primary'>Lets' Talk</a>
    </div>
    </div>
    </section>
    
  )
}

export default About