import React from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'
const logo = require('../../assets/logo/task-logo.png')
function Navbar() {
  return (
    <div className='nav-bar'>
        <Link to={'/'}> <img className='nav-bar-logo' src={logo} alt="" /> </Link>
        <Link to={'/about'} >About</Link>
    </div>
  )
}

export default Navbar