import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GoMarkGithub} from 'react-icons/go'
import {FaHackerrank} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/ayush-gupta2205/" target="_blank"><BsLinkedin size={25}/></a>
        <a href="https://leetcode.com/AyushGupta2114/" target="_blank"><SiLeetcode size={25}/></a>
        <a href="https://github.com/AyushGupta2114" target="_blank"><GoMarkGithub size={25}/></a>
        <a href="https://www.hackerrank.com/ag8815" target="_blank"><FaHackerrank size={25}/></a>
    </div>
  )
}

export default HeaderSocials