// Box.js
import React, { useEffect, useState } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from '../Firebase/firebase';
import '../styles/viewpageBox.css';

const Box = ({ title, imageSrcList, altText, buttonText, buttonLink }) => {
    const [imageURL, setImageURL] = useState('');

    useEffect(() => {
        const fetchImageURL = async () => {
            try {
                // Assuming imageSrcList is an array of paths in your Cloud Storage
                const randomImagePath = imageSrcList[Math.floor(Math.random() * imageSrcList.length)];
                const imageRef = ref(storage, randomImagePath);
                const url = await getDownloadURL(imageRef);
                setImageURL(url);
            } catch (error) {
                console.error('Error fetching image URL:', error);
            }
        };

        fetchImageURL();
    }, [imageSrcList]);

    return (
        <div className="box2 box">
            <div className="box-content">
                <h2>{title}</h2>
                {imageURL && <img src={imageURL} alt={altText} className="box-image" />}
                <div className="button-container">
                    <a href={buttonLink} className="button">
                        {buttonText}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Box;
