import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import Footer from './footer';
import Navbar1 from './navbar'; // Corrected import
import Slider from 'react-slick';
import { storage } from '../Firebase/firebase';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import frontImage from '../images/slider.jpg';
import heroImage from '../images/slider2.jpg';
import hero1Image from '../images/hero2.png';
import hero2Image from '../images/hero5.jpg';

import { getDownloadURL, ref } from 'firebase/storage';

import Panel from "./panel";

const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
};

const HomePage = () => {
    const [appleImageURL, setAppleImageURL] = useState('');
    const [samsungImageURL, setSamsungImageURL] = useState('');
    const [oppoImageURL, setOppoImageURL] = useState('');
    const [vivoImageURL, setVivoImageURL] = useState('');
    const [redmiImageURL, setRedmiImageURL] = useState('');
    const [oneplusImageURL, setOneplusImageURL] = useState('');
    const [nothingImageURL, setNothingImageURL] = useState('');
    const [iqooImageURL, setIqooImageURL] = useState('');



    useEffect(() => {
        const fetchImageURLs = async () => {
            try {
                const appleImageRef = ref(storage, 'upload/20231226T092116764Z_gi8ffu_Apple.jpg');
                const samsungImageRef = ref(storage, 'upload/20231226T132335824Z_jcq3fi_S22Black.jpg');
                const oppoImageRef = ref(storage,'upload/20231226T133843662Z_2aukpu_oppo.jpg');
                const redmiImageRef = ref(storage,'upload/20240107T114653254Z_hk1nc2_redd.png');
                const oneplusImageRef = ref(storage,'upload/20240107T115214982Z_wj5aat_oneplus.png');
                const vivoImageRef = ref(storage,'upload/20240107T113528504Z_e6hr0i_vivo.png');
                const nothingImageRef=ref(storage,"upload/20240107T115957254Z_mbs9i4_nothing.png");
                const iqooImageRef=ref(storage,'upload/20240107T120506048Z_t7f24i_iqqq.png')
                const appleURL = await getDownloadURL(appleImageRef);
                const samsungURL = await getDownloadURL(samsungImageRef);
                const oppoURL = await getDownloadURL(oppoImageRef);
                const vivoURL = await getDownloadURL(vivoImageRef);
                const redmiURL = await getDownloadURL(redmiImageRef);
                const oneplusURL = await getDownloadURL(oneplusImageRef);
                const nothingURL = await getDownloadURL(nothingImageRef);
                const iqooURL = await getDownloadURL(iqooImageRef);

                setOppoImageURL(oppoURL);
                setNothingImageURL(nothingURL);
                setAppleImageURL(appleURL);
                setSamsungImageURL(samsungURL);
                setVivoImageURL(vivoURL)
                setRedmiImageURL(redmiURL)
                setOneplusImageURL(oneplusURL);
                setIqooImageURL(iqooURL);
            } catch (error) {
                console.error('Error fetching image URLs:', error);
            }
        };

        fetchImageURLs();
    }, []);

    const [isLoading, setIsLoading] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleCartPanel = () => {
        setIsCartOpen(!isCartOpen);
    };

    const showLoader = () => {
        setIsLoading(true);
    };

    const hideLoader = () => {
        setIsLoading(false);
    };

    const loadPage = (url) => {
        showLoader();

        // Simulate a delay (replace this with your actual page load)
        setTimeout(() => {
            // Redirect to the specified URL
            window.location.href = url;
        }, 2000); // Adjust the delay (in milliseconds) as needed

        // Attach an event listener to hide the loader when the new page is loaded
        window.addEventListener('load', hideLoader);
    };

    useEffect(() => {
        // Add any initialization logic here
    }, []); // Empty dependency array to run the effect only once



        return (
            <div>
                {/* Commented out the loader-related code */}
                {/* <div className="loader"></div> */}
                <header>
                    <Navbar1/>
                   <Panel/>
                </header>
                <div className="slider-container22">
                    <Slider {...sliderSettings}>
                        <div className="alice-carousel__stage-item">
                            <img style={{margin: 'auto', width: '100%', height: '400px'}} src={frontImage}
                                 alt="Slide 1"/>
                        </div>
                        <div className="alice-carousel__stage-item">
                            <img style={{margin: 'auto', width: '100%', height: '400px'}} src={heroImage}
                                 alt="Slide 2"/>
                        </div>
                        <div className="alice-carousel__stage-item">
                            <img style={{margin: 'auto', width: '100%', height: '400px'}} src={hero1Image}
                                 alt="Slide 2"/>
                        </div>
                        <div className="alice-carousel__stage-item">
                            <img style={{margin: 'auto', width: '100%', height: '400px'}} src={hero2Image}
                                 alt="Slide 2"/>
                        </div>
                    </Slider>
                </div>

                <div className="hero-message">
                    <p>
                        You are on Thrifty Tech. You can shop on Thrifty Tech with fast delivery.{' '}
                        <a href="thriftytech.np">Click here to go to thriftytech.np</a>
                    </p>
                </div>

                <div className="shop-section33">
                    {/* First row with 4 boxes */}
                    <div className="box-container33">
                        {/* Box 1 */}
                        <div className="box2 box22">
                            <div className="box22c-content">
                                <h2>Apple</h2>
                                {appleImageURL && <img src={appleImageURL} alt="Apple" className="box-image" />}
                                <div className="button-container22">
                                    <a href="samsung.html" className="button22" style={{ background: 'rgba(0, 0, 0, 0)' }}>
                                        See more
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Box 2 */}
                        <div className="box2 box22">
                            <div className="box22-content">
                                <h2>Samsung</h2>
                                {samsungImageURL && <img src={samsungImageURL} alt="Apple" className="box-image" />}
                                <div className="button-container22">
                                    <a href="samsung.html" className="button22" style={{ background: 'rgba(0, 0, 0, 0)' }}>
                                        See more
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Box 3 */}
                        <div className="box2 box22">
                            <div className="box22-content">
                                <h2>Oppo</h2>
                                {oppoImageURL && <img src={oppoImageURL} alt="Apple" className="box-image" />}
                                <div className="button-container22">
                                    <a href="samsung.html" className="button22" style={{ background: 'rgba(0, 0, 0, 0)' }}>
                                        See more
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Box 4 */}
                        <div className="box2 box22">
                            <div className="box22-content">
                                <h2>Vivo</h2>
                                {vivoImageURL && <img src={vivoImageURL} alt="Apple" className="box-image" />}
                                <div className="button-container22">
                                    <a href="samsung.html" className="button22" style={{ background: 'rgba(0, 0, 0, 0)' }}>
                                        See more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                    {/* Second row with 4 boxes */}

                        {/* First row with 4 boxes */}
                        <div className="box-container3">
                            {/* Box 1 */}
                            <div className="box2 box22">
                                <div className="box22-content">
                                    <h2>Redmi</h2>
                                    {redmiImageURL && <img src={redmiImageURL} alt="Apple" className="box-image" />}
                                    <div className="button-container22">
                                        <a href="samsung.html" className="button22" style={{ background: 'rgba(0, 0, 0, 0)' }}>
                                            See more
                                        </a>
                                    </div>
                                </div>
                            </div>



                        {/* Box 6 */}
                        <div className="box2 box22">
                            <div className="box22-content">
                                <h2>OnePlus</h2>
                                {oneplusImageURL && <img src={oneplusImageURL} alt="Apple" className="box-image" />}
                                <div className="button-container22">
                                    <a href="samsung.html" className="button22" style={{ background: 'rgba(0, 0, 0, 0)' }}>
                                        See more
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Box 7 */}
                        <div className="box2 box22">
                            <div className="box22-content">
                                <h2>iQOOO</h2>
                                {iqooImageURL && <img src={iqooImageURL} alt="Apple" className="box-image" />}
                                <div className="button-container22">
                                    <a href="samsung.html" className="button22" style={{ background: 'rgba(0, 0, 0, 0)' }}>
                                        See more
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Box 8 */}
                        <div className="box2 box22">
                            <div className="box22-content">
                                <h2>Nothing</h2>
                                {nothingImageURL && <img src={nothingImageURL} alt="Apple" className="box-image" />}
                                <div className="button-container22">
                                    <a href="samsung.html" className="button22" style={{ background: 'rgba(0, 0, 0, 0)' }}>
                                        See more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>



                <div className="shop-section2">
                    <div className="box-container1">
                        <div className="boxP">

                        </div>
                        <div className="boxL">

                        </div>
                    </div>
                </div>

                <div className="shop-section3">
                    <div className="box-container1">
                        <div className="boxW">

                        </div>
                        <div className="boxT">

                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );

};

export default HomePage;
