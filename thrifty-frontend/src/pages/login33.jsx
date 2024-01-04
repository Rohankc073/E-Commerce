// Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase';
// import UserProfile from './'; // Correct path to UserProfile component

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredentials = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredentials.user;

            // Redirect to /userprofile upon successful login
            navigate('/home');
        } catch (error) {
            console.error('Firebase Authentication Error:', error);

            // Log the error code and message to the console
            console.log('Error Code:', error.code);
            console.log('Error Message:', error.message);

            // Set the error state with a precise message
            setError(getErrorMessage(error));
        }
    };

    // Function to get a precise error message based on error code
    const getErrorMessage = (error) => {
        if (error.code === "auth/user-not-found") {
            return "Email not found. Please check your email.";
        } else if (error.code === "auth/wrong-password") {
            return "Incorrect password. Please check your password.";
        } else if (error.code === "auth/too-many-requests") {
            return "Your account has been temporarily disabled due to many failed login attempts.";
        } else {
            return "An error occurred. Please try again.";
        }
    };

    return (
        <div className="contain">
            <div id="form-ui">
                <form onSubmit={handleSubmit} id="form12">
                    <div id="form-body">
                        <div id="welcome-lines">
                            <div id="welcome-line-1">Thrifty Tech</div>
                            <div id="welcome-line-2">Welcome Back</div>
                        </div>
                        <div id="input-area">
                            <div className="form-inp">
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email Address"
                                    type="text"
                                />
                            </div>
                            <div className="form-inp">
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    type={showPassword ? "text" : "password"}
                                />
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
                        </div>
                        {error && <div className="error-box">{error}</div>}
                        <div id="submit-button-cvr">
                            <button id="submit-button" type="submit">
                                Login
                            </button>
                        </div>
                        <div id="bar"></div>
                        {/* Link/Button to Signup page */}
                        <div id="signup-link">
                            <p>Don't have an account? <Link to="/signup">Signup</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
