import React from 'react'
import '../styles/BarMenu.css'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'


const BarMenu = () => {
  return (
    <nav className='menu'>
      <div className="logo">
        <NavLink to={'/'}><img src={logo} alt="" /></NavLink>
      </div>
        <ul>
            <li><NavLink className='buttonBar' to={'/'}>Home</NavLink></li>
            <li><NavLink className='buttonBar' to={'/plays'}>Plays</NavLink></li>
            <li><NavLink className='buttonBar' to={'/upload'}>Upload Plays</NavLink></li>
        </ul>
    </nav>
  )
}

export default BarMenu