// // PaymentPage.jsx
//
// import React, { useState, useEffect } from 'react';
// import { auth, db } from '../Firebase/firebase';
//
// const PaymentPage = () => {
//     const [user, setUser] = useState(null);
//     const [location, setLocation] = useState('');
//     const [cardDetails, setCardDetails] = useState('');
//
//     useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged((user) => {
//             if (user) {
//                 setUser(user);
//             } else {
//                 setUser(null);
//             }
//         });
//
//         return () => unsubscribe();
//     }, []);
//
//     const handleLocationChange = (e) => {
//         setLocation(e.target.value);
//     };
//
//     const handleCardDetailsChange = (e) => {
//         setCardDetails(e.target.value);
//     };
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//
//         if (!user) {
//             // Handle case where no user is logged in
//             return;
//         }
//
//         // Update or create the 'deliveryLocation' and 'cardDetails' fields in Realtime Database
//         db.ref(`users/${user.uid}`).update({
//             deliveryLocation: location,
//             cardDetails: cardDetails,
//         });
//
//         // Add logic to handle payment and other actions
//         console.log('Payment successful!');
//
//         // Reset form fields
//         setLocation('');
//         setCardDetails('');
//     };
//
//     return (
//         <div>
//             {user ? (
//                 <div>
//                     <h2>Welcome, {user.email}!</h2>
//                     <form onSubmit={handleSubmit}>
//                         <label>
//                             Delivery Location:
//                             <input type="text" value={location} onChange={handleLocationChange} />
//                         </label>
//                         <br />
//                         <label>
//                             Card Details:
//                             <input type="text" value={cardDetails} onChange={handleCardDetailsChange} />
//                         </label>
//                         <br />
//                         <button type="submit">Submit Payment</button>
//                     </form>
//                 </div>
//             ) : (
//                 <p>Please log in to access the payment page.</p>
//             )}
//         </div>
//     );
// };
//
// export default PaymentPage;
