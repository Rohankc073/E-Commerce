import React from 'react';
import '../../../Thrifty_Front/frontend/src/css/landing.css'; // Import your CSS file
import "../../../Thrifty_Front/frontend/src/images/3.png"
import Footer from "./footer";

const FirstPage = () => {
    return (
        <div>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>First Page</title>
                <link rel="icon" href="iccc.jpg" type="image/x-icon" />
            </head>
            <body>
            <div className="hero">
                <img src="../../../Thrifty_Front/frontend/src/images/3.png" alt="" />

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
            <Footer />
            </body>
        </div>
    );
};

export default FirstPage;
