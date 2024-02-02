import React, {useEffect, useState} from 'react';

import '../styles/viewpage.css'
import Navbar from "./navbar";
import Footer from "./footer";
import Panel from "./panel";
import {useParams} from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../Firebase/firebase";
import {handleAddToCart} from "./cartFunction";
// import {handleAddToCart} from '../pages/viewpageBox'

const YourComponent = () => {
    const { productId } = useParams(); // Get the productId from the URL parameter
    const [product, setProduct] = useState(null);



    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                // Reference to the 'products' collection in Firestore (replace 'products' with your actual collection name)
                const productRef = doc(db, 'products', productId);

                // Get the product document
                const productDoc = await getDoc(productRef);

                if (productDoc.exists()) {
                    // Set the product details in the state
                    setProduct(productDoc.data());
                } else {
                    console.log('Product not found');
                }
            } catch (error) {
                console.error('Error fetching product details:', error.message);
            }
        };

        if (productId) {
            fetchProductDetails();
        }
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>; // Add loading state or component if needed
    }
    return (
        <>


            <header>
                <Navbar/>
                <Panel/>
            </header>
            <body>
            <div>

            </div>
            <div className="shop-section">

                <div className="box1 box ">
                    <div className="box-content">
                        <div className="box-image12" style={{backgroundImage: `url(${product.imageUrl})`}}>
                        </div>
                    </div>
                </div>
                <div className="product-description">
                    <h2>{product.description}</h2>
                    <div className="condition"><h2>Condition: {product.condition}</h2></div>
                    <div className="pricingBox">
                        <div className="salePrice">
                            <h2 className="currency">Price: NRP. {product.price}</h2>
                            <div className="colour"><h2 className="colour"> Color: {product.color}</h2></div>
                        </div>
                    </div>
                    <div className="button-container89">
                        <button className="btn12" onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                    </div>
                    <div className="button-container77">
                        <a href="/delivery" className="btn1">
                            Buy Now
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
                                <img src="https://cartlow.com/web-assets/img/product-page/icon (1).png"
                                     alt="Gallery Image"/>
                                <h6>Fast <br/> Delivery</h6>
                            </li>
                            <li className="has_return">
                                <img src="https://cartlow.com/web-assets/img/product-page/icon (2).png"
                                     alt="Gallery Image"/>
                                <h6>10 Days<br/>Return</h6>
                            </li>
                            {/*<li className="has_warranty">*/}
                            {/*    <img src="https://cartlow.com/web-assets/img/product-page/icon (3).png"*/}
                            {/*         alt="Gallery Image"/>*/}
                            {/*    <h6>12 Months<br/>Warranty</h6>*/}
                            {/*</li>*/}
                            <li>
                                <img src="https://cartlow.com/web-assets/img/product-page/icon (4).png"
                                     alt="Gallery Image"/>
                                <h6>Original<br/>Product</h6>
                            </li>
                            <li>
                                <img src="https://cartlow.com/web-assets/img/product-page/icon (5).png"
                                     alt="Gallery Image"/>
                                <h6>ECO<br/>Friendly</h6>
                            </li>

                            {/* Second row */}
                            <li>
                                <img src="https://cartlow.com/web-assets/img/product-page/icon (6).png"
                                     alt="Gallery Image"/>
                                <h6>Installment<br/>Plans</h6>
                            </li>
                            <li>
                                <img src="https://cartlow.com/web-assets/img/product-page/icon (7).png"
                                     alt="Gallery Image"/>
                                <h6>Best Price<br/>Guarantee</h6>
                            </li>
                            <li className="has_warranty">
                                <img src="https://cartlow.com/web-assets/img/product-page/icon (8).png"
                                     alt="Gallery Image"/>
                                <h6>Buy<br/>Back</h6>
                            </li>
                            <li>
                                <img src="https://cartlow.com/web-assets/img/product-page/icon (9).png"
                                     alt="Gallery Image"/>
                                <h6>Graded by<br/>Expert</h6>
                            </li>
                            <li>
                                <img src="https://cartlow.com/web-assets/img/product-page/icon (10).png"
                                     alt="Gallery Image"/>
                                <h6>Buy now<br/>Pay later</h6>
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
