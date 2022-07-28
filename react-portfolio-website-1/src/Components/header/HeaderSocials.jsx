import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiHackerrank} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ayush-gupta2205/" target="_blank"><BsLinkedin size={25}/></a>
        <a href="https://github.com/AyushGupta2114" target="_blank"><FaGithub size={25}/></a>
        <a href="https://www.hackerrank.com/ag8815" target="_blank"><SiHackerrank size={25}/></a>
    </div>
  )
}

export default HeaderSocials