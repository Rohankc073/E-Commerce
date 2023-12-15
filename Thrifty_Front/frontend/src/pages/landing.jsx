import React from 'react';
import '../css/landing.css'; // Import your CSS file
import "../images/3.png"

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
                {/*<div className="foot-panel1">Back to Top</div>*/}

                <div className="foot-panel3">
                    <div className="logo"></div>
                </div>

                <div className="foot-panel4">
                    <div className="pages">
                        {/*<a>Conditions of Use</a>*/}
                        {/*<a>Privacy Notice</a>*/}
                        {/*<a>Your Ads Privacy Choices</a>*/}
                    </div>
                    <div className="Copyright">
                        {/*©1996-2023, Thriftytech.com, Inc. or its affiliates*/}
                    </div>
                </div>
            </footer>
            </body>
        </div>
    );
};

export default FirstPage;
