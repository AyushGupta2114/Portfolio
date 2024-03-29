import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {GrLinkedin} from 'react-icons/gr'
import {FiInstagram} from 'react-icons/fi'
var nav = document.querySelector('nav');

const Footer = ()=> {
  return (
    <footer>
      <a href="a" className='footer__logo'>Ayush</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Stages</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Certifications</a></li>
        <li><a href="#contat">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href='https://github.com/AyushGupta2114' target='blank'><BsGithub size={30}/></a>
        <a href='https://www.linkedin.com/in/ayush-gupta2205/' target='blank'><GrLinkedin size={30}/></a>
        <a href='https://instagram.com' target='blank'><FiInstagram size={30}/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; All rights reserved

        </small>
        
      </div>
    </footer>
  )
}

export default Footer