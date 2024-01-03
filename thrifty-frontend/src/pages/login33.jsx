import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/adminlogin.css'; // Import your stylesheet if needed
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Redirect to /home upon successful login
            navigate('/home');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="contain">
            <div id="form-ui">
                <form onSubmit={handleSubmit} id="form">
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
                                    type="password"
                                />
                            </div>
                        </div>
                        {error && <div className="error-message">{error}</div>}
                        <div id="submit-button-cvr">
                            <button id="submit-button" type="submit">
                                Login
                            </button>
                        </div>
                        <div id="bar"></div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
