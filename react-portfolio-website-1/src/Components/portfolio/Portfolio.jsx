import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/real-time.jpg'
import IMG2 from '../../assets/portfoliomine.jpg'
import IMG3 from '../../assets/solid_works.jpg'
import IMG5 from '../../assets/tic3.jfif'
import IMG6 from '../../assets/webclone.jpg'
import IMG4 from '../../assets/facedet.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt=""/>
          </div>
            <h3>Face-Detection-Attendance</h3>
           <div className='portfolio__item-cta'>
            <a href='https://github.com/AyushGupta2114/Real-Time-Face-Recognition' className='btn' target='_blank'>Github</a>
            <a href='https://github.com/AyushGupta2114/Real-Time-Face-Recognition' className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>
        <article className='portfolio__item_2'>
          <div className='portfolio__item-image_2'>
            <img src={IMG2} alt=""/>
          </div>
            <h3>Portfolio</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/AyushGupta2114' className='btn' target='_blank'>Github</a>
            <a href='https://github.com/AyushGupta2114' className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>
        <article className='portfolio__item_3'>
          <div className='portfolio__item-image_3'>
            <img src={IMG3} alt=""/>
          </div>
            <h3>SolidWorks 3D - Chassis</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/AyushGupta2114' className='btn' target='_blank'>Github</a>
            <a href='https://github.com/AyushGupta2114' className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>
        <article className='portfolio__item_4'>
          <div className='portfolio__item-image_4'>
            <img src={IMG4} alt=""/>
          </div>
            <h3>Face-Detection</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/AyushGupta2114' className='btn' target='_blank'>Github</a>
            <a href='https://github.com/AyushGupta2114' className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>
        <article className='portfolio__item_5'>
          <div className='portfolio__item-image_5'>
            <img src={IMG5} alt=""/>
          </div>
            <h3>Tic-Tac-Toe</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/AyushGupta2114' className='btn' target='_blank'>Github</a>
            <a href='https://github.com/AyushGupta2114' className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>
        <article className='portfolio__item_6'>
          <div className='portfolio__item-image_6'>
            <img src={IMG6} alt=""/>
          </div>
            <h3>This is a portfolio item title</h3>
            <div className='portfolio__item-cta'>
            <a href='https://github.com/AyushGupta2114' className='btn' target='_blank'>Github</a>
            <a href='https://github.com/AyushGupta2114' className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio