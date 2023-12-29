import React from 'react';
import '../styles/hpboxes.css'
const ProductBox = ({ image, title, condition, salePrice, mainPrice }) => {
    return (
        <div className="box1 box">
            <div className="box-content">
                <div className="button-container">
                    <button className="love-button"><i className="fa-regular fa-heart"></i></button>
                </div>
                <div className="box-image" style={{ backgroundImage: `url(${image})` }}></div>
                <div className="caption">
                    <h3 className="product-card-title">{title}</h3>
                    <div className="condition"><span>Condition:</span> {condition}</div>
                    <div className="pricingBox">
                        <div className="salePrice">
                            <span className="currency">NRP</span>
                            <span className="amount">{salePrice}</span>
                        </div>
                        <div className="d-flex text-truncate">
                            <div className="mainPrice">
                                NRP {mainPrice}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductBox;
