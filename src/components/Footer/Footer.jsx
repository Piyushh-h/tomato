import React from 'react';
import './Footer.css'
import { assets } from '../../assets/assets';



const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="Logo" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum voluptatibus dignissimos perferendis, reiciendis modi ipsum ea, totam temporibus minima sint rem? Non voluptates quas consectetur. Illo laudantium ab a repudiandae?</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="Facebook" />
                        <img src={assets.twitter_icon} alt="Twitter" />
                        <img src={assets.linkedin_icon} alt="LinkedIn" />
                    </div>
                </div>
                <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-456-7890</li>
                        <li>contacttomato@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved . </p>
        </div>
    );
};

export default Footer;
