import React from 'react';

import Footer from "./footer";
import '../styles/product.css'
import '../images/apple.mp4'
import ProductBox from "./viewpageBox";

import Panel from "./panel";
import Navbar from "./navbar";

const Product = () => {
    return (
        <>
            <header>
                <Navbar />
                <Panel/>
                {/*<div className="apple12">*/}
                {/*    <div className="apple-logo">*/}
                {/*    </div>*/}
                {/*    <p>Apple</p>*/}
                {/*    <video controls autoPlay loop muted playsInline>*/}
                {/*        <source src="../images/apple.mp4" type="/mp4" />*/}
                {/*        /!* Your browser does not support the video tag. *!/*/}
                {/*    </video>*/}
                {/*</div>*/}
            </header>


            <body>
            <div className="shop-section55">
               <ProductBox/>
                <ProductBox/>
                <ProductBox/>
                <ProductBox/>
                <ProductBox/>
            </div>

            <div className="shop-section66">
                <ProductBox/>
                <ProductBox/>
                <ProductBox/>
                <ProductBox/>
                <ProductBox/>
            </div>

<Footer/>
            </body>

        </>
    );
};

export default Product;
