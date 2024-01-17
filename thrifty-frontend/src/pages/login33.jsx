import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successMsg, setSuccessMsg] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const auth = getAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            setSuccessMsg('Logged in successfully, you will be redirected to the home page');
            setEmail('');
            setPassword('');
            setErrorMsg('');

            setTimeout(() => {
                setSuccessMsg('');
                navigate('/home');
            }, 3000);
        } catch (error) {
            const errorCode = error.code;
            console.error('Login error:', error);

            if (errorCode === 'auth/invalid-email') {
                setErrorMsg('Invalid email format');
            } else if (errorCode === 'auth/user-not-found') {
                setErrorMsg('User not found');
            } else if (errorCode === 'auth/wrong-password') {
                setErrorMsg('Wrong password');
            } else {
                setErrorMsg('An error occurred. Please try again later.');
            }

            // Clear the password field on error (you might choose to clear the email field as well)
            setPassword('');
        }
    };


    return (
        <div className="contain">
            <div id="form-ui">
                <form id="form12">
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
                                    type={showPassword ? 'text' : 'password'}
                                />
                            </div>
                            <div className="checkbox-container">
                                <input
                                    type="checkbox"
                                    id="showPassword"
                                    checked={showPassword}
                                    onChange={() => setShowPassword(!showPassword)}
                                />
                                <label htmlFor="showPassword" id="showPasswordLabel">
                                    Show Password
                                </label>
                            </div>
                        </div>
                        {successMsg && <div className="success-mag">{successMsg}</div>}
                        {errorMsg && <div className="error-mag">{errorMsg}</div>}
                        <div id="submit-button-cvr">
                            <button className= "loginButton" onClick={handleLogin}>Login</button>
                        </div>
                        <div id="bar"></div>
                        {/* Link/Button to Signup page */}
                        <div id="signup-link">
                            <p>
                                Don't have an account? <Link to="/signup">Signup</Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
