import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../Firebase/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Navbar1 from './navbar';
import '../styles/accounts.css';
import Panel from "./panel";

const UserProfile = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    const [userInfo, setUserInfo] = useState(null);
    const [editableInfo, setEditableInfo] = useState({}); // To track editable fields
    const handleLogout = () => {
        auth.signOut().then(() => {
            navigate('/login');
        });
    };

    useEffect(() => {
        if (user) {
            const fetchUserDetails = async () => {
                const userDocRef = doc(db, 'users', user.uid);
                const userSnapshot = await getDoc(userDocRef);

                if (userSnapshot.exists()) {
                    setUserInfo(userSnapshot.data());
                    // Initialize editableInfo with user details
                    setEditableInfo({
                        email: userSnapshot.data().email,
                        phoneNumber: userSnapshot.data().phoneNumber,
                        fullName: userSnapshot.data().fullName,
                        address: userSnapshot.data().address,
                        city: userSnapshot.data().city,
                    });
                } else {
                    console.error('User details not found in the database.');
                }
            };
            fetchUserDetails();
        }
    }, [user]);

    const handleEdit = (field) => {
        // Enable editing for the specified field
        setEditableInfo({ ...editableInfo, [field]: userInfo[field] });
    };

    const handleSave = async (field) => {
        // Disable editing and update Firestore with the new value
        setEditableInfo({ ...editableInfo, [field]: userInfo[field] });

        const userDocRef = doc(db, 'users', user.uid);
        await updateDoc(userDocRef, {
            [field]: editableInfo[field],
        });
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
            <Panel />
            <div>
                <h1>User Profile</h1>
                {userInfo && (

                    <div>
                        <label>Email: </label>
                        {editableInfo.email ? (
                            <>
                                <input
                                    className='input1'
                                    type="text"
                                    value={editableInfo.email}
                                    onChange={(e) => setEditableInfo({ ...editableInfo, email: e.target.value })}
                                />
                                <button onClick={() => handleSave('email')}>Save</button>
                            </>
                        ) : (
                            <>
                                <span>{userInfo.email}</span>
                                <button   onClick={() => handleEdit('email')}>Edit</button>
                            </>
                        )}
                        <label>Phone Number: </label>
                        <input  className='input1' type="text" value={userInfo.phoneNumber} readOnly/>
                        <label>Full Name: </label>
                        <input className='input1'  type="text" value={userInfo.fullName} readOnly/>
                        <label>Address: </label>
                        <input className='input1' type="text" value={userInfo.address} readOnly/>
                        <label>City: </label>
                        <input className='input1' type="text" value={userInfo.city} readOnly/>

                        {/* Add other user details here */}
                        <button className='Logout_btn' onClick={handleLogout}>Log Out</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default UserProfile;
