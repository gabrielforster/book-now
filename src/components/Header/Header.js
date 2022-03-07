import React from 'react'
import logo from '../img/favicon.ico';
import search from '../img/search-icon.png'
import './Header.css'

export default function Header() {

  return (
    <header>
        <div className='logo'>
            <img className='logo-img' src={logo} alt=''></img>
            <a href='logo'>BookNow</a>
        </div>
        <div className='search'>
          <input type='text' placeholder='Procure aqui!' id='search-content'></input>
          <button><img className='search-img-button' src={search} alt=''></img></button>
        </div>
        <div className='menu'>
          <a className='btn-menu' href='sobre'>Sobre</a>
        </div>
    </header>
  )
}