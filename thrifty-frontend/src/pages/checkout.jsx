import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../Firebase/firebase';
import {doc, getDoc, updateDoc, collection, getDocs, query, where, deleteDoc} from 'firebase/firestore';
import Navbar1 from './navbar';
import '../styles/checkout.css';
import { addDoc, writeBatch } from 'firebase/firestore';


const UpdateProfilePage = () => {
    const [user, loading, error] = useAuthState(auth);
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [cartItems, setCartItems] = useState([]);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false); // Added state for success pop-up
    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    useEffect(() => {
        if (user) {
            // Fetch user details from the Firestore 'users' collection
            const fetchUserDetails = async () => {
                try {
                    const userDocRef = doc(db, 'users', user.uid);
                    const userSnapshot = await getDoc(userDocRef);

                    if (userSnapshot.exists()) {
                        const userData = userSnapshot.data();
                        setDisplayName(userData.fullName || '');
                        setEmail(userData.email || '');
                        setPhoneNumber(userData.phoneNumber || '');
                        // Set other states accordingly
                    } else {
                        console.error('User details not found in the database.');
                    }
                } catch (error) {
                    console.error('Error fetching user data:', error.message);
                }
            };
            fetchUserDetails();
        }
    }, [user]);

    useEffect(() => {
        // Fetch cart items
        const fetchCartItems = async () => {
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
                    setCartItems(userCartItems);
                } else {
                    console.log('User has no cart.');
                    setCartItems([]); // Clear the component state if the user has no cart
                }
            } catch (error) {
                console.error('Error fetching cart items:', error.message);
            }
        };

        // Call the fetchCartItems function when the component mounts
        if (user) {
            fetchCartItems();
        }
    }, [user]);
    const totalCartPrice = calculateTotalPrice();

    const handleUpdateProfile = async () => {if (!address ) {
        console.error('Please fill out all the required fields.');
        // You might want to display an error message to the user or prevent further actions.
        return;
    }

        try {
            // Update user information in Firestore
            const userDocRef = doc(db, 'users', user.uid);
            await updateDoc(userDocRef, {
                displayName,
                email,
                address,
                city,
                state,
                zip,
            });

            console.log('User information updated successfully.');

            // Create an order in the "orders" collection
            const ordersRef = collection(db, 'orders');
            const newOrderDocRef = await addDoc(ordersRef, {
                userId: user.uid,
                fullName: displayName,
                email,
                address,
                city,
                state,

                items: cartItems,
                orderDate: new Date(),
            });

            console.log('Order created successfully. Order ID:', newOrderDocRef.id);

            // Clear the user's cart items
            const userCartRef = collection(db, 'carts');
            const userCartQuery = query(userCartRef, where('userId', '==', user.uid));
            const userCartSnapshot = await getDocs(userCartQuery);

            if (!userCartSnapshot.empty) {
                const userCartDoc = userCartSnapshot.docs[0];
                const userCartItemsRef = collection(db, 'carts', userCartDoc.id, 'items');

                // Delete all items in the user's cart using asynchronous iteration
                const deleteCartItemsPromises = cartItems.map(async (item) => {
                    const itemQuery = query(userCartItemsRef, where('productId', '==', item.productId));
                    const itemSnapshot = await getDocs(itemQuery);

                    if (!itemSnapshot.empty) {
                        const itemDoc = itemSnapshot.docs[0];
                        await deleteDoc(itemDoc.ref);
                    }
                });

                await Promise.all(deleteCartItemsPromises);

                console.log('User cart items cleared successfully.');
                alert('Order placed successfully!');

                // Redirect to /home after a delay
                setTimeout(() => {
                    window.location.href = '/home';
                }, 100); // Redirect after 3 seconds (adjust as needed)
            } else {
                console.log('User has no cart.');
            }
        } catch (error) {
            console.error('Error during checkout:', error.message);
        }
    };



    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        console.error('Firebase Authentication Error:', error);
        return <p>An error occurred. Please try again later.</p>;
    }

    return (
        <>
            <Navbar1 />
            <div className="container334">
                <div className='left2'>
                    {/* Billing Address Form */}
                    <h2>Billing Address</h2>
                    <form>
                        Full name
                        <input
                            type="text1"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            readOnly
                        />
                        Email
                        <input
                            type="text1"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            readOnly
                        />
                        Phone Number
                        <input
                            type="text1"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        Address
                        <input
                            type="text1"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        City
                        <input
                            type="text1"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <div id="zip">
                            <label>
                                State
                                <select value={state} onChange={(e) => setState(e.target.value)}>
                                    <option>Choose State..</option>
                                    <option>Kathmandu</option>
                                    <option>Butwal</option>
                                    <option>Jhapa</option>
                                    <option>Dharan</option>
                                </select>
                            </label>


                        </div>
                        <h3>Total Price: {totalCartPrice}</h3>

                        <div className="checkbox-container">
                            <input
                                type="checkbox"
                                id="showPassword"
                                // checked={showPassword}
                                // onChange={() => setShowPassword(!showPassword)}
                            />
                            <label htmlFor="showPassword" id="showPasswordLabel">Cash On Delivery</label>
                        </div>
                        {/*<label>*/}
                        {/*    <input*/}
                        {/*        type="checkbox"*/}

                        {/*    />*/}
                        {/*    Cash on Delivery*/}
                        {/*</label>*/}

                    </form>
                    <button className='submit_btn' onClick={handleUpdateProfile}>
                        <h4>Check Out</h4>
                    </button>

                </div>
                <div className="cart-items-container">
                    <h2>Your Cart</h2>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.productId}>
                                {item.productName}
                                <img src={item.image} alt={item.productName}/>
                                Quantity: {item.quantity}
                                <p>Price: {item.price}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Payment Form */}



            </div>

        </>
    );

};

export default UpdateProfilePage;
