import React from 'react'
import './footer.css'
import { BsGithub } from 'react-icons/bs'
import { GrLinkedin } from 'react-icons/gr'
import { FiInstagram } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      {/* Link to top of page */}
      <a href="#home" className='footer__logo'>Ayush</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Stages</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://github.com/AyushGupta2114' target='_blank' rel='noreferrer'>
          <BsGithub size={30}/>
        </a>
        <a href='https://www.linkedin.com/in/ayush-gupta2205/' target='_blank' rel='noreferrer'>
          <GrLinkedin size={30}/>
        </a>
        <a href='https://instagram.com/ayushgupta' target='_blank' rel='noreferrer'>
          <FiInstagram size={30}/>
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
