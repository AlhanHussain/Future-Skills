import React from 'react'
import './Footer.css'
import UI from '../../../assets/UI.png'

const Footer = () => {
  return (
    <>
    <div className='footer'>
      
<div>
    <h3>Abstract</h3>
    <ul>
        <li>Braches</li>
    </ul>
</div>
<div>
    <h3>Resources</h3>
    <ul>
        <li>Blog</li>
        <li>Help Center</li>
        <li>Release Notes</li>
        <li>Status</li>
    </ul>
</div>
<div>
    <h3>Community</h3>
    <ul>
        <li>Twitter</li>
        <li>Linkedin</li>
        <li>Facebook</li>
        <li>Dribbble</li>
        <li>Podcast</li>
    </ul>
</div>
<div className='footer-contactus'>
    <h3>Company</h3>
    <ul>
        <li>About Us</li>
        <li>Careers</li>
        <li>legal</li>
    </ul>
    <h4>Contact Us</h4>
    <p>info@abstract.com</p>
</div>
<div className='footer-img'>
    <img src={UI} alt="" />
    <ul>
        <li>&copy; Copyright 2022 </li>
        <li>Abstract Studio Design, Inc </li>
        <li>All rights reserved</li>
    </ul>
</div>


    </div>
    </>
  )
}

export default Footer
