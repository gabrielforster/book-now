import React from 'react'
import logo from '../img/favicon.ico';
import './Header.css'

export default function Header() {

  return (
    <header>
        <div className='logo'>
            <img className='logo-img' src={logo} alt=''></img>
            <a className='btn-logo' href='logo'>Book Now</a>
        </div>
        
        <div className='menu'>
          <a className='btn-menu' href='sobre'>Sobre</a>
        </div>
    </header>
  )
}