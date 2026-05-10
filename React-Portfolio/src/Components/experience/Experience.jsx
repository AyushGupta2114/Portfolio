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
              <h4>Data Analysis, QA</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>AWS and Microsoft Azure </h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Data Visualization</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Automation and Optimization</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>C++ & C Programming</h4>
              <small className='text-light'>Experienced</small>
              </div>            
            </article>
              <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Machine Learning and Data Science</h4>
              <small className='text-light'>Experienced</small>
              </div>            
            </article>
          </div>
        </div>
        <div className='experience__backend'>
        <h3>
            Non-Programming Skills
          </h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Project Management</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Problem Solving</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'> 
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Excel</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>AutoCad 3D & SolidWorks</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>UI / UX Design</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
                        <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>LLM Tools & VCS</h4>
              <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience