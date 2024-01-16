// Payment component

import React from 'react';
import '../styles/payment.css';
import Navbar from "./navbar";
import Footer from "./footer";
import Panel from "./panel";

const Payment = () => {
    return (
        <>
            <header>
                <Navbar />
                <Panel />
            </header>

            <body>
            <div className="shop-section1">
                <div className="formbox">
                    <form className="form12">
                        <p className="title">Address </p>
                        <p className="message"></p>
                        <div className="flex">
                            <label>
                                <input className="input" type="text" placeholder="" required=""/>
                                <span>Firstname</span>
                            </label>

                            <label>
                                <input className="input" type="text" placeholder="" required=""/>
                                <span>Lastname</span>
                            </label>
                        </div>

                        <label>
                            <input className="input" type="email" placeholder="" required=""/>
                            <span>Email</span>
                        </label>

                        <label>
                            <input className="input" type="password" placeholder="" required=""/>
                            <span>City</span>
                        </label>
                        <label>
                            <input className="input" type="password" placeholder="" required=""/>
                            <span>House No.</span>
                        </label>
                        <label>
                            <input className="input" type="password" placeholder="" required=""/>
                            <span>State</span>
                        </label>
                        <button className="submit">Submit</button>
                        <p className="signin">Already have an account? <a href="#">Signin</a></p>
                    </form>
                </div>
                <div className="product-description"></div>
            </div>
            <div className="payment"></div>
            </body>
            <Footer/>
        </>
    );
};

export default Payment;
