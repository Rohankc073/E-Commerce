import React from 'react';
import "../css/footer.css"
const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer>
            <div className="foot-panel1" onClick={scrollToTop}>
                Back to Top
            </div>

            <div className="foot-panel2">
                <ul>
                    <p>Customer Care </p>
                    <a>Help center</a>
                    <a>How to buy </a>
                    <a>Returns and Refund </a>
                    <a>Contact Us</a>
                </ul>


                <ul>
                    <p>Earn with Thrifty </p>
                    <a>Sell in Thrifty</a>
                    <a>Career</a>
                    <a>Code of conduct </a>
                    <a>Partner with Thrifty</a>
                    <a>Affiliate Program</a>
                </ul>

                <ul>
                    <p>Get to Know Us </p>
                    <a>About</a>
                    <a>Blog</a>
                    <a>Thrifty Relations </a>
                    <a>Thrifty Devices</a>
                    <a>Thrifty Science </a>
                </ul>

                <ul>
                    <p>Get to Know Us </p>
                    <a>Careers</a>
                    <a>Blog</a>
                    <a>Thrifty Relations </a>
                    <a>Thrifty Devices</a>
                    <a>Thrifty Science </a>
                </ul>
            </div>

            <div className="foot-panel3">
                <div className="logo"></div>
            </div>

            <div className="foot-panel4">
                <div className="pages">
                    <a>Conditions of Use</a>
                    <a>Privacy Notice</a>
                    <a>Your Ads Privacy Choices</a>
                </div>
                <div className="copyright">
                    ©1996-2023, Amazon.com, Inc. or its affiliates
                </div>
            </div>
        </footer>
    );
}

export default Footer;
