import React from 'react';
import '../styles/viewpage.css'
import Navbar from "./navbar";
import Footer from "./footer";
import Panel from "./panel";

const YourComponent = () => {
    return (
        <>


            <header>
                <Navbar/>
                <Panel/>
            </header>

            <body>
            <div className="shop-section">
                <div className="small-box-container">
                    <div className="small-box24">
                        {/* Content for the first small box goes here */}
                    </div>
                    <div className="small-box25">
                        {/* Content for the second small box goes here */}
                    </div>
                </div>
                <div className="box1 box ">
                    <div className="box-content">
                        <div className="box-image12" style={{ backgroundImage: "url('ip13Pink.jpg')" }}></div>
                    </div>
                </div>
                <div className="product-description">
                    <h2>Apple iPhone 13 (256GB) 5G - Pink</h2>
                    <div className="condition"><span>Condition:</span> Pre-Loved | Top</div>
                    <div className="pricingBox">
                        <div className="salePrice">
                            <span className="currency">NRP 1,40,000 </span>
                            <div className="colour"><span className="colour">Color : Pink</span></div>
                        </div>
                    </div>
                    <div className="button-container89">
                        <a href="#" className="btn">
                            Add to Cart
                        </a>
                    </div>
                </div>

            </div>
            <div className="features">
                <div className="features-container">
                    <div className="cart-info product-feature-wrap d-none d-lg-block">
                        <ul className="feature-list">
                            {/* First row */}
                            <li>
                                <img src="https://cartlow.com/web-assets/img/product-page/icon (1).png" alt="Gallery Image" />
                                <h6>Fast <br /> Delivery</h6>
                            </li>
                            <li className="has_return">
                                <img src="https://cartlow.com/web-assets/img/product-page/icon (2).png" alt="Gallery Image" />
                                <h6>10 Days<br />Return</h6>
                            </li>
                            <li className="has_warranty">
                                <img src="https://cartlow.com/web-assets/img/product-page/icon (3).png" alt="Gallery Image" />
                                <h6>12 Months<br />Warranty</h6>
                            </li>
                            <li>
                                <img src="https://cartlow.com/web-assets/img/product-page/icon (4).png" alt="Gallery Image" />
                                <h6>Original<br />Product</h6>
                            </li>
                            <li>
                                <img src="https://cartlow.com/web-assets/img/product-page/icon (5).png" alt="Gallery Image" />
                                <h6>ECO<br />Friendly</h6>
                            </li>

                            {/* Second row */}
                            <li>
                                <img src="https://cartlow.com/web-assets/img/product-page/icon (6).png" alt="Gallery Image" />
                                <h6>Installment<br />Plans</h6>
                            </li>
                            <li>
                                <img src="https://cartlow.com/web-assets/img/product-page/icon (7).png" alt="Gallery Image" />
                                <h6>Best Price<br />Guarantee</h6>
                            </li>
                            <li className="has_warranty">
                                <img src="https://cartlow.com/web-assets/img/product-page/icon (8).png" alt="Gallery Image" />
                                <h6>Buy<br />Back</h6>
                            </li>
                            <li>
                                <img src="https://cartlow.com/web-assets/img/product-page/icon (9).png" alt="Gallery Image" />
                                <h6>Graded by<br />Expert</h6>
                            </li>
                            <li>
                                <img src="https://cartlow.com/web-assets/img/product-page/icon (10).png" alt="Gallery Image" />
                                <h6>Buy now<br />Pay later</h6>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </body>
            <Footer/>
        </>
    );
};

export default YourComponent;
