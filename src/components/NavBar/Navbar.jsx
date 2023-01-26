import React from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'
const logo = require('../../assets/logo/task-logo.png')
function Navbar() {
  return (
    <div className='nav-bar'>
        <Link to={'/'}> <img className='nav-bar-logo ml-3' src={logo} alt="" /> </Link>
        <Link className='mr-3 text-3xl hover:underline max-md:hidden ' to={'/about'} >AboutMe</Link>
    </div>
  )
}

export default Navbar