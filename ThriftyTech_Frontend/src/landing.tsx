import React from 'react';
import './CSS/landing.css';
import './assets/3.png'
import './assets/logo.png'

const Landing: React.FC = () => {
    return (
        <div>
            <div className="hero">
                <img src="3.png" alt="" />
                <div className="hero-text">
                    <p className="hero-text-content">
                        "EMPOWER YOUR LIFE <a> with cutting-edge electronics."</a>{' '}
                        <a className="discover" href="index.html">
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
                        <a href="login.html">
                            <button>Login</button>
                        </a>
                    </div>

                    <div className="button1">
                        <div className="button1">
                            <a href="index.html">
                                <button>Get Started</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="foot-panel1">Back to Top</div>

                <div className="foot-panel3">
                    <div className="logo"></div>
                </div>

                <div className="foot-panel4">
                    <div className="pages">
                        <a>Conditions of Use</a>
                        <a>Privacy Notice</a>
                        <a>Your Ads Privacy Choices</a>
                    </div>
                    <div className="Copyright">
                        ©1996-2023, Thriftytech.com, Inc. or its affiliates
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
