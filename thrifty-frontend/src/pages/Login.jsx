import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/login.css";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        // Perform your login logic here...

        // After successful login, navigate to the home page
        navigate('/home');
    };

    return (
        <>
            <div className="login-form">
                <div className="left-section">
                    <h2>Sign In</h2>
                    <form onSubmit={handleLogin}>
                        <div className="formAlign">
                            <div className="formGroup">
                                <input
                                    type="text"
                                    id="fullname"
                                    name="email"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="formGroup">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <a href="/user/forgotpassword" className="forgot">
                                <small>Forgot Password?</small>
                            </a>
                            <button type="submit" className="btn btn-secondary btn-align">
                                Login
                            </button>
                            <p className="ask">
                                Don't Have An Account? <a href="Signup.html">SignUp</a>
                            </p>
                            <p className="ask">
                                Don't Have An Account?{' '}
                                <a href="/admin/adminlogin">Admin</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
