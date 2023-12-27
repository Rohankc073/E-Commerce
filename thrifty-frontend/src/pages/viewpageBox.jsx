// Box.js
import React from 'react';
import '../styles/viewpageBox.css';

const Box = ({ title, imageSrc, altText, description, price, condition, color, buttonText, buttonLink }) => {
    return (
        <div className="box2 box">
            <div className="box-content">
                <h2>{title}</h2>
                {imageSrc && <img src={imageSrc} alt={altText} className="box-image" />}
                <div className="product-details">
                    <p>{description}</p>
                    <p>Price: {price}</p>
                    <p>Condition: {condition}</p>
                    <p>Color: {color}</p>
                </div>
                <div className="button-container">
                    <a href={buttonLink} className="button">{buttonText}</a>
                </div>
            </div>
        </div>
    );
};

export default Box;
