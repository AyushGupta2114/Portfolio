import React from 'react'
import ME from '../../assets/final.jpg'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>
            Hello I'm
        </h5>
        <h1>
          Ayush Gupta
        </h1>
        <h5 className="text-light">
          Student
        </h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME}alt="me"/>
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header