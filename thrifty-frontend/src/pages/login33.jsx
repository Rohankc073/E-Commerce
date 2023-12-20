import React, { useState, useEffect } from 'react';
import '../styles/login33.css'; // Import your CSS file

const Login33 = () => {
    const signup = () => {
        // Add your signup logic here
        console.log('Sign up clicked');
    };

    const signin = () => {
        // Add your signin logic here
        console.log('Sign in clicked');
    };
    const [isSignIn, setIsSignIn] = useState(true);

    const toggle = () => {
        setIsSignIn((prevIsSignIn) => !prevIsSignIn);
    };

    useEffect(() => {
        // Add 'sign-in' class after 200 milliseconds
        const timeoutId = setTimeout(() => {
            setIsSignIn(true);
        }, 200);

        // Cleanup function to clear the timeout on component unmount
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div id="container" className={`container ${isSignIn ? 'sign-in' : 'sign-up'}`}>
            {/* FORM SECTION */}
            <div className="row">
                {/* SIGN UP */}
                <div className="col align-items-center flex-col sign-up">
                    <div className="form-wrapper align-items-center">
                        <div className="form sign-up">
                            <div className="input-group">
                                <i className='bx bxs-user'></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-group">
                                <i className='bx bx-mail-send'></i>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input type="password" placeholder="Confirm password" />
                            </div>
                            {/* Sign up button */}
                            <button onClick={signup}>
                                Sign up
                            </button>
                            {/* Link to sign in */}
                            <p>
                <span>
                  Already have an account?
                </span>
                                <b onClick={toggle} className="pointer">
                                    Sign in here
                                </b>
                            </p>
                        </div>
                    </div>
                </div>
                {/* END SIGN UP */}
                {/* SIGN IN */}
                <div className="col align-items-center flex-col sign-in">
                    <div className="form-wrapper align-items-center">
                        <div className="form sign-in">
                            <div className="input-group">
                                <i className='bx bxs-user'></i>
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="input-group">
                                <i className='bx bxs-lock-alt'></i>
                                <input type="password" placeholder="Password" />
                            </div>
                            {/* Sign in button */}
                            <button onClick={signin}>
                                Sign in
                            </button>
                            {/* Link to sign up */}
                            <p>
                                <b>
                                    Forgot password?
                                </b>
                            </p>
                            <p>
                <span>
                  Don't have an account?
                </span>
                                <b onClick={toggle} className="pointer">
                                    Sign up here
                                </b>
                            </p>
                        </div>
                    </div>
                    <div className="form-wrapper">

                    </div>
                </div>
                {/* END SIGN IN */}
            </div>
            {/* END FORM SECTION */}
            {/* CONTENT SECTION */}
            <div className="row content-row">
                {/* SIGN IN CONTENT */}
                <div className="col align-items-center flex-col">
                    <div className="text sign-in">
                        <h2>
                            Welcome
                        </h2>
                    </div>
                    <div className="img sign-in">

                    </div>
                </div>
                {/* END SIGN IN CONTENT */}
                {/* SIGN UP CONTENT */}
                <div className="col align-items-center flex-col">
                    <div className="img sign-up">

                    </div>
                    <div className="text sign-up">
                        <h2>
                            Join with us
                        </h2>
                    </div>
                </div>
                {/* END SIGN UP CONTENT */}
            </div>
            {/* END CONTENT SECTION */}
        </div>
    );
};

export default Login33;
