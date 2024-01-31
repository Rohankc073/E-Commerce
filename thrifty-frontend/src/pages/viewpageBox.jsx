// ProductBox.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../styles/viewpageBox.css'
import { auth, db } from '../Firebase/firebase'

import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

import { useAuthState } from "react-firebase-hooks/auth";
const ProductBox = ({ id, imageUrl, name, price, condition, addToCart, uid, link }) => {
    const [user] = useAuthState(auth);

     const handleAddToCart = async () => {
        // Check if the user is authenticated
        if (!user) {
            alert('Please log in to add the product to the cart.');
            console.log('User not logged in. Please log in to add to cart.');
            console.log('User:', user);
            return;
        }

        const quantity = 1;
        alert("Product Added to cart")

        try {
            // Reference to the 'carts' collection in Firestore
            const cartsRef = collection(db, 'carts');

            // Query to find the user's cart based on userId
            const userCartQuery = query(cartsRef, where('userId', '==', user.uid));

            // Get the query snapshot
            const userCartSnapshot = await getDocs(userCartQuery);

            const userCartDoc = userCartSnapshot.docs[0];
            const userCartItemsRef = collection(db, 'carts', userCartDoc.id, 'items');

            // Add the new item to the 'items' subcollection
            await addDoc(userCartItemsRef, {
                productId: id,
                productName: name,
                quantity: quantity,
                price: price || 0,
                totalprice: quantity * parseInt(price || 0),
                image: imageUrl || '',
            });

            console.log('Item added to cart');
        } catch (error) {
            console.error('Error adding to cart:', error.message);
        }
    };

    return (
        <div className="box1 box34">
            <div className="box-content">
                <div className="button-container123">
                    <button className="love-button12">
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <div className="tooltip12">
                        <button className="add-to-cart-button" onClick={handleAddToCart}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                        <div className="tooltiptext12">Add to Cart</div>
                    </div>
                </div>
                <Link to={`/view/${id}`}>
                    <div className="box-image123" style={{backgroundImage: `url(${imageUrl})`}}></div>
                </Link>

                <div className="caption">
                    <h3 className="product-card-title">{name}</h3>
                    <div className="condition"><span>Condition:</span> {condition}</div>
                    <div className="pricingBox">
                        <div className="salePrice">
                            <span className="currency">NRP</span>
                            <span className="amount">{price}</span>
                        </div>
                        {/* Display other details as needed */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductBox;

