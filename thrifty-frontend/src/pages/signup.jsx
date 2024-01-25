import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {setDoc, doc, collection, addDoc} from 'firebase/firestore';
import { auth, db } from '../Firebase/firebase'; // Assuming you have 'auth' and 'db' instances
import "../styles/signup.css"
const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(""); // Add phone number state
    const [fullName, setFullName] = useState(""); // Add full name state
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;

            // Save user information in the Firestore 'users' collection
            const userDocRef = doc(db, 'users', user.uid);
            await setDoc(userDocRef, {
                uid: user.uid,
                email: user.email,
                phoneNumber: phoneNumber,
                fullName: fullName,
                // Add other user details you want to store in the database
            });


                // Add other user details you want to store in the database


            // Clear form and error state
            setEmail("");
            setPhoneNumber("");
            setFullName("");
            setPassword("");
            setConfirmPassword("");
            setError(null);

            // Redirect to /login upon successful signup
            navigate('/login');
        } catch (error) {
            // Handle signup errors
            if (error.code === "auth/email-already-in-use") {
                setError("Email address is already in use. Please use a different email or try logging in.");
            } else {
                setError("An error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="container">
            <div id="form-ui">
                <form onSubmit={handleSubmit} id="form">
                    <div id="form-body">
                        <div id="welcome-lines">
                            <div id="welcome-line-1">Thrifty Tech</div>
                            <div id="welcome-line-2">Sign Up Here</div>
                        </div>
                        <div id="input-area">
                            <div className="form-inp">
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email Address"
                                    type="email"
                                    required
                                />
                            </div>
                            <div className="form-inp">
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                />
                            </div>
                            <div className="form-inp">
                                <input
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm Password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                />
                            </div>
                            <div className="form-inp">
                                <input
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    placeholder="Phone Number"
                                    type="tel"
                                />
                            </div>
                            <div className="form-inp">
                                <input
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder="Full Name"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="checkbox-container">
                            <input
                                type="checkbox"
                                id="showPassword"
                                checked={showPassword}
                                onChange={() => setShowPassword(!showPassword)}
                            />
                            <label htmlFor="showPassword" id="showPasswordLabel">Show Password</label>
                        </div>
                        {error && <div className="error-message">{error}</div>}
                        <div id="submit-button-cvr">
                            <button id="submit-button" type="submit">
                                Sign Up
                            </button>
                        </div>
                        <div id="bar"></div>
                        <div id="login-link">
                            <p>Already have an account? <Link to="/login">Login</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
