// Login.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/adminlogin.css'; // Import your stylesheet if needed
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Redirect to /home upon successful login
            navigate('/home');
        } catch (error) {
            switch (error.code) {
                case "auth/user-not-found":
                    setError("Email is incorrect");
                    break;
                case "auth/wrong-password":
                    setError("Password is incorrect");
                    break;
                default:
                    setError("Both email and password are incorrect");
            }
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
