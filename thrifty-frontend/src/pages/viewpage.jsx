import React from 'react';
import '../../../Thrifty_Front/frontend/src/css/viewpage.css';

import Navbar1 from "./navbar";
// import './font-awesome.min.css'; // Import the Font Awesome CSS file

const ViewPage = () => {
    return (
        <>
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

            <body>
            <div className="shop-section">
                <div className="small-box-container">
                    <div className="small-box">
                        {/* Content for the first small box goes here */}
                    </div>
                    <div className="small-box1">
                        {/* Content for the second small box goes here */}
                    </div>
                </div>
                <div className="box1 box ">
                    <div className="box-content">
                        <div
                            className="box-image"
                            style={{ backgroundImage: "url('ip13Pink.jpg')" }}
                        ></div>
                    </div>
                </div>

                <div className="product-description">
                    <h2>Apple iPhone 13 (256GB) 5G - Pink</h2>
                    <div className="condition">
                        <span>Condition:</span> Pre-Loved | Top
                    </div>
                    <div className="pricingBox">
                        <div className="salePrice">
                            <span className="currency">NRP 1,40,000 </span>
                            <div className="colour">
                                <span className="colour">Color : Pink</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </body>

            <footer>
                <div className="foot-panel1">Back to Top</div>
                <div className="foot-panel2">
                    {/* Your footer content here */}
                </div>

                <div className="foot-panel3">
                    <div className="logo"></div>
                </div>

                <div className="foot-panel4">
                    {/* Your footer content here */}
                </div>
            </footer>
        </>
    );
};

export default ViewPage;
