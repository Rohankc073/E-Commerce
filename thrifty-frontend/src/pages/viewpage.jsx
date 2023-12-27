import React, { useEffect, useState } from 'react';
import Navbar from "./navbar";
import { storage } from '../Firebase/firebase';
import { getDownloadURL, ref } from "firebase/storage";
import Footer from "./footer";
import "../styles/viewpage.css";
import Box from "./viewpageBox";

const ViewPage = () => {
    const appleImageSrcList = [
        '/upload/20231226T092117562Z_qusy77_Apple.jpg',
        '/upload/20231227T040438402Z_rpq188_ip11Red.jpg',
        '/upload/20231227T041121110Z_qptvam_ip12Wh.jpg',
        '/upload/20231227T041512650Z_twwirc_ip13Blue.jpg',
        '/upload/20231227T041556550Z_8tthfr_ip13G.jpg',
        // Add more image URLs as needed
    ];


    return (
        <>
            <header>
                <Navbar />
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

            <div className="apple">
                <div className="apple-logo">
                </div>
                <p>Apple</p>
                <video autoPlay loop muted playsInline>
                    {/*<source src="apple.mp4" type="video/mp4">*/}
                </video>
            </div>

            <div className="shop-section">
                <Box
                    title="Apple"
                    imageSrcList={appleImageSrcList}
                    altText="Apple"
                    buttonText="See more"
                    buttonLink="samsung.html"
                />
                <Box
                    title="Apple"
                    imageSrcList={appleImageSrcList}
                    altText="Apple"
                    buttonText="See more"
                    buttonLink="samsung.html"
                />
                <Box
                    title="Apple"
                    imageSrcList={appleImageSrcList}
                    altText="Apple"
                    buttonText="See more"
                    buttonLink="samsung.html"
                />
                <Box
                    title="Apple"
                    imageSrcList={appleImageSrcList}
                    altText="Apple"
                    buttonText="See more"
                    buttonLink="samsung.html"
                />
                <Box
                    title="Apple"
                    imageSrcList={appleImageSrcList}
                    altText="Apple"
                    buttonText="See more"
                    buttonLink="samsung.html"
                />

                {/* Add more box elements for other products in shop-section */}

            </div>

            <div className="shop-section">
                <Box
                    title="Apple"
                    imageSrcList={appleImageSrcList}
                    altText="Apple"
                    buttonText="See more"
                    buttonLink="samsung.html"
                />

                <Box
                    title="Apple"
                    imageSrcList={appleImageSrcList}
                    altText="Apple"
                    buttonText="See more"
                    buttonLink="samsung.html"
                />

                <Box
                    title="Apple"
                    imageSrcList={appleImageSrcList}
                    altText="Apple"
                    buttonText="See more"
                    buttonLink="samsung.html"
                />

                <Box
                    title="Apple"
                    imageSrcList={appleImageSrcList}
                    altText="Apple"
                    buttonText="See more"
                    buttonLink="samsung.html"
                />

                <Box
                    title="Apple"
                    imageSrcList={appleImageSrcList}
                    altText="Apple"
                    buttonText="See more"
                    buttonLink="samsung.html"
                />
            </div>

           <Footer/>
        </>
    );
};

export default ViewPage;
