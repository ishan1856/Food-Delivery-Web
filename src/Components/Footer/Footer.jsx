import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
    const linkedinUrl='https://www.linkedin.com/in/1856-ishan-singh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  return (
   
    <div className='footer' id='footer'>
        <div className="footer_content">
            <div className="footer_content_left">
                <img src={assets.logo} alt="" />
                <p className='footer_title'>Flavor Dash</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit iste sapiente itaque similique possimus officia, nobis sed quas beatae maxime, ab porro accusamus ipsum placeat optio quisquam nulla! Consequatur, laborum.</p>
                <div className="footer_social_icons">
                <a href={linkedinUrl}> <img src={assets.linkedin_icon} target="_blank" rel="noopener noreferrer"alt="Linkedin" /></a>
                 <img src={assets.twitter_icon} alt="" />
                 <img src={assets.facebook_icon} alt="" />   
                </div>
            </div>
            <div className="footer_content_center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

           </div>
            <div className="footer_content_right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-8869302456</li>
                    <li>ishan@gmail.com</li>

                </ul>

            </div>
           
        </div>
         <hr />
        <p className="footer_copyright">Copyright 2024 ©️ FlavorDash.com - All Rights Reserved</p>

        
    </div>
  )
}

export default Footer