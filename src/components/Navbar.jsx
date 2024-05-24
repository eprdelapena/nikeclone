import React from 'react'
import headerlogo from '../assets/images/header-logo.svg'
import hamburger from '../assets/icons/hamburger.svg'
import { navLinks } from '../constants/index.js'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full"> 
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerlogo} alt="logo" width={130} height={29}/>
        </a>
      </nav>
    </header>
  )
}

export default Navbar