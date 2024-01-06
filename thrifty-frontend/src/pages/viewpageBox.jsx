import React from 'react';
import '../styles/viewpageBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const ProductBox = ({ imageUrl, name, price, condition }) => {
    return (
        <div className="box1 box34">
            <div className="box-content">
                <div className="button-container12">
                    <button className="love-button12">
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                </div>
                <div className="box-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                <div className="caption">
                    <h3 className="product-card-title">{name}</h3>
                    <div className="condition"><span>Condition:</span> {condition}</div>
                    <div className="pricingBox">
                        <div className="salePrice">
                            <span className="currency">NRP</span>
                            <span className="amount">{price}</span>
                        </div>
                        <div className="d-flex text-truncate">
                            <div className="mainPrice">
                                NRP {price}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductBox;
