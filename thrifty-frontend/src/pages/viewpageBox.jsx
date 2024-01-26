// ProductBox.js
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../styles/viewpageBox.css'
import {auth, db} from '../Firebase/firebase'
import { collection, addDoc } from 'firebase/firestore';
import {useAuthState} from "react-firebase-hooks/auth";
import product from "./product";
const ProductBox = ({ id, imageUrl, name, price, condition, addToCart, uid }) => {
    const [user] = useAuthState(auth);

    const handleAddToCart = async () => {
        // Check if the user is authenticated
        if (!user) {
            alert('Please log in to add the product to the cart.');
            // If not authenticated, show a message or redirect to the login page
            console.log('User not logged in. Please log in to add to cart.');
            console.log('User:', user);
            // You can redirect to the login page or display a login modal here
            return;
        }

        // Rest of the code for adding to cart
        console.log(user);
        const quantity = 1;
        try {
            // Reference to the 'cart' collection in Firestore
            const cartRef = collection(db, 'carts');
            const data = {
                userId: user.uid,  // Assuming the user object has a uid property
                productId: id,
                productName : name,
                quantity: quantity,
                createdAt: new Date(),
                price: price,
                totalprice: quantity * parseInt(price),
                image: imageUrl,
            };

            // Add a new document to the 'cart' collection
            const cartItem = await addDoc(cartRef, data);
            console.log('added to cart');

            // Optionally, you can perform additional actions after adding to cart
            // For example, navigate to the cart page or display a success message
        } catch (error) {
            console.error('Error adding to cart:', error.message);
            // Handle errors, e.g., display an error message to the user
        }
    };
    return (

        <div className="box1 box34">
            <div className="box-content">
                <div className="button-container123">
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
