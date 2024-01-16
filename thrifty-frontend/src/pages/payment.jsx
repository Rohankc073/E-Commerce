import React from 'react';
import '../styles/payment.css'
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
            <div className="shop-section1">
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

                </div>


            </div>
            <div className="payment">

            </div>
            </body>
            <Footer/>
        </>
    );
};

export default Payment;
