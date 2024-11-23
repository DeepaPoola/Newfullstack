import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram.jpg'
import whatsapp_icon from '../Assets/whatsapp.jpg'
import pininterest_icon from '../Assets/pininterest.jpg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                 <img src={instagram_icon} alt="" /> 
            </div>
             <div className="footer-icons-container">
                   <img src={whatsapp_icon} alt="" />
               </div>
             <div className="footer-icons-container">
                 <img src={pininterest_icon} alt="" />
            </div>   
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @2024 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer