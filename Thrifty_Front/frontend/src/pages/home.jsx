import React, { useState, useEffect } from 'react';
import '../css/home.css';
import CartPanel from "./cartPanle";
import Navbar1 from "./navbar"; // Corrected import

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // ... other functions and useEffect ...

    const toggleCartPanel = () => {
        setIsCartOpen(!isCartOpen);
    };

    const showLoader = () => {
        setIsLoading(true);
    };

    const hideLoader = () => {
        setIsLoading(false);
    };

    const loadPage = (url) => {
        showLoader();

        // Simulate a delay (replace this with your actual page load)
        setTimeout(() => {
            // Redirect to the specified URL
            window.location.href = url;
        }, 2000); // Adjust the delay (in milliseconds) as needed

        // Attach an event listener to hide the loader when the new page is loaded
        window.addEventListener('load', hideLoader);
    };

    useEffect(() => {
        // Add any initialization logic here
    }, []); // Empty dependency array to run the effect only once


    return (
        <div>
            {/* Commented out the loader-related code */}
            {/* <div className="loader"></div> */}
            <header>
                <Navbar1 />
                <div className="panel">
                    <div className="panel-all border">
                        <i className="fa-solid fa-bars"></i>
                        All
                    </div>
                    <div className="panel-ops border">
                        <p>Today's Deals</p>
                        <p>Customer Service</p>
                        <p>Registry</p>
                        <p>Gift Cards </p>
                        <p>Sell</p>
                    </div>
                    <div className="panel-deals border">
                        <p>Shop deals in Electronics</p>
                    </div>
                </div>
            </header>


            <div className="hero-section">
                {/* Your hero section content here */}
            </div>

            <div className="hero-message">
                <p>
                    You are on Thrifty Tech. You can shop on Thrifty Tech with fast delivery.{' '}
                    <a href="thriftytech.np">Click here to go to thriftytech.np</a>
                </p>
            </div>

            <div className="shop-section">
                <div className="box1 box">
                    <div className="box-content">
                        <h2>Apple</h2>
                        <div style={{ backgroundImage: "url('Apple.jpg')" }} className="box-image"></div>
                        <div className="button-container">
                            <a href="index2.html" className="button">See more</a>
                        </div>
                    </div>
                </div>
                <div className="box2 box">
                    <div className="box-content">
                        <h2>Samsung</h2>
                        <div style={{ backgroundImage: "url('Apple.jpg')" }} className="box-image"></div>
                        <div className="button-container">
                            <a href="samsung.html" className="button">See more</a>
                        </div>
                    </div>
                </div>
                <div className="box3 box ">
                    <div className="box-content">
                        <h2>One Plus</h2>
                        <div style={{ backgroundImage: "url('Apple.jpg')" }} className="box-image2"></div>
                        <div className="button-container">
                            <a href="oneplus.html" className="button">See more</a>
                        </div>
                    </div>
                </div>
                <div className="box4 box ">
                    <div className="box-content">
                        <h2>Oppo</h2>
                        <div style={{ backgroundImage: "url('Apple.jpg')" }} className="box-image3"></div>
                        <div className="button-container">
                            <a href="index2.html" className="button">See more</a>
                        </div>
                    </div>
                </div>
                <div className="box1 box ">
                    <div className="box-content">
                        <h2>Vivo</h2>
                        <div style={{ backgroundImage: "url('Apple.jpg')" }} className="box-image4"></div>
                        <div className="button-container">
                            <a href="index2.html" className="button">See more</a>
                        </div>

                    </div>
                </div>
                <div className="box2 box ">
                    <div className="box-content">
                        <h2>Nothing</h2>
                        <div style={{ backgroundImage: "url('Apple.jpg')" }} className="box-image5"></div>
                        <div className="button-container">
                            <a href="index2.html" className="button">See more</a>
                        </div>
                    </div> </div>
                <div className="box3 box ">
                    <div className="box-content">
                        <h2>Redmi</h2>
                        <div style={{ backgroundImage: "url('Apple.jpg')" }} className="box-image6"></div>
                        <div className="button-container">
                            <a href="index2.html" className="button">See more</a>
                        </div>
                    </div>
                </div>
                <div className="box4 box ">
                    <div className="box-content">
                        <h2>Xiamoi</h2>
                        <div style={{ backgroundImage: "url('Apple.jpg')" }} className="box-image7"></div>
                        <div className="button-container">
                            <a href="index2.html" className="button">See more</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shop-section2">
                <div className="box-container">
                    <div className="boxP">

                    </div>
                    <div className="boxL">

                    </div>
                </div>
            </div>

            <div className="shop-section3">
                <div className="box-container1">
                    <div className="boxW">

                    </div>
                    <div className="boxT">

                    </div>
                </div>
            </div>

            <footer>
                <div className="foot-panel1">
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
                    <div class="pages">
                        <a>Conditions of Use</a>
                        <a>Privacy Notice</a>
                        <a>Your Ads Privacy Choices</a>
                    </div>
                    <div class="copyright">
                        ©1996-2023, Amazon.com, Inc. or its affiliates
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;


