// UserProfile.jsx
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../Firebase/firebase'; // Assuming you have 'auth' and 'db' instances
import { doc, getDoc } from 'firebase/firestore';

const UserProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        if (user) {
            // Fetch user details from the Firestore 'users' collection
            const fetchUserDetails = async () => {
                const userDocRef = doc(db, 'users', user.uid);
                const userSnapshot = await getDoc(userDocRef);

                if (userSnapshot.exists()) {
                    setUserInfo(userSnapshot.data());
                } else {
                    console.error('User details not found in the database.');
                }
            };

            fetchUserDetails();
        }
    }, [user]);


    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        console.error('Firebase Authentication Error:', error);
        return <p>An error occurred. Please try again later.</p>;
    }

    return (
        <div>
            <h1>User Profile</h1>
            {userInfo && (
                <div>
                    <p>Email: {userInfo.email}</p>
                    <p>Phone Number: {userInfo.phoneNumber}</p>
                    <p>Full Name: {userInfo.fullName}</p>
                    {/* Add other user details here */}
                    <button>Log Out </button>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
