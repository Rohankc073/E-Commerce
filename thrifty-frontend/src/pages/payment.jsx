import React from 'react';
import '../styles/viewpage.css'
import Navbar from "./navbar";
import Footer from "./footer";
import Panel from "./panel";

const Payment = () => {
    return (
        <>
            <header>
                <Navbar/>
                <Panel/>
            </header>

            <body>
            <div className="shop-section">
                <div className="box1 box ">
                    <form id="customerForm" onSubmit="return validateForm()">
                        <label htmlFor="fullName">Full Name:</label>
                        <input type="text" id="fullName" name="fullName" required/>

                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" pattern="[0-9]{10}" required/>


                        <label htmlFor="houseNumber">House Number:</label>
                        <input type="text" id="houseNumber" name="houseNumber" required/>

                        <label htmlFor="nearApp">Near App:</label>
                        <input type="text" id="nearApp" name="nearApp" required/>

                        <label htmlFor="state">State:</label>
                        <input type="text" id="state" name="state" required/>

                        <button type="submit">Submit</button>
                    </form>
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
                    <div className="button-container77">
                        <a href="#" className="btn">
                            Buy Now
                        </a>
                    </div>
                </div>

            </div>

            </body>
            <Footer/>
        </>
    );
};

export default Payment;
