import React, { useEffect, useState } from 'react';
import Navbar from "./navbar";
import { storage } from '../Firebase/firebase';
import { getDownloadURL, ref } from "firebase/storage";
import Footer from "./footer";
import "../styles/viewpage.css";
import Box from "./viewpageBox";

const ViewPage = () => {
    const [productData, setProductData] = useState([]);

    const appleImageSrcList = [
        '/upload/20231226T092117562Z_qusy77_Apple.jpg',
        '/upload/20231227T040438402Z_rpq188_ip11Red.jpg',
        '/upload/20231227T041121110Z_qptvam_ip12Wh.jpg',
        '/upload/20231227T041512650Z_twwirc_ip13Blue.jpg',
        '/upload/20231227T041556550Z_8tthfr_ip13G.jpg',
        '/upload/20231227T042433669Z_8pci5h_Ip14.jpg',
        // Add more image URLs as needed
    ];

    const fetchProductData = async () => {
        const dataPromises = appleImageSrcList.map(async (imageSrc) => {
            const description = "Your description here";
            const price = "Your price here";
            const condition = "Your condition here";
            const color = "Your color here";

            return {
                imageSrc,
                description,
                price,
                condition,
                color
            };
        });

        const imageData = await Promise.all(dataPromises);

        setProductData(imageData);
    };

    useEffect(() => {
        fetchProductData();
    }, []);

    return (
        <>
            <header>
                <Navbar/>
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
            <div className="apple">
                <div className="apple-logo">

                </div>
                <p>Apple</p>
                <video autoplay loop muted playsinline>
                    {/*<source src="apple.mp4" type="video/mp4">*/}
                </video>
            </div>
            </header>


            <div className="apple">
                {/* ... (apple section) */}
            </div>

            <div className="shop-section">
                {productData.map((product, index) => (
                    <Box
                        key={index}
                        title="Apple"
                        imageSrc={product?.imageSrc}
                        altText="Apple"
                        description={product?.description || "No description available"}
                        price={product?.price}
                        condition={product?.condition}
                        color={product?.color}
                        buttonText="See more"
                        buttonLink="samsung.html"
                    />
                ))}
            </div>

            <div className="shop-section">
                {/* ... (more shop-section content) */}
            </div>

            <Footer />
        </>
    );
};

export default ViewPage;