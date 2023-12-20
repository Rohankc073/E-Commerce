import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/register.css';

const SignUpForm = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        fullname: '',
        email: '',
        mobile_no: '',
        address: '',
        password: '',
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', user);

        // Redirect to login page
        navigate('/login');
    };


    return (
        <div className="custom-login-form">
            <div className="custom-left-section">
                <h2>
                    <span>sign </span>up
                </h2>
                <div className="custom-alert alert-danger d-none" id="errorMsg"></div>

                <form onSubmit={handleSubmit}>
                    <div className="custom-form-group">
                        <input
                            type="text"
                            id="fullname"
                            placeholder="FullName"
                            value={user.fullname}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="custom-form-group">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="custom-form-group">
                        <input
                            type="text"
                            id="mobile_no"
                            placeholder="Phone No."
                            value={user.mobile_no}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="custom-form-group">
                        <input
                            type="text"
                            placeholder="Address"
                            id="address"
                            value={user.address}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="custom-form-group">
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={user.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="custom-form-group">
                        <input
                            type="password"
                            id="cpassword"
                            placeholder="Confirm Password"
                            required
                        />
                    </div>

                    <button className="custom-submit-btn" type="submit" onClick={handleSubmit}>
                        submit
                    </button>
                    <p className="custom-ask">
                        Already a member? <a href="/login">Login</a>
                    </p>
                </form>
            </div>



        {/*    <div style={{ backgroundImage: "url('/images/sdfa.png')" }} className="custom-right-section"></div>*/}
        <div className="custom-right-section">

        </div>
        </div>

    );
};

export default SignUpForm;
