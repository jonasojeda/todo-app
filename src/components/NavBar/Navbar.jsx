import React from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'
const logo = require('../../assets/logo/task-logo.png')
function Navbar() {
  return (
    <div className='flex justify-between bg-blue-400'>
        <Link to={'/'}> <img className='nav-bar-logo ml-3' src={logo} alt="" /> </Link>
        <Link className='mr-3' to={'/about'} >About</Link>
    </div>
  )
}

export default Navbar