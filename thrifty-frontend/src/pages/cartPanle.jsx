import React, {useEffect, useState} from 'react';
import {collection, getDocs, query, where} from "firebase/firestore";
import {db} from "../Firebase/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import { auth } from '../Firebase/firebase';



const CartPanel = ({ isOpen, onClose }) => {
    const [user] = useAuthState(auth);
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const openCartPanel = () => setIsCartOpen(true);
    const closeCartPanel = () => setIsCartOpen(false);

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
                setCartItems(userCartItems); // Update the component state with cart items
            } else {
                console.log('User has no cart.');
                setCartItems([]); // Clear the component state if the user has no cart
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
            <ul>
                {cartItems.map((item) => (
                    <li key={item.productId}>
                        <img src={item.image} alt={item.productName} style={{width: '50px', height: '50px'}}/>
                        {item.productName} - Quantity: {item.quantity}
                    </li>
                ))}
            </ul>

            <button onClick={onClose}>Close</button>
            <button>Buy Now</button>
            {/*</div>*/}
            {/*</div>*/}
        </div>

    );
};


export default CartPanel;
