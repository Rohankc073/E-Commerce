import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'; // Import useNavigate instead of useHistory
import '../styles/signup.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase';

const Signup = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;

            // Clear form fields upon successful registration
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            setError(null);

            // Redirect to the login page
            navigate('/login');
        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                setError("Email address is already in use. Please use a different email or try logging in.");
            } else {
                setError(error.message);
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
                                <input onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" type="email" />
                            </div>
                            <div className="form-inp">
                                <input onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
                            </div>
                            <div className="form-inp">
                                <input onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" type="password" />
                            </div>
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
