import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Delicious Food at Your Doorstep, Anytime, Anywhere! Freshness Delivered Fast!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-contents-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-9876543210</li>
                    <li>contact@grabhub.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © grabhub.com-All Right</p>
    </div>
  )
}

export default Footer