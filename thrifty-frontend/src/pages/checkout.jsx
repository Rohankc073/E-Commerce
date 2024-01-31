import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../Firebase/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import Navbar1 from './navbar';
import '../styles/payment.css'
import CartPanel from "./cartPanle";

const UpdateProfilePage = () => {
    const [user, loading, error] = useAuthState(auth);
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expMonth, setExpMonth] = useState('');
    const [expYear, setExpYear] = useState('');
    const [cvv, setCvv] = useState('');

    useEffect(() => {
        if (user) {
            // Fetch user details from the Firestore 'users' collection
            const fetchUserDetails = async () => {
                try {
                    const userDocRef = doc(db, 'users', user.uid);
                    const userSnapshot = await getDoc(userDocRef);

                    if (userSnapshot.exists()) {
                        const userData = userSnapshot.data();
                        setDisplayName(userData.fullName || '');  // Update this line
                        setEmail(userData.email || '');
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
    const handleUpdateProfile = async () => {
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
                cardNumber,
                expMonth,
                expYear,
                cvv,
            });

            console.log('User information updated successfully.');
        } catch (error) {
            console.error('Error updating user information:', error.message);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        console.error('Firebase Authentication Error:', error);
        return <p>An error occurred. Please try again later.</p>;
    }

// ...

    return (
        <>
            <Navbar1 />
            <div className="container334">
                <div className='left2'>
                {/* Billing Address Form */}
                <h3>Billing Address</h3>
                <form>
                    Full name
                    <input
                        type="text"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        readOnly
                    />
                    Email
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        readOnly
                    />
                    Address
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    City
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <div id="zip">
                        <label>
                            State
                            <select value={state} onChange={(e) => setState(e.target.value)}>
                                <option>Choose State..</option>
                                <option>Rajasthan</option>
                                <option>Haryana</option>
                                <option>Uttar Pradesh</option>
                                <option>Madhya Pradesh</option>
                            </select>
                        </label>
                        <label>
                            Zip code
                            <input
                                type="number"
                                value={zip}
                                onChange={(e) => setZip(e.target.value)}
                            />
                        </label>

                    </div>

                </form>
                </div>

                {/* Payment Form */}

                <button className='submit_btn' onClick={handleUpdateProfile}>
                   CheckOut

                </button>
            </div>

        </>
    );

};

export default UpdateProfilePage;
