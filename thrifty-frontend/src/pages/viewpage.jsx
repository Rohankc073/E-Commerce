import React from 'react';
import Navbar from "./navbar"; // Make sure to import your CSS file
import { storage } from '../Firebase/firebase'; // Import Firebase storage if not already imported
import { getDownloadURL, ref } from "firebase/storage";
import Footer from "./footer"; // Import necessary functions from Firebase storage
import "../styles/viewpage.css"

const ViewPage = () => {
    // Assuming you have the state for imageURLs
    const [appleImageURL, setAppleImageURL] = React.useState('');

    // Fetch image URLs when the component mounts
    React.useEffect(() => {
        const fetchImageURL = async () => {
            try {
                // Update the path to your image in the storage
                const appleImageRef = ref(storage, 'path_to_your_apple_image.jpg');
                const url = await getDownloadURL(appleImageRef);
                setAppleImageURL(url);
            } catch (error) {
                console.error('Error fetching image URL:', error);
            }
        };

        fetchImageURL();
    }, []); // Empty dependency array to run the effect only once

    return (
        <>
            <header>
                <Navbar />
            </header>

            <div className="apple">
                <div className="apple-logo">
                </div>
                <p>Apple</p>
                <video autoPlay loop muted playsInline>
                    {/*<source src="apple.mp4" type="video/mp4">*/}
                </video>
            </div>

            <div className="shop-section">
                <div className="box2 box">
                    <div className="box-content">
                        <h2>Apple</h2>
                        {appleImageURL && <img src={appleImageURL} alt="Apple" className="box-image" />}
                        <div className="button-container">
                            <a href="samsung.html" className="button">See more</a>
                        </div>
                    </div>
                </div>

                {/* Add more box elements for other products in shop-section */}

            </div>

            <div className="shop-section">
                <div className="box1 box ">

                    <a href="viewP.html" className="box-content-link">
                        <div className="box-content">
                            <div className="button-container">
                                <button className="love-button"><i className="fa-regular fa-heart"></i></button>
                            </div>
                            {/*<div className="box-image" style="background-image: url('ip13Pink.jpg');"></div>*/}
                            <div className="caption">
                                <h3 className="product-card-title">Apple iPhone 13  (256GB) 5G - Pink</h3>
                                <div className="condition"><span>Condition:</span> Pre-Loved | Top</div>
                                <div className="pricingBox">
                                    <div className="salePrice">
                                        <span className="currency">NRP</span>
                                        <span className="amount">1,40,000.00</span>
                                    </div>
                                    <div className="d-flex text-truncate">
                                        <div className="mainPrice">
                                            NRP 1,80,000.00
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>


                </div>
            </div>

           <Footer/>
        </>
    );
};

export default ViewPage;
