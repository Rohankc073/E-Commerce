import React from 'react';
import Navbar1 from "./navbar";
import Footer from "./footer";
import '../styles/product.css'
import '../images/apple.mp4'

const Product = () => {
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
                <div className="apple12">
                    <div className="apple-logo">
                    </div>
                    <p>Apple</p>
                    <video controls autoPlay loop muted playsInline>
                        <source src="../images/apple.mp4" type="/mp4" />
                        {/* Your browser does not support the video tag. */}
                    </video>
                </div>
            </header>


            <body>
            <div className="shop-section">
                {/* ... (your existing code for the shop section) */}
            </div>

            <div className="shop-section1">
                {/* ... (your existing code for the shop section1) */}
            </div>

<Footer/>
            </body>

        </>
    );
};

export default Product;
