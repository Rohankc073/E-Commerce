import React, {useEffect, useState} from 'react';
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../Firebase/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from '../Firebase/firebase';
import { deleteDoc } from 'firebase/firestore';
import '../styles/cartPanel.css'


const CartPanel = ({ isOpen, onClose }) => {
    const [user] = useAuthState(auth);
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [totalprice, setTotalPrice] = useState(0);

    const openCartPanel = () => setIsCartOpen(true);
    const closeCartPanel = () => setIsCartOpen(false);

    const handleRemoveFromCart = async (productId) => {
        if (!user) {
            console.log('User not logged in. Unable to remove item from the cart.');
            return;
        }

        try {
            const userCartRef = collection(db, 'carts');
            const userCartQuery = query(userCartRef, where('userId', '==', user.uid));
            const userCartSnapshot = await getDocs(userCartQuery);

            if (!userCartSnapshot.empty) {
                const userCartDoc = userCartSnapshot.docs[0];
                const userCartItemsRef = collection(db, 'carts', userCartDoc.id, 'items');

                // Find the item with the given productId in the user's cart
                const itemToRemoveQuery = query(userCartItemsRef, where('productId', '==', productId));
                const itemToRemoveSnapshot = await getDocs(itemToRemoveQuery);

                if (!itemToRemoveSnapshot.empty) {
                    // Remove the item from the 'items' subcollection
                    const itemToRemoveDoc = itemToRemoveSnapshot.docs[0];
                    await deleteDoc(itemToRemoveDoc.ref);

                    console.log('Item removed from cart');

                    // Fetch and update cart items after removal
                    fetchCartItems();
                } else {
                    console.log('Item not found in the cart.');
                }
            } else {
                console.log('User has no cart.');
            }
        } catch (error) {
            console.error('Error removing item from cart:', error.message);
        }
    };

    const fetchCartItems = async () => {
        if (!user) {
            console.log('User not logged in. Unable to fetch cart items.');
            return;
        }

        try {
            const cartsRef = collection(db, 'carts');
            const userCartQuery = query(cartsRef, where('userId', '==', user.uid));
            const userCartSnapshot = await getDocs(userCartQuery);

            if (!userCartSnapshot.empty) {
                const userCartDoc = userCartSnapshot.docs[0];
                const userCartItemsRef = collection(db, 'carts', userCartDoc.id, 'items');

                const userCartItemsSnapshot = await getDocs(userCartItemsRef);
                const userCartItems = userCartItemsSnapshot.docs.map((doc) => doc.data());

                console.log('User Cart Items:', userCartItems);

                // Update the component state with cart items
                setCartItems(userCartItems);

                // Calculate total price by summing up individual prices
                const newTotalPrice = userCartItems.reduce((total, item) => {
                    return total + item.totalprice;
                }, 0);

                setTotalPrice(newTotalPrice);
            } else {
                console.log('User has no cart.');
                setCartItems([]); // Clear the component state if the user has no cart
                setTotalPrice(0); // Reset total price
            }
        } catch (error) {
            console.error('Error fetching cart items:', error.message);
        }
    };

    // Call the fetchCartItems function when the component mounts
    useEffect(() => {
        fetchCartItems();
    }, [user]);


    return (
        <div className={`container14 ${isOpen ? 'custom-open' : ''}`}>
            <button className='close_button' onClick={onClose}>Close</button>

            <ul>
                <h2>Your Cart</h2>
                {cartItems.map((item) => (
                    <li key={item.productId} className="cart-item">
                        <div className="cart-item-box">
                            <img src={item.image} alt={item.productName} className="cart-item-image"/>
                            <div className="cart-item-details">
                                <p>{item.productName}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: {item.price}</p>
                            </div>
                        </div>
                        <button className="remove_btn" onClick={() => handleRemoveFromCart(item.productId)}>Remove
                        </button>
                    </li>
                ))}
                <p>Total Price: {totalprice}</p>
            </ul>

            <div className="button-container99">
                <button className='buy_button'>Buy Now</button>
            </div>
        </div>
    );
};


export default CartPanel;
