import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState,Fragment} from 'react'

const Nav = () => {
  const[activeNav,setActiveNav] = useState('')
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 4570){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <Fragment>
    <nav className={colorChange ? 'navbar colorChange' : 'nav'}>
      <a href="#" onClick={()=>setActiveNav('#')}className={activeNav==='#' ? 'active':''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active':''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active':''}><BiBook/></a>
      <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav==='#services' ? 'active':''}><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active':''}><BiMessageSquareDetail/></a>
    </nav>
    </Fragment>
  )
}

export default Nav