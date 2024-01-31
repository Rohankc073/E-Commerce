import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../Firebase/firebase'; // Assuming you have 'auth' and 'db' instances
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';
import Navbar1 from './navbar';

const UpdateProfilePage = () => {
    const [user, loading, error] = useAuthState(auth);
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {
        if (user) {
            // Fetch user details from the Firestore 'users' collection
            const fetchUserDetails = async () => {
                try {
                    const userDocRef = doc(db, 'users', user.uid);
                    const userSnapshot = await getDoc(userDocRef);

                    if (userSnapshot.exists()) {
                        const userData = userSnapshot.data();
                        setDisplayName(userData.displayName || '');
                        setEmail(userData.email || '');
                        setAddress(userData.address || ''); // Assuming address is a field in the user document
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

    return (
        <>
            <Navbar1 />
            <div>
                <h1>Update Profile</h1>
                <label>
                    Display Name:
                    <input
                        type="text"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        readOnly // Email is usually not editable
                    />
                </label>
                <br />
                <label>
                    Address:
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </label>
                <br />
                <button onClick={handleUpdateProfile}>Update Profile</button>
            </div>
        </>
    );
};

export default UpdateProfilePage;
