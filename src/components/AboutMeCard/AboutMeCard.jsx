import React from 'react'
import './aboutMeCard.css'
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { MdOutlineWebAsset } from 'react-icons/md';
const jonas = require('../../assets/profile/jonas.jpg')
const logo = require('../../assets/profile/logo.png')

const AboutMeCard = () => {
  return (
    <div className='sm:h-full w-full'>
     <div class="main">
        <div class="container">
            <div class="gradient">
                <img src={logo} className='h-32  mt-0 ' />
                <div class="content">
                    
                    <h2>JONAS <br/> OJEDA</h2>
                    <p>Web Developer</p>
                    <br/>
                    <p class="details">Full Stack Web Developer | JavaScript | Node | React | Redux | Express | <br /> <br />Gmail: jonojed98@gmail.com </p>
                    <div class="icons">
                        <a href="https://github.com/jonasojeda" target={'_blank'}><AiFillGithub className='h-14 w-12'/></a>
                        <a href="https://www.linkedin.com/in/jonas-ojeda-18308a1ab/" target={'_blank'}><AiFillLinkedin className='h-14 w-12'/></a>
                        <a href="https://personal-portfolio-jonasojeda.vercel.app/" target={'_blank'}><MdOutlineWebAsset className='h-14 w-12'/></a>
                        
                        
                        {/* <i class="fa fa-facebook-square" aria-hidden="true"></i>
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                        <i class="fa fa-instagram" aria-hidden="true"></i> 
                        <i class="fa fa-pinterest" aria-hidden="true"></i> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AboutMeCard