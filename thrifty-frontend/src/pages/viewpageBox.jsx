// ProductBox.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../styles/viewpageBox.css'
const ProductBox = ({ imageUrl, name, price, condition }) => {
    return (
        <div className="box1 box34">
            <div className="box-content">
                <div className="button-container12">
                    <button className="love-button12">
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                </div>
                <Link to="/view">
                    <div className="box-image123" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                </Link>
                <div className="caption">
                    <h3 className="product-card-title">{name}</h3>
                    <div className="condition"><span>Condition:</span> {condition}</div>
                    <div className="pricingBox">
                        <div className="salePrice">
                            <span className="currency">NRP</span>
                            <span className="amount">{price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductBox;
