import React from 'react';
import '../styles/landing.css'; // Import your CSS file
import "../images/3.png"
import Footer from "./footer";

const FirstPage = () => {
    return (


            <body>
            <div>
            <div className="hero">
                <img src="../images/3.png" alt="" />

                <div className="hero-text">
                    <p className="hero-text-content">
                        "EMPOWER YOUR LIFE with cutting-edge electronics.
                        <a className="discover" href="">
                            DISCOVER MORE
                        </a>

                    </p>
                </div>
            </div>

            <div className="navbar">
                <div className="nav-logo1 border">
                    <div className="logo1"></div>
                </div>

                <div className="panel-ops border">
                    <p>About Us</p>
                    <p>Features</p>
                </div>

                <div className="button-container">
                    <div className="buttons">
                        <a>
                            <button>Login</button>
                        </a>
                    </div>

                    <div className="button1">
                        <div className="button1">
                            <a >
                                <button>Get Started</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                {/*<div className="foot-panel1" onClick={scrollToTop}>*/}
                {/*    Back to Top*/}
                {/*</div>*/}

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
                        {/*<a>Conditions of Use</a>*/}
                        {/*<a>Privacy Notice</a>*/}
                        {/*<a>Your Ads Privacy Choices</a>*/}
                    </div>
                    <div className="copyright">

                    </div>
                </div>
            </footer>
            </div>
            </body>

    );
};

export default FirstPage;
