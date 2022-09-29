import React from 'react'
import './FooterComp.css'
import facebook from '../../Assests/Vector4.png'
import instagram from '../../Assests/Vector5.png'
import twitter from '../../Assests/Vector6.png'

function Footer() {
  return (
    <div className='footer-comp'>
        <div className='footer-top'>
            <h3>Acciojob</h3>
            <div>
                <img src={facebook} alt="facebook" />
                <img src={instagram} alt="facebook" />
                <img src={twitter} alt="facebook" />
            </div>
        </div>
        <hr className='horizontal-line'/>
        <div className='footer-menu'>
            <div className = 'footer-menu-item'>
                <h5>Company info</h5>
                <p>About Us</p>
                <p>Carrier</p>
                <p>We are hiring</p>
                <p>Blog</p>
            </div>
            <div className = 'footer-menu-item'>
                <h5>Legal</h5>
                <p>About Us</p>
                <p>Carrier</p>
                <p>We are hiring</p>
                <p>Blog</p>
            </div>
            <div className = 'footer-menu-item'>
                <h5>Features</h5>
                <p>Business Marketing</p>
                <p>user Analytics</p>
                <p>Live Chat</p>
                <p>Unlimited Support</p>
            </div>
            <div className = 'footer-menu-item'>
                <h5>Resources</h5>
                <p>IOS & Android</p>
                <p>Watch a Demo</p>
                <p>Customers</p>
                <p>API</p>
            </div>
            <div className = 'footer-menu-item'>
                <h5>Get in Touch</h5>
                <input type="text" placeholder="Your Email"  className='your-email'/>
                <button type="button" className='subscribe-button'>Subscribe</button>
                <p>lorem impsum dolor amit</p>
            </div>
        </div>
        <div className='love-message'>
        <h6>Made With ❤️ at Acciojob |  Satya Ganesh</h6>
        </div>
        
    </div>
  )
}

export default Footer