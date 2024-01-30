// import React, { useState, useEffect } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
// import { loadStripe } from '@stripe/stripe-js';
//
// const PaymentSystem = () => {
//     const [user, setUser] = useState(firebase.auth().currentUser);
//     const [location, setLocation] = useState('');
//     const [paymentMethod, setPaymentMethod] = useState(null);
//
//     const stripePromise = loadStripe('<YOUR_STRIPE_PUBLISHABLE_KEY>');
//
//     useEffect(() => {
//         const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
//             setUser(firebaseUser);
//
//             if (firebaseUser) {
//                 fetchUserInfoAndLocation(firebaseUser.uid);
//             } else {
//                 setLocation('');
//             }
//         });
//
//         return () => unsubscribe();
//     }, []);
//
//     const fetchUserInfoAndLocation = async (userId) => {
//         try {
//             const userDoc = await firebase.firestore().collection('users').doc(userId).get();
//             const userData = userDoc.data();
//
//             if (userData) {
//                 setLocation(userData.location || '');
//             }
//         } catch (error) {
//             console.error('Error fetching user info:', error.message);
//         }
//     };
//
//     const handlePayment = async () => {
//         if (!user) {
//             // User not logged in
//             alert('Please log in to proceed with the payment.');
//             return;
//         }
//
//         try {
//             // Integrate with Stripe to get a payment method token
//             const stripe = await stripePromise;
//             const { paymentMethod } = await stripe.createPaymentMethod({
//                 type: 'card',
//                 card:"Hi" /* Card Element or Source */,
//             });
//
//             setPaymentMethod(paymentMethod);
//
//             // Update user document with payment method
//             await firebase.firestore().collection('users').doc(user.uid).update({
//                 paymentMethod: paymentMethod.id,
//             });
//
//             alert('Payment successful!');
//         } catch (error) {
//             console.error('Error processing payment:', error.message);
//         }
//     };
//
//     return (
//         <div>
//             {user ? (
//                 <div>
//                     <p>Welcome, {user.displayName || user.email}!</p>
//                     <p>Location: {location}</p>
//                     <button onClick={handlePayment}>Make Payment</button>
//                 </div>
//             ) : (
//                 <p>Please log in to use the payment system.</p>
//             )}
//         </div>
//     );
// };
//
// export default PaymentSystem;
