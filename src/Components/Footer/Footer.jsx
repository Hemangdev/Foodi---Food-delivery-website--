import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footerInfo">
                <div className="logoBox"><span>F</span>oodi</div>
                <div className="paraBox">
                Savor the artistry where <br /> every dish is a culinary <br /> masterpiece
                </div>
            </div>
            <div className="footerLinks">
                <div className="headingfooter">Useful links</div>
                <div className="links">
                    <li>About US</li>
                    <li>Events</li>
                    <li>Blogs</li>
                    <li>FAQ</li>
                </div>
            </div>
            <div className="footerMainMenu">
                <div className="headingfooter">Main Menu</div>
                <div className="links">
                    <li>Home</li>
                    <li>Offers</li>
                    <li>Menus</li>
                    <li>Reservation</li>
                </div>
            </div>
            <div className="footerLast">
                <div className="headingfooter">Contact Us</div>
                <div className="links">
                    <li>example@email.com</li>
                    <li> +64 958 248 966</li>
                    <li>Social media</li> 
                </div>
            </div>
        </footer>
    )
}

export default Footer