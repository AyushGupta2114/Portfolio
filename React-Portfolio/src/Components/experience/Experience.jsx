import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>&nbsp;My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>
            Programming Skills
          </h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML & CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>C Programming</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>C++</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
        <h3>
            Non-Programming Language
          </h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>AutoCad 3D</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>SolidWorks</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>UX/UI Design</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience