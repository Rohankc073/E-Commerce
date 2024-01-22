// ProductBox.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../styles/viewpageBox.css'
const ProductBox = ({ id,imageUrl, name, price, condition,addToCart }) => {
    const handleAddToCart = () => {
        // You can perform any additional logic here before adding to the cart
        addToCart(id);
    };
    return (
        <div className="box1 box34">
            <div className="box-content">
                <div className="button-container12">
                    <button className="love-button12">
                        <FontAwesomeIcon icon={faHeart}/>
                    </button>
                    <button className="add-to-cart-button" onClick={handleAddToCart}>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                </div>
                <Link to="/view">
                    <div className="box-image123" style={{backgroundImage: `url(${imageUrl})` }}></div>
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
